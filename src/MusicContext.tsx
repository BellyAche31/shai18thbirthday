import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import invitationConfig from './config'
import assetUrl from './assetUrl'

const FADE_MS = 1200
const FADE_STEPS = 24

type MusicState = {
  playing: boolean
  /** True when the audio file itself is missing or failed to load. */
  unavailable: boolean
  /** Begin playback once, on the guest's first gesture. Safe to call repeatedly. */
  start: () => void
  toggle: () => void
}

const MusicContext = createContext<MusicState | null>(null)

export function useMusic(): MusicState {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used inside a <MusicProvider>')
  return ctx
}

/**
 * Owns the single <audio> element for the whole app.
 *
 * It lives above the router on purpose: the guest crosses from the cover page
 * to the invitation, and an <audio> element mounted inside either route would
 * unmount on navigation and cut the music mid-note.
 */
export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const attemptedRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  const targetVolume = invitationConfig.musicVolume

  const clearFade = () => {
    if (fadeRef.current !== null) {
      window.clearInterval(fadeRef.current)
      fadeRef.current = null
    }
  }

  useEffect(() => clearFade, [])

  /** Ease the volume toward `to` so the track never cuts in or out abruptly. */
  const fadeTo = (to: number, onDone?: () => void) => {
    const audio = audioRef.current
    if (!audio) return

    clearFade()
    const from = audio.volume
    const delta = (to - from) / FADE_STEPS
    let step = 0

    fadeRef.current = window.setInterval(() => {
      step += 1
      const next = step >= FADE_STEPS ? to : from + delta * step
      audio.volume = Math.min(1, Math.max(0, next))
      if (step >= FADE_STEPS) {
        clearFade()
        onDone?.()
      }
    }, FADE_MS / FADE_STEPS)
  }

  const play = async () => {
    const audio = audioRef.current
    if (!audio || unavailable) return

    try {
      clearFade()
      audio.volume = 0
      await audio.play()
      setPlaying(true)
      fadeTo(targetVolume)
    } catch {
      // The browser declined to play (autoplay policy, or the guest has media
      // blocked). Not an error worth surfacing — the floating button is still
      // there for them to start it themselves.
      clearFade()
      setPlaying(false)
    }
  }

  const pause = () => {
    const audio = audioRef.current
    if (!audio) return
    setPlaying(false)
    fadeTo(0, () => audio.pause())
  }

  const start = () => {
    if (attemptedRef.current || !invitationConfig.autoplayOnOpen) return
    attemptedRef.current = true
    void play()
  }

  const toggle = () => {
    attemptedRef.current = true
    if (playing) pause()
    else void play()
  }

  // Safety net for guests who land straight on the invitation (a shared deep
  // link, or a refresh past the cover) and so never tap the seal: the first
  // tap anywhere opens the music, since that gesture is what browsers require.
  const startRef = useRef(start)
  startRef.current = start
  useEffect(() => {
    if (!invitationConfig.autoplayOnOpen) return
    const onFirstGesture = () => startRef.current()
    window.addEventListener('pointerdown', onFirstGesture, { once: true })
    return () => window.removeEventListener('pointerdown', onFirstGesture)
  }, [])

  return (
    <MusicContext.Provider value={{ playing, unavailable, start, toggle }}>
      <audio
        ref={audioRef}
        src={assetUrl(invitationConfig.musicFile)}
        loop
        // Light on mobile data: fetch headers only, then stream on play.
        // At 64kbps the track starts near-instantly, and the fade-in covers
        // the moment of buffering.
        preload="metadata"
        onError={() => setUnavailable(true)}
      />
      {children}
    </MusicContext.Provider>
  )
}

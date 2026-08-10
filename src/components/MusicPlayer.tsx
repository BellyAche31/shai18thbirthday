import { useEffect, useRef, useState } from 'react'
import invitationConfig from '../config'
import assetUrl from '../assetUrl'

const FADE_MS = 800
const FADE_STEPS = 16

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  const targetVolume = invitationConfig.musicVolume

  const clearFade = () => {
    if (fadeRef.current !== null) {
      window.clearInterval(fadeRef.current)
      fadeRef.current = null
    }
  }

  // Never leave a fade timer running after unmount.
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

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio || unavailable) return

    try {
      if (playing) {
        setPlaying(false)
        fadeTo(0, () => audio.pause())
      } else {
        // Start silent and rise, so tapping play feels like the room
        // warming up rather than a speaker switching on.
        clearFade()
        audio.volume = 0
        await audio.play()
        setPlaying(true)
        fadeTo(targetVolume)
      }
    } catch {
      clearFade()
      setUnavailable(true)
      setPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio
        ref={audioRef}
        src={assetUrl(invitationConfig.musicFile)}
        loop
        preload="none"
        onError={() => setUnavailable(true)}
      />
      <button
        onClick={toggle}
        disabled={unavailable}
        aria-label={playing ? 'Pause music' : 'Play music'}
        aria-pressed={playing}
        title={unavailable ? 'Music coming soon' : playing ? 'Pause music' : 'Play music'}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
          unavailable
            ? 'border-gold/15 opacity-40 cursor-not-allowed'
            : 'border-gold/40 bg-ink/70 backdrop-blur-md hover:border-gold hover:bg-ink/90'
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full border border-gold/30 ${
            playing ? 'animate-spinSlow' : ''
          }`}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${unavailable ? 'text-gold/40' : 'text-gold'}`}
          fill="currentColor"
        >
          {playing ? (
            <path d="M9 4h2v16H9zM13 4h2v16h-2z" />
          ) : (
            <path d="M9 18V6l10 6-10 6z" />
          )}
        </svg>
      </button>
    </div>
  )
}

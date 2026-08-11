import { useEffect, useRef, useState } from 'react'
import BokehLights from './BokehLights'
import SpottedCard from './SpottedCard'
import assetUrl from '../assetUrl'
import { useT } from '../LanguageContext'

/** title -> the gossip dispatch -> fade out into the invitation. */
type Phase = 'title-in' | 'title' | 'card' | 'out'

// The card carries a full paragraph now (eyebrow, four lines, sign-off), so
// it needs real reading time — not just enough to register the photo.
const TIMINGS = {
  toTitle: 800,
  toCard: 2900,
  toOut: 15000,
  toDone: 15900,
}

const REDUCED = {
  toTitle: 50,
  toCard: 700,
  toOut: 6000,
  toDone: 6500,
}

export default function IntroReveal({ onFinished }: { onFinished: () => void }) {
  const t = useT()
  const [phase, setPhase] = useState<Phase>('title-in')
  const firedRef = useRef(false)
  const armedRef = useRef(false)
  const timers = useRef<number[]>([])
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = () => {
    if (firedRef.current) return
    firedRef.current = true
    onFinished()
  }

  const clearTimers = () => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }

  /** Tap anywhere: skip ahead to the card, or out of the intro entirely. */
  const advance = () => {
    // The tap that opened the invitation can land here the moment this
    // overlay mounts under the finger, skipping the first beat instantly.
    if (!armedRef.current) return

    if (phase === 'title-in' || phase === 'title') {
      clearTimers()
      setPhase('card')
      timers.current.push(window.setTimeout(() => setPhase('out'), 12800))
      timers.current.push(window.setTimeout(finish, 13700))
      return
    }
    clearTimers()
    setPhase('out')
    timers.current.push(window.setTimeout(finish, 900))
  }

  useEffect(() => {
    const t = reducedMotion ? REDUCED : TIMINGS

    timers.current.push(window.setTimeout(() => (armedRef.current = true), 600))
    timers.current.push(window.setTimeout(() => setPhase('title'), t.toTitle))
    timers.current.push(window.setTimeout(() => setPhase('card'), t.toCard))
    timers.current.push(window.setTimeout(() => setPhase('out'), t.toOut))
    timers.current.push(window.setTimeout(finish, t.toDone))

    return clearTimers
  }, [])

  const titleVisible = phase === 'title'
  const cardVisible = phase === 'card'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink"
      onClick={advance}
      role="presentation"
    >
      {/* The city-bokeh loop, shown whole rather than cropped — the lights
          resolve into the wordmark, so filling the screen would cut the
          payoff off. Its own background is black and matches this one, so
          the letterboxing is invisible. A GIF can't be paused, so
          reduced-motion guests get the static blob version instead. */}
      {reducedMotion ? (
        <BokehLights />
      ) : (
        <img
          src={assetUrl('/images/intro-bokeh.gif')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
      <div className="absolute inset-0 bg-ink/25" />

      {/* Beat one: the title, easing up into place. Same reasoning as the
          card — no filter in the transition, so the type stays sharp. */}
      <h1
        // Leaves faster than it arrives, so it's gone before the card lands
        // rather than lingering across it during the crossfade.
        className={`absolute left-1/2 top-[64%] w-full -translate-x-1/2 px-6 text-center font-display text-3xl tracking-wide text-ivory transition-[opacity,transform] ease-out motion-reduce:transition-none sm:text-5xl ${
          titleVisible ? 'translate-y-0 opacity-100 duration-[1300ms]' : 'translate-y-3 opacity-0 duration-300'
        }`}
      >
        {t.intro.title}
      </h1>

      {/* Beat two: the dispatch. */}
      <div className={`relative ${cardVisible ? '' : 'pointer-events-none'}`}>
        <SpottedCard visible={cardVisible} />
      </div>

      <div
        className={`absolute inset-0 bg-ink transition-opacity duration-[900ms] ease-in ${
          phase === 'out' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <button
        onClick={(e) => {
          e.stopPropagation()
          clearTimers()
          setPhase('out')
          timers.current.push(window.setTimeout(finish, 700))
        }}
        className="absolute bottom-6 right-6 z-10 font-sans text-[10px] tracking-widest2 text-ivory/40 uppercase transition-colors hover:text-gold"
      >
        {t.intro.skip}
      </button>
    </div>
  )
}

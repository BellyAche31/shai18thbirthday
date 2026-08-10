import { useEffect, useRef, useState } from 'react'
import BokehLights from './BokehLights'
import SpottedCard from './SpottedCard'

/** title -> the gossip dispatch -> fade out into the invitation. */
type Phase = 'title-in' | 'title' | 'card' | 'out'

const TIMINGS = {
  toTitle: 800,
  toCard: 2900,
  toOut: 8500,
  toDone: 9400,
}

const REDUCED = {
  toTitle: 50,
  toCard: 700,
  toOut: 2600,
  toDone: 3100,
}

export default function IntroReveal({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<Phase>('title-in')
  const firedRef = useRef(false)
  const timers = useRef<number[]>([])

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
    if (phase === 'title-in' || phase === 'title') {
      clearTimers()
      setPhase('card')
      timers.current.push(window.setTimeout(() => setPhase('out'), 6400))
      timers.current.push(window.setTimeout(finish, 7400))
      return
    }
    clearTimers()
    setPhase('out')
    timers.current.push(window.setTimeout(finish, 900))
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = reduced ? REDUCED : TIMINGS

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
      <BokehLights />
      <div className="absolute inset-0 bg-ink/45" />

      {/* Beat one: the title, focusing out of the blur. */}
      <h1
        className={`absolute px-6 text-center font-display text-3xl tracking-wide text-ivory transition-all duration-[1300ms] ease-out motion-reduce:transition-none sm:text-5xl ${
          titleVisible ? 'scale-100 opacity-100 blur-0' : 'scale-95 opacity-0 blur-md'
        }`}
      >
        Shai&rsquo;s 18th Birthday
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
        Skip
      </button>
    </div>
  )
}

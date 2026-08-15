import { useEffect, useRef, useState } from 'react'
import IntroTitle from './IntroTitle'
import SpottedCard from './SpottedCard'
import assetUrl from '../assetUrl'
import { useT } from '../LanguageContext'

/** title -> the gossip dispatch -> fade out into the invitation. */
type Phase = 'title-in' | 'title' | 'card' | 'out'

/** The city the titles open over. */
const CITY = '/images/bg-nyc-midtown.jpg'

// The title now animates letter by letter and needs room to land before the
// card takes over; the card carries a full paragraph, so it needs real
// reading time after that.
const TIMINGS = {
  toTitle: 500,
  toCard: 6200,
  toOut: 18200,
  toDone: 19100,
}

const REDUCED = {
  toTitle: 50,
  toCard: 1400,
  toOut: 6800,
  toDone: 7300,
}

export default function IntroReveal({ onFinished }: { onFinished: () => void }) {
  const t = useT()
  const [phase, setPhase] = useState<Phase>('title-in')
  const [citySettled, setCitySettled] = useState(false)
  // The overlay used to mount already opaque, so the envelope was replaced by
  // a slab of black in a single frame before the skyline began fading up —
  // a visible black slap between the two beats. It now dissolves in over the
  // cover instead.
  const [entered, setEntered] = useState(false)
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

    // Matches the focus-pull keyframes; after this the photo carries no
    // filter at all, only the slow push in.
    timers.current.push(window.setTimeout(() => setCitySettled(true), reducedMotion ? 0 : 3400))

    // Two frames, so the browser paints the transparent state before the
    // transition to opaque starts. One frame gets coalesced and the fade
    // never runs.
    let raf1 = 0
    let raf2 = 0
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setEntered(true))
    })

    return () => {
      clearTimers()
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  const titleVisible = phase === 'title-in' || phase === 'title'
  const cardVisible = phase === 'card'

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink transition-opacity duration-700 ease-out motion-reduce:transition-none ${
        entered ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={advance}
      role="presentation"
    >
      {/* The skyline the titles play over, pulling from defocused lights into
          focus. Kept dark enough that the type never has to fight it. */}
      <img
        src={assetUrl(CITY)}
        alt=""
        aria-hidden="true"
        className={`intro-city absolute inset-0 h-full w-full object-cover ${
          citySettled ? 'is-settled' : ''
        }`}
      />
      {/* Light enough that the skyline is genuinely the backdrop rather than a
          texture — the title carries its own radial bed for contrast. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/85" />

      {/* Beat one: the title card. */}
      <IntroTitle text={t.intro.title} eyebrow={t.intro.eyebrow} visible={titleVisible} />

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

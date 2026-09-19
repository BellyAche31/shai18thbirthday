import { useEffect, useRef, useState } from 'react'

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export default function FlipUnit({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(value)
  const [flipping, setFlipping] = useState(false)
  // The card carries a permanent transition, so dropping `is-flipping` would
  // ease it back from -180deg over another 0.55s — a flip followed by a
  // visible spin in reverse. `is-resetting` kills the transition for the one
  // frame the snap-back happens on.
  const [resetting, setResetting] = useState(false)
  const prevRef = useRef(value)

  useEffect(() => {
    if (value === prevRef.current) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setDisplay(value)
      prevRef.current = value
      return
    }
    setFlipping(true)
    let raf1 = 0
    let raf2 = 0
    const t = window.setTimeout(() => {
      setDisplay(value)
      setFlipping(false)
      setResetting(true)
      prevRef.current = value
      // Two frames: the first paints the transition-less reset, the second
      // re-arms the transition for the next tick.
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setResetting(false))
      })
    }, 550)
    return () => {
      window.clearTimeout(t)
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [value])

  return (
    <div className="relative flex flex-col items-center border border-gold/25 px-2 py-6 sm:px-4 sm:py-10">
      <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-gold/50 sm:left-3 sm:top-3" />
      <span className="absolute right-2 bottom-2 h-2 w-2 border-r border-b border-gold/50 sm:right-3 sm:bottom-3" />

      <div className="flip-unit relative h-[3rem] w-[2.4rem] sm:h-[4.5rem] sm:w-[3.6rem] md:h-[5rem] md:w-[4rem]">
        <div className={`flip-card ${flipping ? 'is-flipping' : ''} ${resetting ? 'is-resetting' : ''}`}>
          <div className="flip-face flip-face-front items-center justify-center">
            <span className="font-display text-4xl tabular-nums text-gold sm:text-6xl md:text-7xl">
              {pad(display)}
            </span>
          </div>
          <div className="flip-face flip-face-back items-center justify-center">
            <span className="font-display text-4xl tabular-nums text-gold sm:text-6xl md:text-7xl">
              {pad(value)}
            </span>
          </div>
        </div>
      </div>

      <span className="mt-3 font-sans text-[9px] tracking-widest2 text-onsurface/70 uppercase sm:text-xs">
        {label}
      </span>
    </div>
  )
}

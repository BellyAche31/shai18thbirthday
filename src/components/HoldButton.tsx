import { forwardRef, useEffect, useRef, useState } from 'react'

/**
 * A button that only fires once it has been held down.
 *
 * The fill is driven by a CSS transition whose duration is the hold duration
 * itself, so the bar and the timer can't drift apart — what a guest sees is
 * literally the thing being waited on. Releasing early snaps it back quickly
 * rather than easing all the way home.
 *
 * Keyboard users can't "hold" a click, so Space and Enter run the same timer
 * between keydown and keyup. There is deliberately no onClick: a plain tap
 * must not open the invitation, or the hold would be decorative.
 */
const HoldButton = forwardRef<
  HTMLButtonElement,
  {
    onComplete: () => void
    label: string
    hint: string
    holdMs?: number
    className?: string
  }
>(function HoldButton({ onComplete, label, hint, holdMs = 1100, className = '' }, ref) {
  const [holding, setHolding] = useState(false)
  const [done, setDone] = useState(false)
  const timer = useRef(0)
  const doneRef = useRef(false)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const start = () => {
    if (doneRef.current || holding) return
    setHolding(true)
    timer.current = window.setTimeout(() => {
      doneRef.current = true
      setDone(true)
      setHolding(false)
      onComplete()
    }, holdMs)
  }

  const cancel = () => {
    if (doneRef.current) return
    window.clearTimeout(timer.current)
    setHolding(false)
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        ref={ref}
        type="button"
        onPointerDown={(e) => {
          // Keeps the press from turning into a text selection or a drag
          // halfway through the hold.
          e.currentTarget.setPointerCapture?.(e.pointerId)
          start()
        }}
        onPointerUp={cancel}
        onPointerCancel={cancel}
        onPointerLeave={cancel}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            if (!e.repeat) start()
          }
        }}
        onKeyUp={(e) => {
          if (e.key === ' ' || e.key === 'Enter') cancel()
        }}
        // A long press on iOS otherwise raises the copy/share callout.
        onContextMenu={(e) => e.preventDefault()}
        aria-describedby="hold-hint"
        className="group relative inline-flex touch-manipulation select-none items-center justify-center overflow-hidden rounded-full border border-gold px-10 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors duration-300"
      >
        {/* The fill. Linear, and exactly as long as the timer it represents. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-left bg-gold"
          style={{
            transform: `scaleX(${holding || done ? 1 : 0})`,
            transitionProperty: 'transform',
            transitionTimingFunction: 'linear',
            transitionDuration: holding || done ? `${holdMs}ms` : '200ms',
          }}
        />
        <span className={holding || done ? 'text-ink transition-colors duration-300' : ''}>
          {label}
        </span>
      </button>

      <p
        id="hold-hint"
        className="mt-3 font-sans text-[10px] tracking-widest2 text-gold/55 uppercase"
      >
        {hint}
      </p>
    </div>
  )
})

export default HoldButton

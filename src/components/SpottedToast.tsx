import { useEffect, useRef, useState } from 'react'
import invitationConfig from '../config'

export default function SpottedToast() {
  const headlines = invitationConfig.spottedHeadlines
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pausedRef = useRef(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const showTimer = window.setTimeout(() => setVisible(true), 4000)

    if (reducedMotion) return () => window.clearTimeout(showTimer)

    const cycle = window.setInterval(() => {
      if (pausedRef.current || dismissed) return
      setVisible(false)
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % headlines.length)
        setVisible(true)
      }, 500)
    }, 7000)

    return () => {
      window.clearTimeout(showTimer)
      window.clearInterval(cycle)
    }
  }, [headlines.length, dismissed])

  if (dismissed) return null

  return (
    <div
      className="fixed bottom-5 left-5 z-40 max-w-[260px] sm:max-w-xs"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        className={`relative rounded-sm border border-gold/30 bg-ink/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
        }`}
        role="status"
      >
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="absolute right-2 top-2 text-ivory/40 hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="pr-4 font-body text-sm italic leading-snug text-ivory/90">{headlines[index]}</p>
      </div>
    </div>
  )
}

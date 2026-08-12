import { useEffect, useMemo, useRef, useState } from 'react'
import invitationConfig from '../config'
import { useT } from '../LanguageContext'

/** Fisher–Yates. Unbiased, unlike sorting on `Math.random() - 0.5`. */
function shuffled<T>(input: readonly T[]): T[] {
  const a = [...input]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function SpottedToast() {
  const t = useT()

  // ---- PHASE1XB ------------------------------------------------------------
  // The gossip lines interleaved with invented "just replied yes" notices.
  // Both the names and the running order are shuffled once per mount, so the
  // feed opens somewhere different every visit rather than always leading on
  // the same name. To remove the feature, drop this block and go back to
  // reading t.spottedHeadlines directly.
  const headlines = useMemo(() => {
    // Any invented name that matches a real guest's first name is dropped.
    // Without this the toast can announce "Elaine just replied yes" while an
    // actual Elaine is on the entourage list, and it reads as a real reply
    // from her rather than as part of the gossip.
    const realFirstNames = new Set(
      [
        ...invitationConfig.roses,
        ...invitationConfig.gossipsAndShots.names,
        ...invitationConfig.eighteenGifts,
        ...invitationConfig.eighteenBlueBills,
      ].map((full) => full.split(' ')[0].toLowerCase()),
    )

    const facts = shuffled(t.spottedHeadlines)
    const rsvps = shuffled(invitationConfig.rsvpTickerNames)
      .filter((name) => !realFirstNames.has(name.toLowerCase()))
      .slice(0, facts.length + 3)
      .map((name) => t.rsvpToast.replace('{name}', name))

    // Woven rather than concatenated: a run of nothing but RSVPs would read
    // like a queue, and the facts are half the charm.
    const feed: string[] = []
    const longer = Math.max(facts.length, rsvps.length)
    for (let i = 0; i < longer; i++) {
      if (rsvps[i]) feed.push(rsvps[i])
      if (facts[i]) feed.push(facts[i])
    }
    return feed
  }, [t])
  // ---- end PHASE1XB --------------------------------------------------------
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
        className={`relative rounded-sm border border-gold/30 bg-surface/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-3'
        }`}
        role="status"
      >
        <button
          onClick={() => setDismissed(true)}
          aria-label={t.dismissNotification}
          className="absolute right-2 top-2 text-onsurface/40 hover:text-gold transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="pr-4 font-body text-sm italic leading-snug text-onsurface/90">{headlines[index]}</p>
      </div>
    </div>
  )
}

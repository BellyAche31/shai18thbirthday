import { useEffect, useRef, useState } from 'react'
import FigureCutout from '../FigureCutout'
import invitationConfig from '../../config'
import { useCountdown } from '../../hooks/useCountdown'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import FlipUnit from '../FlipUnit'
import Confetti from '../Confetti'
import { downloadCalendarEvent } from '../../lib/calendarEvent'
import { useT } from '../../LanguageContext'

export default function Countdown() {
  const t = useT()
  const { days, hours, minutes, seconds, done } = useCountdown(invitationConfig.eventDate)
  const [fire, setFire] = useState(0)
  const firedRef = useRef(false)

  useEffect(() => {
    if (done && !firedRef.current) {
      firedRef.current = true
      setFire((f) => f + 1)
    }
  }, [done])

  const units = [
    { value: days, label: t.countdown.days },
    { value: hours, label: t.countdown.hours },
    { value: minutes, label: t.countdown.minutes },
    { value: seconds, label: t.countdown.seconds },
  ]

  return (
    // The deep bottom padding on phones is the figure's room: she stands in
    // that band rather than under the type, which is the only way she reads at
    // full strength on a screen this narrow.
    <section className="relative overflow-hidden px-6 pb-56 pt-24 text-center text-onsurface sm:py-32">
      {/* Her, standing at the edge of the section — sharp and in colour, not
          dimmed into the background. She's the reason there's a clock here. */}
      <FigureCutout
        src="/images/photo-fur-04-cut.png"
        side="left"
        width={{ phone: 58, desktop: 30 }}
        maxHeight={{ section: 88, viewport: 72, viewportPhone: 30 }}
        opacity={{ phone: 0.95, desktop: 1 }}
      />

      <div className="page-vignette" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 border-y border-gold/10" />

      {/* Positioned, so it stacks above the figure: she is absolute, and an
          absolute element paints over static content no matter the source
          order. The clock has to be the thing you can read. */}
      <div className="relative">
      <Reveal>
        <SectionLabel>{t.countdown.label}</SectionLabel>
      </Reveal>

      {done ? (
        <Reveal delay={150}>
          <p className="mt-14 font-display text-4xl tracking-wide text-gold sm:text-5xl">
            {t.countdown.arrived}
          </p>
        </Reveal>
      ) : (
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-4 gap-2 sm:gap-6">
          {units.map((unit, i) => (
            <Reveal key={unit.label} delay={150 + i * 100}>
              <FlipUnit value={unit.value} label={unit.label} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Offered right here, at the moment a guest is looking at how long
          they have to wait — rather than only at the bottom of the programme,
          which is a long scroll away from the thought. Once the night has
          arrived there is nothing left to diarise, so it goes with the clock. */}
      {!done && (
      <Reveal delay={600}>
        <button
          onClick={() => downloadCalendarEvent(t.intro.title)}
          className="mx-auto mt-14 inline-flex items-center justify-center gap-2.5 border border-gold/50 px-7 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15" rx="1" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          </svg>
          {t.downloads.calendar}
        </button>
      </Reveal>
      )}
      </div>

      <Confetti fire={fire} />
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import invitationConfig from '../../config'
import { useCountdown } from '../../hooks/useCountdown'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import FlipUnit from '../FlipUnit'
import Confetti from '../Confetti'
import PhotoBackdrop from '../PhotoBackdrop'
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
    <section className="relative overflow-hidden bg-surface px-6 py-24 text-center text-onsurface sm:py-32">
      <PhotoBackdrop
        src="/images/bg-nyc-empire.jpg"
        variant="city"
        label="New York at night"
        className="absolute inset-0 h-full w-full"
        opacity={0.3}
        blurPx={4}
        grayscale={0.2}
        overlayClassName="bg-surface/90"
      />
      <div className="pointer-events-none absolute inset-0 border-y border-gold/10" />
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

      <Confetti fire={fire} />
    </section>
  )
}

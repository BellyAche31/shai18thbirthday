import { useEffect, useRef, useState } from 'react'
import invitationConfig from '../../config'
import { useCountdown } from '../../hooks/useCountdown'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import FlipUnit from '../FlipUnit'
import Confetti from '../Confetti'

export default function Countdown() {
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
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-center text-ivory sm:py-32">
      <div className="pointer-events-none absolute inset-0 border-y border-gold/10" />
      <Reveal>
        <SectionLabel>Counting Down</SectionLabel>
      </Reveal>

      {done ? (
        <Reveal delay={150}>
          <p className="mt-14 font-display text-4xl tracking-wide text-gold sm:text-5xl">
            THE NIGHT HAS ARRIVED.
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

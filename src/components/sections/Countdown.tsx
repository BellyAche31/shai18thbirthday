import invitationConfig from '../../config'
import { useCountdown } from '../../hooks/useCountdown'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export default function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(invitationConfig.eventDate)

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
              <div className="relative flex flex-col items-center border border-gold/25 px-2 py-6 sm:px-4 sm:py-10">
                <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-gold/50 sm:left-3 sm:top-3" />
                <span className="absolute right-2 bottom-2 h-2 w-2 border-r border-b border-gold/50 sm:right-3 sm:bottom-3" />
                <span className="font-display text-4xl tabular-nums text-gold sm:text-6xl md:text-7xl">
                  {pad(unit.value)}
                </span>
                <span className="mt-3 font-sans text-[9px] tracking-widest2 text-ivory/70 uppercase sm:text-xs">
                  {unit.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}

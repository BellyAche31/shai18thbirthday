import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3.5" y="5" width="17" height="15" rx="1" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}

export default function Scoop() {
  const rows = [
    { icon: <CalendarIcon />, label: 'Date', value: invitationConfig.eventDateDisplay },
    { icon: <ClockIcon />, label: 'Time', value: invitationConfig.eventTimeDisplay },
    { icon: <PinIcon />, label: 'Venue', value: `${invitationConfig.venue} — ${invitationConfig.address}` },
  ]

  return (
    <section id="scoop" className="relative bg-ink px-6 py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <SectionLabel>The Scoop</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-display text-4xl tracking-wide sm:text-5xl">
            {invitationConfig.headline}
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 w-full">
            <GoldLine />
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-gold/10">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={300 + i * 100}>
              <div className="flex items-start gap-4 py-6">
                <span className="mt-0.5 text-gold">{row.icon}</span>
                <div>
                  <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">{row.label}</p>
                  <p className="mt-1 font-body text-xl text-ivory/90 sm:text-2xl">{row.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600}>
          <div className="mt-12 flex justify-center">
            <a
              href={invitationConfig.mapsUrl}
              className="group relative inline-flex items-center gap-3 border border-gold/50 px-8 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              View Location
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import SmartImage from '../SmartImage'

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
    { icon: <CalendarIcon />, label: 'The Evening Date', value: invitationConfig.eventDateDisplay },
    { icon: <ClockIcon />, label: 'The Hour', value: invitationConfig.eventTimeDisplay },
    { icon: <PinIcon />, label: 'The Venue', value: invitationConfig.venue, sub: invitationConfig.address },
  ]

  return (
    <section id="scoop" className="relative bg-ink px-6 py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>The Scoop</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-display text-4xl tracking-wide sm:text-5xl">
            {invitationConfig.headline}
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 w-full max-w-xl">
            <GoldLine />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center sm:gap-12">
          <Reveal delay={250}>
            <div className="mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:max-w-none">
              <SmartImage
                src={invitationConfig.portraitPhoto}
                variant="silhouette"
                alt={`${invitationConfig.name}, the celebrant`}
                className="h-full w-full object-cover object-[50%_18%]"
              />
            </div>
          </Reveal>

          <div className="divide-y divide-gold/10">
            {rows.map((row, i) => (
              <Reveal key={row.label} delay={300 + i * 100}>
                <div className="flex items-start gap-4 py-6">
                  <span className="mt-0.5 text-gold">{row.icon}</span>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">{row.label}</p>
                    <p className="mt-1 font-body text-xl text-ivory/90 sm:text-2xl">{row.value}</p>
                    {row.sub && <p className="mt-1 font-body text-sm text-ivory/60">{row.sub}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={650}>
          <div className="mx-auto mt-14 max-w-md overflow-hidden rounded-sm border border-gold/20">
            <PlaceholderVenueMap />
          </div>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={invitationConfig.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 border border-gold/50 px-8 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              Google Maps
            </a>
            <a
              href={invitationConfig.wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 border border-gold/50 px-8 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              Waze
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function PlaceholderVenueMap() {
  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-[#0c1a14]">
      <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
        <path d="M0 160 L60 150 L110 175 L170 140 L220 165 L280 130 L340 155 L400 120 L400 225 L0 225 Z" fill="#123024" />
        <path d="M0 60 L70 80 L140 55 L210 90 L280 60 L340 85 L400 50" stroke="#d4af37" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
        <path d="M0 100 L90 120 L160 95 L230 125 L300 100 L400 130" stroke="#d4af37" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <span className="text-gold">
          <PinIcon />
        </span>
        <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">{invitationConfig.venue}</p>
        <p className="max-w-xs font-body text-xs text-ivory/50">{invitationConfig.address}</p>
      </div>
    </div>
  )
}

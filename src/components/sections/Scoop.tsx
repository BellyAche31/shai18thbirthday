import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import SmartImage from '../SmartImage'
import { useT } from '../../LanguageContext'

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
  const t = useT()
  const rows = [
    { icon: <CalendarIcon />, label: t.scoop.dateLabel, value: t.scoop.dateDisplay },
    { icon: <ClockIcon />, label: t.scoop.timeLabel, value: t.scoop.timeDisplay },
    { icon: <PinIcon />, label: t.scoop.venueLabel, value: invitationConfig.venue, sub: invitationConfig.address },
  ]

  return (
    <section id="scoop" className="relative bg-surface px-6 py-24 text-onsurface sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>{t.scoop.label}</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-display text-4xl tracking-wide sm:text-5xl">
            {t.headline}
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-10 w-full max-w-xl">
            <GoldLine />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center sm:gap-12">
          <Reveal delay={250}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:max-w-none">
              {/* The second look — the cover and the dispatch already carry
                  the first, so repeating it here made the page feel like one
                  photo on a loop. Pushed in past the busy room behind her: a
                  transform rather than a filter, because a filter would pin
                  this to its own composited layer and phones rasterize those
                  at reduced resolution. */}
              <SmartImage
                src={invitationConfig.portraitPhotoAlt}
                variant="silhouette"
                alt={`${invitationConfig.name}, the celebrant`}
                className="h-full w-full scale-[1.34] object-cover"
                style={{ objectPosition: invitationConfig.portraitPhotoAltFocus }}
              />
              {/* Sinks the corners so the frame reads as of a piece with the
                  darker photography around it. */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 40%, rgba(8,8,8,0) 40%, rgba(8,8,8,0.45) 78%, rgba(8,8,8,0.72) 100%)',
                }}
                aria-hidden="true"
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
                    <p className="mt-1 font-body text-xl text-onsurface/90 sm:text-2xl">{row.value}</p>
                    {row.sub && <p className="mt-1 font-body text-sm text-onsurface/60">{row.sub}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={650}>
          <div className="mx-auto mt-14 max-w-md overflow-hidden rounded-sm border border-gold/20">
            <VenuePhoto />
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
              {t.scoop.googleMaps}
            </a>
            <a
              href={invitationConfig.wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 border border-gold/50 px-8 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              {t.scoop.waze}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function VenuePhoto() {
  return (
    <div className="relative aspect-[16/9] w-full">
      <SmartImage
        src="/images/venue-dos-casa.jpg"
        variant="architecture"
        alt={invitationConfig.venue}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-6 pb-4 text-center">
        <p className="font-sans text-[10px] tracking-widest2 text-gold uppercase">{invitationConfig.venue}</p>
        <p className="max-w-xs font-body text-xs text-ivory/70">{invitationConfig.address}</p>
      </div>
    </div>
  )
}

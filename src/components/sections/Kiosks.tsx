import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import { useT } from '../../LanguageContext'

/**
 * The four stations waiting at the venue.
 *
 * This is the section that answers "why should I actually turn up, and why
 * should I bother dressing for it" — so it is deliberately concrete. Each
 * station says what it gives the guest, in their hands, on the night.
 *
 * Icons are drawn inline rather than pulled from a set: four glyphs is not
 * worth a dependency, and hand-drawing them keeps every stroke on the same
 * weight as the gold rules used everywhere else on the page.
 */

const ICONS = [
  // Mobile bar — a coupe.
  <>
    <path d="M4 4h16l-8 8z" />
    <path d="M12 12v7M8 19h8" />
  </>,
  // Photo booth — a camera.
  <>
    <path d="M3 7.5h4l1.5-2h7L17 7.5h4v12H3z" />
    <circle cx="12" cy="13" r="3.5" />
  </>,
  // Perfume bar — an atomiser.
  <>
    <path d="M9 8.5h6v11H9z" />
    <path d="M10.5 8.5v-3h3v3" />
    <path d="M16.5 5.5h2.5v2M19 7.5c0 1.5-1.5 2-2.5 2" />
  </>,
  // Grazing table — a cloche on a board.
  <>
    <path d="M4 15.5a8 8 0 0116 0z" />
    <path d="M2.5 18.5h19M12 7.5v-2" />
  </>,
]

export default function Kiosks() {
  const t = useT()

  return (
    <section className="relative overflow-hidden px-6 py-24 text-onsurface sm:py-32">
      <div className="page-vignette" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>{t.kiosks.label}</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-display text-3xl tracking-wide sm:text-4xl">
            {t.kiosks.heading}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-md text-center font-body text-lg italic text-onsurface/65">
            {t.kiosks.note}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {t.kiosks.items.map((item, i) => (
            <Reveal key={item.name} delay={200 + i * 90}>
              <li className="group h-full rounded-sm border border-gold/20 bg-onsurface/[0.03] px-6 py-7 transition-colors duration-500 hover:border-gold/60 sm:px-7">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-gold/70 transition-colors duration-500 group-hover:text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[i]}
                </svg>

                <span className="mt-5 block h-px w-6 bg-gold/40" aria-hidden="true" />

                <h3 className="mt-4 font-sans text-xs tracking-widest2 text-gold uppercase sm:text-[13px]">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-lg leading-snug text-onsurface/80">
                  {item.line}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

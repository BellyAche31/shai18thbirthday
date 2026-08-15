import PhotoBackdrop from '../PhotoBackdrop'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import { useT } from '../../LanguageContext'

/**
 * One of the four eighteens.
 *
 * These were four copies of the same component rendering a plain numbered
 * list, which read like a directory rather than a cast. Now each name is a
 * dossier plate — numbered, ruled, gold-edged — so the entourage looks like
 * people who were chosen rather than rows in a table.
 */
export default function EighteenSection({
  label,
  heading,
  note,
  names,
  tone = 'surface',
  backdrop,
}: {
  label: string
  heading: string
  note: string
  names: readonly string[]
  /** Alternating sections keeps four in a row from reading as one long block. */
  tone?: 'surface' | 'alt'
  /**
   * A keyed-out figure standing at one edge. Deliberately optional and only
   * passed to some of the four: on every one of them it stops being a
   * presence and becomes wallpaper.
   */
  backdrop?: { src: string; side: 'left' | 'right' }
}) {
  const t = useT()
  const onAlt = tone === 'alt'

  return (
    <section
      className={`relative overflow-hidden px-6 py-24 sm:py-32 ${
        onAlt ? 'text-onalt' : 'text-onsurface'
      }`}
    >
      {backdrop && (
        <PhotoBackdrop
          src={backdrop.src}
          variant="nightlife"
          label="The celebrant"
          transparent
          className="absolute inset-0 h-full w-full"
          opacity={0.4}
          blurPx={2}
          grayscale={0.3}
          // Sized against the viewport rather than the section: these run to
          // eighteen name plates and can be twice the height of a screen, so a
          // percentage of the section makes her tower over the grid and sit
          // behind the first column.
          sizingClassName={
            backdrop.side === 'left'
              ? '[background-size:auto_40vh] [background-position:2%_99%] sm:[background-size:auto_72vh] sm:[background-position:4%_99%]'
              : '[background-size:auto_40vh] [background-position:98%_99%] sm:[background-size:auto_72vh] sm:[background-position:96%_99%]'
          }
          overlayClassName="bg-gradient-to-b from-ink/72 via-ink/40 to-ink/88"
        />
      )}

      {/* The warm corner fall-off from the reference — keeps the grid from
          looking like it was pasted onto a flat rectangle. */}
      <div className="page-vignette" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2 className="wordmark text-center text-4xl sm:text-6xl">{label}</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-5">
            <SectionLabel>{heading}</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-md text-center font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
            {t.insidersNote}
          </p>
        </Reveal>
        <Reveal delay={175}>
          <p
            className={`mx-auto mt-2 max-w-md text-center font-body text-lg italic ${
              onAlt ? 'text-onalt/65' : 'text-onsurface/65'
            }`}
          >
            {note}
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {names.map((name, i) => (
            <Reveal key={name} delay={(i % 9) * 55}>
              <li
                className={`group relative h-full overflow-hidden rounded-sm border px-4 py-4 transition-colors duration-500 sm:px-5 ${
                  onAlt
                    ? 'border-onalt/15 bg-onalt/[0.03] hover:border-gold/60'
                    : 'border-gold/20 bg-onsurface/[0.03] hover:border-gold/60'
                }`}
              >
                {/* The numeral is the plate marking — set large and quiet so
                    it frames the name instead of competing with it. It's the
                    only place the number appears; printing it twice, once
                    small and once ghosted, read as a mistake. */}
                <span
                  className="pointer-events-none absolute right-2 top-1 font-display text-4xl leading-none text-gold/25 transition-colors duration-500 group-hover:text-gold/45 sm:text-5xl"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="block h-px w-6 bg-gold/40" aria-hidden="true" />
                <p
                  className={`relative mt-2 pr-8 font-body text-base leading-snug sm:text-lg ${
                    onAlt ? 'text-onalt/90' : 'text-onsurface/90'
                  }`}
                >
                  {name}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { useState } from 'react'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import { useT } from '../../LanguageContext'
import type { Copy } from '../../i18n'

function BlindCard({
  teaser,
  reveal,
  index,
  labels,
}: {
  teaser: string
  reveal: string
  index: number
  labels: Copy['blindItems']
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <Reveal delay={index * 100}>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? `${labels.confirmed}: ${reveal}` : `${labels.itemPrefix} ${index + 1}, ${labels.tapToReveal}`}
        className="flip-unit block h-56 w-full text-left sm:h-52"
        style={{ perspective: '1200px' }}
      >
        <div className={`flip-card ${flipped ? 'is-flipping' : ''}`}>
          <div className="flip-face flip-face-front flex-col items-start justify-between border border-gold/30 bg-gradient-to-br from-onsurface/[0.07] to-onsurface/[0.02] p-6">
            <span className="font-sans text-[10px] tracking-widest2 text-gold uppercase">
              {labels.itemPrefix} #{index + 1}
            </span>
            <p className="font-display text-lg leading-snug text-onsurface sm:text-xl">{teaser}</p>
            <span className="font-sans text-[10px] tracking-widest2 text-gold/70 uppercase">
              {labels.tapToReveal}
            </span>
          </div>
          {/* Gold fill — its text stays dark whichever theme is on. Item 5
              (the color rule) reads bigger — it's the one guests need to
              actually catch, not skim. */}
          <div className="flip-face flip-face-back flex-col items-start justify-between border border-gold bg-gradient-to-br from-gold-light/95 to-gold p-6">
            <span className="font-sans text-[10px] tracking-widest2 text-ink/70 uppercase">{labels.confirmed}</span>
            <p className={`font-display leading-snug text-ink ${index === 4 ? 'text-xl sm:text-2xl font-bold' : 'text-lg sm:text-xl'}`}>
              {reveal}
            </p>
            <span className="font-sans text-[10px] tracking-widest2 text-ink/60 uppercase">{labels.tapToHide}</span>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function BlindItems() {
  const t = useT()
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <Reveal>
        <SectionLabel>{t.blindItems.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide text-onsurface sm:text-4xl">
          {t.blindItems.heading}
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-lg text-onsurface/60">
          {t.blindItems.subtitle}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
        {t.blindItems.items.map((item, i) => (
          <BlindCard key={item.teaser} teaser={item.teaser} reveal={item.reveal} index={i} labels={t.blindItems} />
        ))}
      </div>
    </section>
  )
}

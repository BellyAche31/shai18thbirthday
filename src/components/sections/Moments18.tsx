import { useState } from 'react'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import { useT } from '../../LanguageContext'

function WishCard({ wish, index, revealLabel }: { wish: string; index: number; revealLabel: string }) {
  const [flipped, setFlipped] = useState(false)
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal delay={(index % 9) * 60}>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? `${number}: ${wish}` : `${number}, ${revealLabel}`}
        className="flip-unit block h-28 w-full text-left"
        style={{ perspective: '1000px' }}
      >
        <div className={`flip-card ${flipped ? 'is-flipping' : ''}`}>
          <div className="flip-face flip-face-front items-center justify-between border border-onalt/15 bg-onalt/[0.02] px-5">
            <span className="font-display text-2xl text-gold">{number}</span>
            <span className="font-sans text-[9px] tracking-widest2 text-onalt/40 uppercase">{revealLabel}</span>
          </div>
          <div className="flip-face flip-face-back items-center border border-gold bg-onalt px-5">
            <p className="font-body text-base leading-snug text-alt sm:text-lg">{wish}</p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function Moments18() {
  const t = useT()
  const wishes = t.wishes

  return (
    <section className="relative bg-alt px-6 py-24 text-onalt sm:py-32">
      <Reveal>
        <SectionLabel>{t.wishesSection.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-6xl leading-none text-onalt sm:text-8xl">18</h2>
      </Reveal>
      {t.wishesSection.subtitle && (
        <Reveal delay={150}>
          <p className="mx-auto mt-4 max-w-md text-center font-body text-lg text-onalt/60">
            {t.wishesSection.subtitle}
          </p>
        </Reveal>
      )}

      <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
        {wishes.map((wish, i) => (
          <WishCard key={wish} wish={wish} index={i} revealLabel={t.wishesSection.reveal} />
        ))}
      </div>
    </section>
  )
}

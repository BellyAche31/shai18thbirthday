import { useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

function BlindCard({ teaser, reveal, index }: { teaser: string; reveal: string; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <Reveal delay={index * 100}>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? `Revealed: ${reveal}` : `Blind item ${index + 1}, tap to reveal`}
        className="flip-unit block h-56 w-full text-left sm:h-52"
        style={{ perspective: '1200px' }}
      >
        <div className={`flip-card ${flipped ? 'is-flipping' : ''}`}>
          <div className="flip-face flip-face-front flex-col items-start justify-between border border-gold/30 bg-gradient-to-br from-[#141414] to-[#050505] p-6">
            <span className="font-sans text-[10px] tracking-widest2 text-gold uppercase">
              Blind Item #{index + 1}
            </span>
            <p className="font-display text-lg leading-snug text-ivory sm:text-xl">{teaser}</p>
            <span className="font-sans text-[10px] tracking-widest2 text-gold/70 uppercase">
              Tap to reveal
            </span>
          </div>
          <div className="flip-face flip-face-back flex-col items-start justify-between border border-gold bg-gradient-to-br from-gold-light/95 to-gold p-6">
            <span className="font-sans text-[10px] tracking-widest2 text-ink/70 uppercase">Confirmed</span>
            <p className="font-display text-lg leading-snug text-ink sm:text-xl">{reveal}</p>
            <span className="font-sans text-[10px] tracking-widest2 text-ink/60 uppercase">Tap to hide</span>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function BlindItems() {
  return (
    <section className="relative bg-ink px-6 py-24 sm:py-32">
      <Reveal>
        <SectionLabel>Blind Items</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide text-ivory sm:text-4xl">
          WHAT WE'VE HEARD
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-lg text-ivory/60">
          Every good scandal starts with a question. Tap a card for the answer.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
        {invitationConfig.blindItems.map((item, i) => (
          <BlindCard key={item.teaser} teaser={item.teaser} reveal={item.reveal} index={i} />
        ))}
      </div>
    </section>
  )
}

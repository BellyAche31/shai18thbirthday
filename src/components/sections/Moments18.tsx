import { useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

function WishCard({ wish, index }: { wish: string; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal delay={(index % 9) * 60}>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? `Wish ${number}: ${wish}` : `Wish ${number}, tap to reveal`}
        className="flip-unit block h-28 w-full text-left"
        style={{ perspective: '1000px' }}
      >
        <div className={`flip-card ${flipped ? 'is-flipping' : ''}`}>
          <div className="flip-face flip-face-front items-center justify-between border border-ink/15 bg-ink/[0.02] px-5">
            <span className="font-display text-2xl text-gold">{number}</span>
            <span className="font-sans text-[9px] tracking-widest2 text-ink/40 uppercase">Reveal</span>
          </div>
          <div className="flip-face flip-face-back items-center border border-gold bg-ink px-5">
            <p className="font-body text-base leading-snug text-ivory sm:text-lg">{wish}</p>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function Moments18() {
  const wishes = invitationConfig.wishes

  return (
    <section className="relative bg-ivory px-6 py-24 text-ink sm:py-32">
      <Reveal>
        <SectionLabel>18 Wishes</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-6xl leading-none text-ink sm:text-8xl">18</h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-lg text-ink/60">
          Eighteen small instructions for the biggest night of the year. Tap
          each number to reveal.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
        {wishes.map((wish, i) => (
          <WishCard key={wish} wish={wish} index={i} />
        ))}
      </div>
    </section>
  )
}

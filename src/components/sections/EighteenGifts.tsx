import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

export default function EighteenGifts() {
  return (
    <section className="relative bg-ink px-6 py-24 text-center sm:py-32">
      <Reveal>
        <SectionLabel>The Eighteen Gifts</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-3xl tracking-wide text-ivory sm:text-4xl">
          A KEEPSAKE FOR EIGHTEEN
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <div className="mx-auto mt-8 w-16">
          <GoldLine />
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-md font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
          The insider's note
        </p>
      </Reveal>
      <Reveal delay={250}>
        <p className="mx-auto mt-3 max-w-md font-body text-lg italic text-ivory/70">
          {invitationConfig.eighteenGiftsNote}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
        {invitationConfig.eighteenGifts.map((name, i) => (
          <Reveal key={name} delay={(i % 9) * 60}>
            <div className="flex items-baseline gap-3 border-b border-gold/10 pb-3">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body text-lg text-ivory/90">{name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

export default function EighteenRoses() {
  const names = invitationConfig.roses

  return (
    <section className="relative bg-ink px-6 py-24 sm:py-32">
      <Reveal>
        <SectionLabel>The Eighteen Roses</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide text-ivory sm:text-4xl">
          EIGHTEEN GENTLEMEN, EIGHTEEN DANCES
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-4 max-w-md text-center font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
          The insider's note
        </p>
      </Reveal>
      <Reveal delay={175}>
        <p className="mx-auto mt-2 max-w-md text-center font-body text-lg italic text-ivory/60">
          {invitationConfig.rosesNote}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
        {names.map((name, i) => (
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

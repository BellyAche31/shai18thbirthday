import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

export default function EighteenGossips() {
  const { prompt, names } = invitationConfig.gossipsAndShots

  return (
    <section className="relative bg-ivory px-6 py-24 text-ink sm:py-32">
      <Reveal>
        <SectionLabel>18 Gossips &amp; Shots</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide sm:text-4xl">
          THE INSIDE SOURCES
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-lg italic text-ink/70">
          {prompt}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
        {names.map((name, i) => (
          <Reveal key={name} delay={(i % 9) * 60}>
            <div className="flex items-baseline gap-3 border-b border-ink/10 pb-3">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body text-lg text-ink/90">{name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

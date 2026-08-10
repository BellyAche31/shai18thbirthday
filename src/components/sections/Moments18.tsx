import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

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
          Eighteen small instructions for the biggest night of the year.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-x-10 gap-y-6 sm:grid-cols-2">
        {wishes.map((wish, i) => (
          <Reveal key={wish} delay={(i % 9) * 60}>
            <div className="flex items-baseline gap-4 border-b border-ink/10 pb-4">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body text-lg text-ink/80">{wish}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

export default function EighteenBlueBills() {
  return (
    <section className="relative bg-ivory px-6 py-24 text-center text-ink sm:py-32">
      <Reveal>
        <SectionLabel>The Eighteen Blue Bills</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-3xl tracking-wide sm:text-4xl">
          A BLESSING FOR THE JOURNEY AHEAD
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <div className="mx-auto mt-8 w-16">
          <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-md font-sans text-[10px] tracking-widest2 text-gold uppercase">
          The insider's note
        </p>
      </Reveal>
      <Reveal delay={250}>
        <p className="mx-auto mt-3 max-w-md font-body text-lg italic text-ink/70">
          {invitationConfig.eighteenBlueBillsNote}
        </p>
      </Reveal>
    </section>
  )
}

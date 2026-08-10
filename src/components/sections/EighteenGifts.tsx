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
    </section>
  )
}

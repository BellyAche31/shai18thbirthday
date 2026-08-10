import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

export default function GossipIntro() {
  return (
    <section className="relative bg-ivory px-6 py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <SectionLabel>Breaking</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 text-center font-display text-2xl italic leading-snug sm:text-3xl">
            "Spotted: Shai, stepping into her eighteenth chapter."
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-8 w-24">
            <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 text-center font-body text-lg leading-relaxed text-ink/80 sm:text-xl">
            One birthday. One unforgettable night. And an invitation you
            definitely don't want to miss.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-4 text-center font-body text-lg leading-relaxed text-ink/60 sm:text-xl">
            Word is, the guest list is already the talk of the town.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-10 text-center font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
            Consider this your formal notice. XOXO.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

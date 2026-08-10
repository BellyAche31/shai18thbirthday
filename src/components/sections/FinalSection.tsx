import Reveal from '../Reveal'
import GoldLine from '../GoldLine'

export default function FinalSection() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 border-y border-gold/10" />
      <Reveal>
        <p className="font-display text-3xl tracking-wide text-ivory sm:text-4xl">SEE YOU THERE.</p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mx-auto mt-8 w-24">
          <GoldLine />
        </div>
      </Reveal>
      <Reveal delay={350}>
        <p className="mt-8 font-display text-2xl tracking-widest text-gold sm:text-3xl">SHAI</p>
      </Reveal>
      <Reveal delay={500}>
        <p className="mt-6 font-script text-5xl text-gold/90">XOXO</p>
      </Reveal>
    </section>
  )
}

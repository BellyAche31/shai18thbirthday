import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import PlaceholderArt from '../PlaceholderArt'

export default function DressCode() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink px-6 py-24 text-center sm:py-32">
      <PlaceholderArt variant="jewelry" className="absolute inset-0 h-full w-full" label="Dress code editorial placeholder" />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10">
        <Reveal>
          <SectionLabel>The Look</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl tracking-wide text-ivory sm:text-6xl">
            {invitationConfig.dressCode}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-sm font-body text-xl italic text-ivory/70">
            {invitationConfig.dressCodeNote}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 inline-flex max-w-sm flex-col items-center gap-2 border border-burgundy/60 bg-burgundy/20 px-6 py-5 backdrop-blur-sm">
            <span className="font-sans text-[10px] tracking-widest2 text-gold uppercase">Style Alert</span>
            <p className="font-body text-lg text-ivory">{invitationConfig.styleAlert}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

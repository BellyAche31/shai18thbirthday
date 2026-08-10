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
      </div>
    </section>
  )
}

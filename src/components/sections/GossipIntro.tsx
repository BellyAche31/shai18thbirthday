import PhotoBackdrop from '../PhotoBackdrop'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function GossipIntro() {
  const t = useT()
  return (
    <section className="relative px-6 py-24 text-onalt sm:py-32">
      {/* Her, faded well back — atmosphere behind the copy, not a photo on
          display. `transparent` keeps the bokeh field readable underneath. */}
      <PhotoBackdrop
        src="/images/photo-closing.jpg"
        variant="nightlife"
        label="The celebrant"
        transparent
        className="absolute inset-0 h-full w-full"
        opacity={0.2}
        blurPx={5}
        grayscale={0.5}
        sizingClassName="[background-size:cover] [background-position:55%_18%]"
        overlayClassName="bg-gradient-to-b from-ink/80 via-ink/55 to-ink/90"
      />

      <div className="mx-auto max-w-2xl">
        <Reveal>
          <SectionLabel>{t.gossipIntro.label}</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 text-center font-display text-2xl italic leading-snug sm:text-3xl">
            {t.gossipIntro.quote}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-8 w-24">
            <GoldLine className="from-onalt/0 via-onalt/30 to-onalt/0" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 text-center font-body text-lg leading-relaxed text-onalt/80 sm:text-xl">
            {t.gossipIntro.line1}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-4 text-center font-body text-lg leading-relaxed text-onalt/60 sm:text-xl">
            {t.gossipIntro.line2}
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-10 text-center font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
            {t.gossipIntro.notice}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

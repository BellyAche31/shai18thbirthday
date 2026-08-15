import PhotoBackdrop from '../PhotoBackdrop'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function GossipIntro() {
  const t = useT()
  return (
    <section className="relative px-6 py-24 text-onalt sm:py-32">
      {/* Her, standing at the edge of the section rather than smeared across
          it. The white studio ground is keyed out, so sizing by height instead
          of cover keeps her whole — a figure guests actually register, not a
          crop of a shoulder. `transparent` keeps the bokeh field readable
          underneath. */}
      <PhotoBackdrop
        src="/images/photo-fur-02-cut.png"
        variant="nightlife"
        label="The celebrant"
        transparent
        className="absolute inset-0 h-full w-full"
        opacity={0.5}
        blurPx={1.5}
        grayscale={0.25}
        sizingClassName="[background-size:auto_52%] [background-position:4%_100%] sm:[background-size:auto_92%] sm:[background-position:14%_100%]"
        overlayClassName="bg-gradient-to-b from-ink/70 via-ink/35 to-ink/85"
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

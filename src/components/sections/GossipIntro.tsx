import FigureCutout from '../FigureCutout'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function GossipIntro() {
  const t = useT()
  return (
    <section className="relative overflow-hidden px-6 pb-56 pt-24 text-onalt sm:py-32">
      {/* The first time a guest sees her on this page, so she is sharp and in
          colour rather than dimmed into the set dressing. */}
      <FigureCutout
        src="/images/photo-fur-02-cut.png"
        side="left"
        width={{ phone: 58, desktop: 31 }}
        maxHeight={{ section: 90, viewport: 74, viewportPhone: 30 }}
        opacity={{ phone: 0.95, desktop: 1 }}
      />

      <div className="page-vignette" aria-hidden="true" />

      <div className="relative mx-auto max-w-2xl">
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

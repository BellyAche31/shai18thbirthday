import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function EighteenBlueBills() {
  const t = useT()
  return (
    <section className="relative bg-alt px-6 py-24 text-center text-onalt sm:py-32">
      <Reveal>
        <SectionLabel>{t.blueBills.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-3xl tracking-wide sm:text-4xl">
          {t.blueBills.heading}
        </h2>
      </Reveal>
      <Reveal delay={150}>
        <div className="mx-auto mt-8 w-16">
          <GoldLine className="from-onalt/0 via-onalt/30 to-onalt/0" />
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-md font-sans text-[10px] tracking-widest2 text-gold uppercase">
          {t.insidersNote}
        </p>
      </Reveal>
      <Reveal delay={250}>
        <p className="mx-auto mt-3 max-w-md font-body text-lg italic text-onalt/70">
          {t.blueBills.note}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
        {invitationConfig.eighteenBlueBills.map((name, i) => (
          <Reveal key={name} delay={(i % 9) * 60}>
            <div className="flex items-baseline gap-3 border-b border-onalt/10 pb-3">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body text-lg text-onalt/90">{name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

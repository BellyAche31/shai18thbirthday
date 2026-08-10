import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function EighteenGifts() {
  const t = useT()
  return (
    <section className="relative bg-surface px-6 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="font-display text-4xl tracking-wide text-onsurface sm:text-5xl">
          {t.gifts.label}
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-5">
          <SectionLabel>{t.gifts.heading}</SectionLabel>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div className="mx-auto mt-8 w-16">
          <GoldLine />
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-md font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
          {t.insidersNote}
        </p>
      </Reveal>
      <Reveal delay={250}>
        <p className="mx-auto mt-3 max-w-md font-body text-lg italic text-onsurface/70">
          {t.gifts.note}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
        {invitationConfig.eighteenGifts.map((name, i) => (
          <Reveal key={name} delay={(i % 9) * 60}>
            <div className="flex items-baseline gap-3 border-b border-gold/10 pb-3">
              <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-body text-lg text-onsurface/90">{name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

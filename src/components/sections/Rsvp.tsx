import { useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import Confetti from '../Confetti'
import { useT } from '../../LanguageContext'

export default function Rsvp() {
  const t = useT()
  const [fire, setFire] = useState(0)

  return (
    <section id="rsvp" className="relative bg-alt px-6 py-24 text-center text-onalt sm:py-32">
      <Reveal>
        <SectionLabel>{t.rsvp.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-4xl tracking-wide sm:text-5xl">{t.rsvp.heading}</h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-sm font-body text-lg italic text-onalt/70">
          {t.rsvp.subtitle}
        </p>
      </Reveal>
      {!invitationConfig.allowPlusOnes && (
        <Reveal delay={250}>
          <p className="mx-auto mt-3 max-w-sm font-sans text-[10px] tracking-widest2 text-gold uppercase">
            {t.rsvp.exclusivity}
          </p>
        </Reveal>
      )}
      <Reveal delay={280}>
        <p className="mx-auto mt-4 max-w-sm font-body text-sm italic text-onalt/60">
          {t.rsvp.giftNote}
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="mx-auto mt-6 w-16">
          <GoldLine className="from-onalt/0 via-onalt/30 to-onalt/0" />
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mx-auto mt-10 max-w-sm">
          <a
            href={invitationConfig.rsvpUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setFire((f) => f + 1)}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-onalt px-12 py-4 font-sans text-xs tracking-widest2 uppercase transition-colors hover:bg-onalt hover:text-alt"
          >
            {t.rsvp.button}
          </a>
          <p className="mt-4 font-sans text-[11px] text-onalt/50">
            {t.rsvp.helper}
          </p>
        </div>
      </Reveal>

      <Confetti fire={fire} />
    </section>
  )
}

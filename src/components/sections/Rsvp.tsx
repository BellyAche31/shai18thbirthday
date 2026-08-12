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
    <section id="rsvp" className="relative px-6 py-24 text-center text-onalt sm:py-32">
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
        {/* The one thing every guest has to actually do, so it stops being an
            outline like every other control on the page and goes solid gold.
            Filled beats outlined for a primary action, and nothing else here
            is filled — the emphasis works because it is unique. */}
        <div className="mx-auto mt-10 max-w-sm">
          <a
            href={invitationConfig.rsvpUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setFire((f) => f + 1)}
            className="rsvp-cta group relative inline-flex w-full items-center justify-center gap-3 rounded-sm bg-gold px-12 py-5 font-sans text-sm font-medium tracking-widest2 text-ink uppercase transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99] sm:text-base"
          >
            {t.rsvp.button}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
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

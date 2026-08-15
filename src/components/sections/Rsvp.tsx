import { useState } from 'react'
import PhotoBackdrop from '../PhotoBackdrop'
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
      {/* Her, standing at the edge of the section rather than smeared across
          it. The white studio ground is keyed out, so sizing by height instead
          of cover keeps her whole — a figure guests actually register, not a
          crop of a shoulder. `transparent` keeps the bokeh field readable
          underneath. */}
      <PhotoBackdrop
        src="/images/photo-fur-01-cut.png"
        variant="interior"
        label="The celebrant"
        transparent
        className="absolute inset-0 h-full w-full"
        opacity={0.5}
        blurPx={1.5}
        grayscale={0.25}
        sizingClassName="[background-size:auto_52%] [background-position:96%_100%] sm:[background-size:auto_92%] sm:[background-position:80%_100%]"
        overlayClassName="bg-gradient-to-b from-ink/70 via-ink/35 to-ink/85"
      />

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

      {/* Above the button rather than below it: a deadline read after the tap
          has already been made is just trivia. Ruled off on both sides so it
          reads as a stated term of the invitation, not a footnote. */}
      <Reveal delay={350}>
        <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-1.5 border-y border-gold/25 py-4">
          <span className="font-sans text-[10px] tracking-widest2 text-onalt/60 uppercase">
            {t.rsvp.deadlineLabel}
          </span>
          <span className="font-sans text-sm tracking-widest2 text-gold uppercase sm:text-base">
            {t.rsvp.deadlineDate}
          </span>
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

          {/* Somewhere to turn when the form misbehaves. `tel:` so a phone
              dials straight from the tap rather than making a guest copy
              digits out by hand. */}
          <div className="mt-8 border-t border-gold/20 pt-6">
            <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">
              {t.rsvp.contactLabel}
            </p>
            <ul className="mt-3 flex flex-col items-center gap-2">
              {invitationConfig.contacts.map((c) => (
                <li key={c.tel}>
                  <a
                    href={`tel:${c.tel}`}
                    className="inline-flex flex-wrap items-baseline justify-center gap-x-2 font-body text-base text-onalt/90 transition-colors hover:text-gold"
                  >
                    <span>{c.name}</span>
                    <span className="font-sans text-sm tracking-wide text-gold">{c.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Confetti fire={fire} />
    </section>
  )
}

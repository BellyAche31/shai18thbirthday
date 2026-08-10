import { useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import Confetti from '../Confetti'

export default function Rsvp() {
  const [fire, setFire] = useState(0)

  return (
    <section id="rsvp" className="relative bg-ivory px-6 py-24 text-center text-ink sm:py-32">
      <Reveal>
        <SectionLabel>You're Invited</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-4xl tracking-wide sm:text-5xl">RSVP</h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-sm font-body text-lg italic text-ink/70">
          Because no unforgettable night is complete without the right
          people.
        </p>
      </Reveal>
      {!invitationConfig.allowPlusOnes && (
        <Reveal delay={250}>
          <p className="mx-auto mt-3 max-w-sm font-sans text-[10px] tracking-widest2 text-gold uppercase">
            {invitationConfig.exclusivityNote}
          </p>
        </Reveal>
      )}
      <Reveal delay={280}>
        <p className="mx-auto mt-4 max-w-sm font-body text-sm italic text-ink/60">
          {invitationConfig.giftNote}
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="mx-auto mt-6 w-16">
          <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
        </div>
      </Reveal>

      <Reveal delay={400}>
        <div className="mx-auto mt-10 max-w-sm">
          <a
            href={invitationConfig.rsvpUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setFire((f) => f + 1)}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-ink px-12 py-4 font-sans text-xs tracking-widest2 uppercase transition-colors hover:bg-ink hover:text-ivory"
          >
            RSVP Now
          </a>
          <p className="mt-4 font-sans text-[11px] text-ink/50">
            Opens our RSVP form in a new tab — your response goes straight to us.
          </p>
        </div>
      </Reveal>

      <Confetti fire={fire} />
    </section>
  )
}

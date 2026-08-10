import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

export default function Rsvp() {
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
      <Reveal delay={300}>
        <div className="mx-auto mt-6 w-16">
          <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
        </div>
      </Reveal>
      <Reveal delay={400}>
        <a
          href={invitationConfig.rsvpUrl}
          className="mt-10 inline-block border border-ink px-12 py-4 font-sans text-xs tracking-widest2 uppercase transition-colors hover:bg-ink hover:text-ivory"
        >
          RSVP
        </a>
      </Reveal>
    </section>
  )
}

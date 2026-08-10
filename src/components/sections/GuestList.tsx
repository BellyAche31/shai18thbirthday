import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'

export default function GuestList() {
  const guests: readonly string[] = invitationConfig.guestList
  if (guests.length === 0) return null

  return (
    <section className="relative bg-ink px-6 py-24 text-center text-ivory sm:py-32">
      <Reveal>
        <SectionLabel>The Guest List</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <p className="mx-auto mt-6 max-w-md font-body text-lg italic text-ivory/70">
          Every unforgettable night has the right company.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 max-w-md">
        {guests.map((guest, i) => (
          <Reveal key={guest} delay={i * 70}>
            <div className="py-4">
              <p className="font-display text-xl tracking-wide text-ivory/90 sm:text-2xl">{guest}</p>
              {i < guests.length - 1 && (
                <div className="mx-auto mt-4 w-10">
                  <GoldLine />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-10 font-sans text-[10px] tracking-widest2 text-gold/70 uppercase">
          &amp; a very select few more
        </p>
      </Reveal>
    </section>
  )
}

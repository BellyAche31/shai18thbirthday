import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import { useT } from '../../LanguageContext'

export default function GuestList() {
  const t = useT()
  const guests: readonly string[] = invitationConfig.guestList
  if (guests.length === 0) return null

  return (
    <section className="relative bg-surface px-6 py-24 text-center text-onsurface sm:py-32">
      <Reveal>
        <SectionLabel>{t.guestList.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <p className="mx-auto mt-6 max-w-md font-body text-lg italic text-onsurface/70">
          {t.guestList.subtitle}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 max-w-md">
        {guests.map((guest, i) => (
          <Reveal key={guest} delay={i * 70}>
            <div className="py-4">
              <p className="font-display text-xl tracking-wide text-onsurface/90 sm:text-2xl">{guest}</p>
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
          {t.guestList.more}
        </p>
      </Reveal>
    </section>
  )
}

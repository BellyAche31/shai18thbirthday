import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import SmartImage from '../SmartImage'
import { useT } from '../../LanguageContext'

export default function DressCode() {
  const t = useT()
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-6 py-24 text-center sm:py-32">

      <div className="relative z-10">
        <Reveal>
          <SectionLabel>{t.dressCode.label}</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl tracking-wide text-onsurface sm:text-6xl">
            {t.dressCode.heading}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-sm font-body text-xl italic text-onsurface/70">
            {t.dressCode.note}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 inline-flex max-w-sm flex-col items-center gap-2 border border-burgundy/60 bg-burgundy/20 px-6 py-5 backdrop-blur-sm">
            <span className="font-sans text-[10px] tracking-widest2 text-gold uppercase">{t.dressCode.insidersNote}</span>
            <p className="font-body text-lg text-onsurface">{t.dressCode.styleAlert}</p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-14 max-w-3xl">
            <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">{t.dressCode.women}</p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {invitationConfig.dressCodePalette.women.map((c, i) => (
                <div key={c.name} className="flex flex-col items-center gap-3">
                  {/* No frame. The studio background is keyed out of these
                      now, so a box would just put the white back. */}
                  <div className="w-full max-w-[220px]">
                    <SmartImage
                      src={c.image}
                      variant="flowers"
                      alt={t.dressCode.womenColors[i] ?? c.name}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 rounded-full border border-onsurface/30"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm text-onsurface/80">{t.dressCode.womenColors[i] ?? c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mx-auto mt-14 max-w-2xl">
            <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">{t.dressCode.men}</p>
            <div className="mt-4">
              <SmartImage
                src={invitationConfig.dressCodePalette.menReferenceImage}
                variant="silhouette"
                alt={`${t.dressCode.men}: ${invitationConfig.dressCodePalette.men.map((c, i) => t.dressCode.menColors[i] ?? c.name).join(' & ')}`}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-4 flex justify-center gap-4">
              {invitationConfig.dressCodePalette.men.map((c, i) => (
                <div key={c.name} className="flex items-center gap-2">
                  <span
                    className="h-4 w-4 rounded-full border border-onsurface/30"
                    style={{ backgroundColor: c.hex }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-onsurface/80">{t.dressCode.menColors[i] ?? c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

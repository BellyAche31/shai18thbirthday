import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import PhotoBackdrop from '../PhotoBackdrop'
import SmartImage from '../SmartImage'
import { useT } from '../../LanguageContext'

export default function DressCode() {
  const t = useT()
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-surface px-6 py-24 text-center sm:py-32">
      <PhotoBackdrop
        src="/images/bg-nyc-midtown.jpg"
        variant="city"
        label="New York at night"
        className="absolute inset-0 h-full w-full"
        opacity={0.35}
        blurPx={4}
        grayscale={0.2}
        overlayClassName="bg-surface/90"
      />

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
                  <div className="aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-sm border border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <SmartImage
                      src={c.image}
                      variant="flowers"
                      alt={t.dressCode.womenColors[i] ?? c.name}
                      className="h-full w-full object-cover object-top"
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
            <div className="mt-4 overflow-hidden rounded-sm border border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <SmartImage
                src={invitationConfig.dressCodePalette.menReferenceImage}
                variant="silhouette"
                alt={`${t.dressCode.men}: ${invitationConfig.dressCodePalette.men.map((c, i) => t.dressCode.menColors[i] ?? c.name).join(' & ')}`}
                className="h-full w-full object-cover object-top"
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

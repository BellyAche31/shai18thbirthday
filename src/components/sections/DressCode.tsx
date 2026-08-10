import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import PlaceholderArt from '../PlaceholderArt'

export default function DressCode() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-ink px-6 py-24 text-center sm:py-32">
      <PlaceholderArt variant="jewelry" className="absolute inset-0 h-full w-full" label="Dress code editorial placeholder" />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10">
        <Reveal>
          <SectionLabel>The Look</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl tracking-wide text-ivory sm:text-6xl">
            {invitationConfig.dressCode}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-sm font-body text-xl italic text-ivory/70">
            {invitationConfig.dressCodeNote}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 inline-flex max-w-sm flex-col items-center gap-2 border border-burgundy/60 bg-burgundy/20 px-6 py-5 backdrop-blur-sm">
            <span className="font-sans text-[10px] tracking-widest2 text-gold uppercase">The Insider's Note</span>
            <p className="font-body text-lg text-ivory">{invitationConfig.styleAlert}</p>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-14 grid max-w-lg gap-8 sm:grid-cols-2">
            <div>
              <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">Women</p>
              <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                {invitationConfig.dressCodePalette.women.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                    <span
                      className="h-10 w-10 rounded-full border border-ivory/30 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-xs text-ivory/70">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-widest2 text-gold/80 uppercase">Men</p>
              <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                {invitationConfig.dressCodePalette.men.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-2">
                    <span
                      className="h-10 w-10 rounded-full border border-ivory/30 shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-xs text-ivory/70">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

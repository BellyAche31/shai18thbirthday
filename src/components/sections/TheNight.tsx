import PhotoBackdrop from '../PhotoBackdrop'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import KeepACopy from '../KeepACopy'
import { useT } from '../../LanguageContext'

export default function TheNight() {
  const t = useT()
  return (
    <section id="the-night" className="relative px-6 py-24 text-onsurface sm:py-32">
      {/* Her, faded well back — atmosphere behind the copy, not a photo on
          display. `transparent` keeps the bokeh field readable underneath. */}
      <PhotoBackdrop
        src="/images/photo-spotted-v2.jpg"
        variant="interior"
        label="The celebrant"
        transparent
        className="absolute inset-0 h-full w-full"
        opacity={0.16}
        blurPx={5}
        grayscale={0.5}
        sizingClassName="[background-size:cover] [background-position:50%_26%]"
        overlayClassName="bg-gradient-to-b from-ink/80 via-ink/55 to-ink/90"
      />

      <Reveal>
        <SectionLabel>{t.theNight.label}</SectionLabel>
      </Reveal>
      {t.theNight.heading && (
        <Reveal delay={100}>
          <h2 className="mt-6 text-center font-display text-3xl tracking-wide sm:text-4xl">{t.theNight.heading}</h2>
        </Reveal>
      )}

      <div className="relative mx-auto mt-16 max-w-md">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/30 sm:left-[9px]" aria-hidden="true" />
        <div className="flex flex-col gap-10">
          {invitationConfig.program.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="relative flex items-start gap-6 pl-6 sm:pl-8">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-gold bg-surface sm:h-4 sm:w-4" />
                <div>
                  <p className="font-sans text-[11px] tracking-widest2 text-gold uppercase">{item.time}</p>
                  <p className="mt-1 font-display text-2xl text-onsurface sm:text-3xl">{t.programTitles[i] ?? item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <div className="mt-16">
          <KeepACopy />
        </div>
      </Reveal>
    </section>
  )
}

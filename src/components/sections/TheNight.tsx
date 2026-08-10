import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'

export default function TheNight() {
  return (
    <section id="the-night" className="relative bg-ivory px-6 py-24 text-ink sm:py-32">
      <Reveal>
        <SectionLabel>The Night</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide sm:text-4xl">HOW IT UNFOLDS</h2>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-md">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/30 sm:left-[9px]" aria-hidden="true" />
        <div className="flex flex-col gap-10">
          {invitationConfig.program.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="relative flex items-start gap-6 pl-6 sm:pl-8">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-gold bg-ivory sm:h-4 sm:w-4" />
                <div>
                  <p className="font-sans text-[11px] tracking-widest2 text-gold uppercase">{item.time}</p>
                  <p className="mt-1 font-display text-2xl text-ink sm:text-3xl">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

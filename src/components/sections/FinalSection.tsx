import invitationConfig from '../../config'
import Reveal from '../Reveal'
import GoldLine from '../GoldLine'
import PhotoBackdrop from '../PhotoBackdrop'
import Signoff from '../Signoff'
import { useT } from '../../LanguageContext'

export default function FinalSection() {
  const t = useT()
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-surface px-6 py-24 text-center">
      <PhotoBackdrop
        src="/images/bg-nyc-midtown.jpg"
        variant="city"
        label="New York at night"
        className="absolute inset-0 h-full w-full"
        opacity={0.35}
        blurPx={4}
        grayscale={0.2}
        overlayClassName="bg-surface/85"
      />
      <div className="pointer-events-none absolute inset-0 border-y border-gold/10" />
      <Reveal>
        <p className="font-display text-3xl tracking-wide text-onsurface sm:text-4xl">{t.final.seeYouThere}</p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mx-auto mt-8 w-24">
          <GoldLine />
        </div>
      </Reveal>
      <Reveal delay={350}>
        <p className="mt-8 font-display text-2xl tracking-widest text-gold sm:text-3xl">{t.final.name}</p>
      </Reveal>
      <Reveal delay={500}>
        <Signoff size="lg" className="mt-6 text-gold/90" />
      </Reveal>

      {/* A little unfiltered credit from whoever stayed up building this. */}
      <Reveal delay={800}>
        <p className="mx-auto mt-16 max-w-xs font-body text-sm italic text-onsurface/35">
          {invitationConfig.creatorCredit}
        </p>
      </Reveal>
    </section>
  )
}

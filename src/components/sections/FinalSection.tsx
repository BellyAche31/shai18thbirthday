import invitationConfig from '../../config'
import Reveal from '../Reveal'
import GoldLine from '../GoldLine'
import PhotoBackdrop from '../PhotoBackdrop'
import SmartImage from '../SmartImage'
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

      {/* The celebrant gets the last word, so she gets the last frame too. */}
      <Reveal>
        <div className="relative mx-auto mb-10 h-28 w-28 overflow-hidden rounded-full border border-gold/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:h-32 sm:w-32">
          <SmartImage
            src={invitationConfig.portraitPhoto}
            variant="silhouette"
            alt={`${invitationConfig.name}, the celebrant`}
            className="h-full w-full object-cover object-[50%_16%]"
          />
        </div>
      </Reveal>

      <Reveal delay={100}>
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

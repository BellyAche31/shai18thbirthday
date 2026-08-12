import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import invitationConfig from '../config'
import PhotoBackdrop from '../components/PhotoBackdrop'
import GoldLine from '../components/GoldLine'
import IntroReveal from '../components/IntroReveal'
import SmartImage from '../components/SmartImage'
import PreferenceToggles from '../components/PreferenceToggles'
import HoldButton from '../components/HoldButton'
import assetUrl from '../assetUrl'
import { useMusic } from '../MusicContext'
import { useT } from '../LanguageContext'

type Stage = 'sealed' | 'cracking' | 'open' | 'revealed' | 'intro'

export default function CoverPage() {
  const navigate = useNavigate()
  const t = useT()
  const { start: startMusic } = useMusic()
  const [mounted, setMounted] = useState(false)
  const [stage, setStage] = useState<Stage>('sealed')
  const openButtonRef = useRef<HTMLButtonElement | null>(null)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 150)

    // Warm the intro's skyline while the guest is still looking at the
    // envelope, so the titles open on it instead of on black while it
    // downloads over mobile data.
    new Image().src = assetUrl('/images/bg-nyc-midtown.jpg')

    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (stage === 'revealed') {
      openButtonRef.current?.focus()
    }
  }, [stage])

  const breakSeal = () => {
    if (stage !== 'sealed') return

    // Breaking the seal is the guest's first gesture, which is what lets the
    // browser allow audio at all — so the music opens with the envelope.
    startMusic()

    if (reducedMotion) {
      setStage('revealed')
      return
    }
    setStage('cracking')
    window.setTimeout(() => setStage('open'), 500)
    window.setTimeout(() => setStage('revealed'), 1500)
  }

  const handleOpen = () => {
    if (stage === 'intro') return
    setStage('intro')
  }

  const envelopeOpen = stage === 'open' || stage === 'revealed' || stage === 'intro'

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <PreferenceToggles className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6" />

      {/* A glimpse of the celebrant behind the sealed envelope — present
          enough to intrigue, faint enough that the envelope stays the subject. */}
      <PhotoBackdrop
        src={invitationConfig.portraitPhoto}
        variant="nightlife"
        label="The celebrant"
        className="absolute inset-0"
        opacity={0.5}
        blurPx={4}
        grayscale={0.65}
        sizingClassName="[background-size:cover] [background-position:50%_22%]"
        overlayClassName="bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90 md:from-ink/85 md:via-ink/80"
      />

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-[1200ms] ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {stage === 'sealed' || stage === 'cracking' ? (
          <p className="mb-8 font-sans text-[11px] tracking-widest2 text-gold/80 uppercase animate-pulseSlow">
            {t.cover.tapSeal}
          </p>
        ) : (
          <div className="mb-8 flex flex-col items-center">
            <p className="font-xoxo text-4xl leading-none text-gold sm:text-5xl">
              {t.cover.sealBrokenNote}
            </p>
          </div>
        )}

        {/* Envelope */}
        <div className="relative w-[280px] sm:w-[360px]">
          <div className="relative w-full" style={{ perspective: '1400px' }}>
            {/* Envelope body */}
            <div className="relative aspect-[3/2] w-full rounded-sm border border-gold/40 bg-gradient-to-b from-[#0f0f0f] to-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* inner letter, revealed as flap opens */}
              <div
                className={`absolute inset-x-3 bottom-3 top-3 flex flex-col items-center justify-center overflow-hidden rounded-[1px] border border-gold/20 bg-ivory transition-all duration-700 ${
                  stage === 'revealed' ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="h-14 w-14 overflow-hidden rounded-full border border-gold/50 shadow-[0_2px_10px_rgba(0,0,0,0.25)] sm:h-16 sm:w-16">
                  <SmartImage
                    src={invitationConfig.portraitPhoto}
                    variant="silhouette"
                    alt={`${invitationConfig.name}, the celebrant`}
                    className="h-full w-full object-cover object-[50%_18%]"
                  />
                </div>
                <p className="mt-3 max-w-[85%] font-display text-base tracking-wide text-ink sm:text-lg">
                  {t.cover.innerLine1}
                </p>
                <div className="mt-2 w-12">
                  <GoldLine className="from-ink/0 via-ink/40 to-ink/0" />
                </div>
                <p className="mt-2 max-w-[80%] font-sans text-[8px] tracking-widest2 text-ink/70 uppercase sm:text-[9px]">
                  {t.cover.innerLine2}
                </p>
              </div>

              {/* envelope side creases */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 origin-top-left border-b border-gold/10" style={{ clipPath: 'polygon(0 0, 50% 55%, 0 100%)' }} />
                <div className="absolute inset-0 origin-top-right border-b border-gold/10" style={{ clipPath: 'polygon(100% 0, 50% 55%, 100% 100%)' }} />
              </div>

              {/* Flap. backface-visibility sits on the rotating element itself,
                  so the flap still vanishes as it passes 90deg without needing
                  preserve-3d — which would make this a 3D rendering context and
                  put the seal's stacking at the compositor's mercy. */}
              <div
                className="absolute left-0 top-0 h-1/2 w-full origin-top transition-transform duration-[900ms] ease-in-out"
                style={{
                  transform: envelopeOpen ? 'rotateX(-172deg)' : 'rotateX(0deg)',
                  backfaceVisibility: 'hidden',
                  zIndex: envelopeOpen ? 5 : 20,
                }}
              >
                <div
                  className="h-full w-full border border-gold/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a]"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}
                />
              </div>
            </div>
          </div>

          {/* Wax seal — the only thing a guest has to find, so it doesn't get to
              be fragile. Half of it overlaps the flap, and it used to sit inside
              the envelope relying on z-index to stay above a 3D-transformed
              layer. Browsers don't reliably honour that, so the seal would
              intermittently paint behind the near-black flap and just look
              missing. Out here it's a plain sibling of the perspective box,
              stacked above the envelope by ordinary rules. */}
          {stage !== 'revealed' && (
            <button
              onClick={breakSeal}
              aria-label={t.cover.tapSeal}
              disabled={stage !== 'sealed'}
              className={`absolute left-1/2 top-1/2 z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-gradient-to-br from-gold-light via-gold to-[#8a6a34] text-ink shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 sm:h-16 sm:w-16 ${
                stage === 'sealed' ? 'hover:scale-105 focus-visible:scale-105 cursor-pointer' : ''
              } ${stage === 'sealed' ? 'scale-100 opacity-100' : 'scale-125 opacity-0 rotate-12'}`}
            >
              <span className="font-display text-lg font-bold sm:text-xl">18</span>
            </button>
          )}
        </div>

        <h1 className="sr-only">{t.headline} — {t.tagline}</h1>

        <div
          className={`mt-10 transition-all duration-700 ${
            stage === 'revealed' ? 'opacity-100 translate-y-0 delay-500' : 'pointer-events-none opacity-0 translate-y-3'
          }`}
        >
          {/* Held rather than tapped: the invitation opens into a long title
              sequence, and making a guest commit to it stops a stray thumb
              launching the whole thing by accident. */}
          <HoldButton
            ref={openButtonRef}
            onComplete={handleOpen}
            label={t.cover.openInvitation}
            hint={t.cover.holdToOpen}
          />
        </div>
      </div>

      {stage === 'intro' && (
        <IntroReveal onFinished={() => navigate('/shais-18th-home')} />
      )}
    </main>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import invitationConfig from '../config'
import PhotoBackdrop from '../components/PhotoBackdrop'
import GoldLine from '../components/GoldLine'
import IntroReveal from '../components/IntroReveal'
import SmartImage from '../components/SmartImage'
import { useMusic } from '../MusicContext'

type Stage = 'sealed' | 'cracking' | 'open' | 'revealed' | 'intro'

export default function CoverPage() {
  const navigate = useNavigate()
  const { start: startMusic } = useMusic()
  const [mounted, setMounted] = useState(false)
  const [stage, setStage] = useState<Stage>('sealed')
  const openButtonRef = useRef<HTMLButtonElement | null>(null)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 150)
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
        sizingClassName="[background-size:contain] [background-position:50%_4%] md:[background-size:cover] md:[background-position:50%_16%]"
        overlayClassName="bg-gradient-to-b from-ink/70 via-ink/45 to-ink/95 md:from-ink/85 md:via-ink/80"
      />

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-[1200ms] ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {stage === 'sealed' || stage === 'cracking' ? (
          <p className="mb-8 font-sans text-[11px] tracking-widest2 text-gold/80 uppercase animate-pulseSlow">
            Tap the seal to open your invitation
          </p>
        ) : (
          <p className="mb-8 max-w-xs font-script text-2xl text-gold/90 sm:text-3xl">
            {invitationConfig.sealBrokenNote}
          </p>
        )}

        {/* Envelope */}
        <div
          className="relative w-[280px] sm:w-[360px]"
          style={{ perspective: '1400px' }}
        >
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
                {invitationConfig.innerLetter.line1}
              </p>
              <div className="mt-2 w-12">
                <GoldLine className="from-ink/0 via-ink/40 to-ink/0" />
              </div>
              <p className="mt-2 max-w-[80%] font-sans text-[8px] tracking-widest2 text-ink/70 uppercase sm:text-[9px]">
                {invitationConfig.innerLetter.line2}
              </p>
            </div>

            {/* envelope side creases */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 origin-top-left border-b border-gold/10" style={{ clipPath: 'polygon(0 0, 50% 55%, 0 100%)' }} />
              <div className="absolute inset-0 origin-top-right border-b border-gold/10" style={{ clipPath: 'polygon(100% 0, 50% 55%, 100% 100%)' }} />
            </div>

            {/* Flap */}
            <div
              className="absolute left-0 top-0 h-1/2 w-full origin-top transition-transform duration-[900ms] ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: envelopeOpen ? 'rotateX(-172deg)' : 'rotateX(0deg)',
                zIndex: envelopeOpen ? 5 : 20,
              }}
            >
              <div
                className="h-full w-full border border-gold/40 bg-gradient-to-b from-[#141414] to-[#0a0a0a]"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', backfaceVisibility: 'hidden' }}
              />
            </div>

            {/* Wax seal */}
            {stage !== 'revealed' && (
              <button
                onClick={breakSeal}
                aria-label="Break the wax seal to open your invitation"
                disabled={stage !== 'sealed'}
                className={`absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-gradient-to-br from-gold-light via-gold to-[#8a6a34] text-ink shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 sm:h-16 sm:w-16 ${
                  stage === 'sealed' ? 'hover:scale-105 focus-visible:scale-105 cursor-pointer' : ''
                } ${stage === 'cracking' ? 'scale-125 opacity-0 rotate-12' : 'scale-100 opacity-100'}`}
              >
                <span className="font-display text-lg font-bold sm:text-xl">18</span>
              </button>
            )}
          </div>
        </div>

        <h1 className="sr-only">{invitationConfig.headline} — {invitationConfig.tagline}</h1>

        <div
          className={`mt-10 transition-all duration-700 ${
            stage === 'revealed' ? 'opacity-100 translate-y-0 delay-500' : 'pointer-events-none opacity-0 translate-y-3'
          }`}
        >
          <button
            ref={openButtonRef}
            onClick={handleOpen}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gold px-10 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors duration-500 hover:text-ink"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
            Open Invitation
          </button>
        </div>
      </div>

      {stage === 'intro' && (
        <IntroReveal onFinished={() => navigate('/shais-18th-home')} />
      )}
    </main>
  )
}

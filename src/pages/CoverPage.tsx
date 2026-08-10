import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import invitationConfig from '../config'
import PlaceholderArt from '../components/PlaceholderArt'
import GoldLine from '../components/GoldLine'

type Stage = 'sealed' | 'cracking' | 'open' | 'revealed'

export default function CoverPage() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const [stage, setStage] = useState<Stage>('sealed')
  const [transitioning, setTransitioning] = useState(false)
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
    if (reducedMotion) {
      setStage('revealed')
      return
    }
    setStage('cracking')
    window.setTimeout(() => setStage('open'), 500)
    window.setTimeout(() => setStage('revealed'), 1500)
  }

  const handleOpen = () => {
    if (transitioning) return
    setTransitioning(true)
    window.setTimeout(() => {
      navigate('/shais-18th-home')
    }, 1100)
  }

  const envelopeOpen = stage === 'open' || stage === 'revealed'

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="absolute inset-0">
        <PlaceholderArt variant="nightlife" className="h-full w-full" label="Manhattan night editorial placeholder" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-[1200ms] ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${transitioning ? 'opacity-0 -translate-y-4 scale-95 transition-all duration-[900ms]' : ''}`}
      >
        {stage === 'sealed' || stage === 'cracking' ? (
          <p className="mb-8 font-sans text-[11px] tracking-widest2 text-gold/80 uppercase animate-pulseSlow">
            Tap the seal to open your invitation
          </p>
        ) : (
          <p className="mb-8 font-script text-4xl text-gold/90">XOXO</p>
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
              <p className="font-display text-lg tracking-wide text-ink sm:text-xl">SHAI'S</p>
              <p className="font-display text-3xl tracking-wide text-gold sm:text-4xl">18TH</p>
              <div className="mt-2 w-12">
                <GoldLine className="from-ink/0 via-ink/40 to-ink/0" />
              </div>
              <p className="mt-2 max-w-[80%] font-sans text-[8px] tracking-widest2 text-ink/70 uppercase sm:text-[9px]">
                {invitationConfig.tagline}
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

        <h1 className="sr-only">SHAI'S 18TH — {invitationConfig.tagline}</h1>

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

      <div
        className={`pointer-events-none fixed inset-0 z-40 bg-ink transition-opacity duration-[1100ms] ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </main>
  )
}

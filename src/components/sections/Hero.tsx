import { useEffect, useRef, useState } from 'react'
import PhotoBackdrop from '../PhotoBackdrop'
import GoldLine from '../GoldLine'
import Signoff from '../Signoff'
import { useT } from '../../LanguageContext'

export default function Hero() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const enableTilt = useRef(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 100)
    enableTilt.current =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => window.clearTimeout(t)
  }, [])

  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!enableTilt.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center"
    >
      <PhotoBackdrop
        src="/images/bg-nyc-empire.jpg"
        variant="city"
        label="New York at night"
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        opacity={0.5}
        blurPx={3}
        grayscale={0.15}
        sizingClassName="[background-size:cover] [background-position:50%_35%]"
        overlayClassName="bg-gradient-to-b from-ink/70 via-ink/50 to-ink md:via-ink/60"
        offset={{ x: tilt.x * -12, y: tilt.y * -12 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className={`transition-all duration-[1200ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="max-w-[18ch] font-display text-4xl leading-[1.05] tracking-wide text-ivory sm:text-6xl md:text-7xl">
            {t.hero.title}
          </h1>
        </div>

        <div className={`mt-3 w-40 transition-all duration-700 delay-[500ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <GoldLine />
        </div>

        <p
          className={`mt-5 max-w-xs font-body text-lg italic text-gold sm:text-xl transition-all duration-1000 delay-[700ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {t.hero.subtitle}
        </p>

        <p
          className={`mt-6 max-w-xs font-sans text-[11px] tracking-widest2 text-ivory/80 uppercase sm:text-xs transition-all duration-1000 delay-[1100ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {t.tagline}
        </p>

        <p
          className={`mt-8 font-sans text-[10px] tracking-widest2 text-gold/70 uppercase transition-all duration-1000 delay-[1300ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.hero.place}
        </p>

        <Signoff
          size="md"
          className={`mt-10 text-gold/90 transition-all duration-1000 delay-[1500ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Nothing peeks above the fold on a full-height hero, so this is the
          only thing telling a guest there's an invitation below. It's a
          button as well as a hint — tapping it moves them down a screen. */}
      <button
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight * 0.94,
            behavior: reducedMotion ? 'auto' : 'smooth',
          })
        }
        className={`group absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 px-6 py-2 transition-opacity duration-1000 delay-[1800ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-sans text-[11px] tracking-widest3 text-gold uppercase transition-colors group-hover:text-gold-light">
          {t.hero.scroll}
        </span>

        {/* A lit segment running down a faint track. */}
        <span className="relative block h-11 w-px overflow-hidden bg-gold/20">
          <span className="absolute inset-x-0 top-0 block h-1/2 animate-scrollTrace bg-gradient-to-b from-transparent via-gold to-transparent motion-reduce:animate-none" />
        </span>

        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 animate-nudgeDown text-gold motion-reduce:animate-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </section>
  )
}

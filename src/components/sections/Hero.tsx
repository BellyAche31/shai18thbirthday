import { useEffect, useRef, useState } from 'react'
import PhotoBackdrop from '../PhotoBackdrop'
import GoldLine from '../GoldLine'
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

        <p
          className={`mt-10 font-script text-3xl text-gold/80 transition-all duration-1000 delay-[1500ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.hero.signoff}
        </p>
      </div>

      <div
        className={`absolute bottom-8 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1800ms] ${
          mounted ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <span className="font-sans text-[9px] tracking-widest2 text-ivory uppercase">{t.hero.scroll}</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}

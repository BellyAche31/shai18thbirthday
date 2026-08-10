import { useEffect, useState } from 'react'
import invitationConfig from '../../config'
import PlaceholderArt from '../PlaceholderArt'
import GoldLine from '../GoldLine'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 100)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center"
    >
      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      >
        <PlaceholderArt variant="silhouette" className="h-full w-full" label="Editorial portrait placeholder" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <p
          className={`font-sans text-xs tracking-widest3 text-gold uppercase transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Exclusive
        </p>

        <div
          className={`mt-6 transition-all duration-[1200ms] delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-ivory sm:text-7xl md:text-8xl">
            SHAI'S
          </h1>
        </div>

        <div
          className={`transition-all duration-[1400ms] delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-[8rem] leading-[0.85] text-gold sm:text-[11rem] md:text-[13rem]">
            18
          </h2>
        </div>

        <div className={`mt-2 w-40 transition-all duration-700 delay-[900ms] ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <GoldLine />
        </div>

        <p
          className={`mt-6 max-w-xs font-sans text-[11px] tracking-widest2 text-ivory/80 uppercase sm:text-xs transition-all duration-1000 delay-[1100ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {invitationConfig.tagline}
        </p>

        <p
          className={`mt-8 font-sans text-[10px] tracking-widest2 text-gold/70 uppercase transition-all duration-1000 delay-[1300ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          New York &middot; After Dark
        </p>

        <p
          className={`mt-10 font-script text-3xl text-gold/80 transition-all duration-1000 delay-[1500ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          XOXO
        </p>
      </div>

      <div
        className={`absolute bottom-8 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1800ms] ${
          mounted ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <span className="font-sans text-[9px] tracking-widest2 text-ivory uppercase">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}

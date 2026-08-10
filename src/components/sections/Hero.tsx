import { useEffect, useRef, useState } from 'react'
import invitationConfig from '../../config'
import PhotoBackdrop from '../PhotoBackdrop'
import GoldLine from '../GoldLine'

export default function Hero() {
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
        src={invitationConfig.portraitPhoto}
        variant="silhouette"
        label="The celebrant"
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        opacity={0.58}
        blurPx={2}
        grayscale={0.5}
        sizingClassName="[background-size:contain] [background-position:50%_4%] md:[background-size:cover] md:[background-position:50%_16%]"
        overlayClassName="bg-gradient-to-b from-ink/70 via-ink/45 to-ink md:via-ink/60"
        offset={{ x: tilt.x * -12, y: tilt.y * -12 }}
      />

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

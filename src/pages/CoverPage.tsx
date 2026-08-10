import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import invitationConfig from '../config'
import PlaceholderArt from '../components/PlaceholderArt'
import GoldLine from '../components/GoldLine'

export default function CoverPage() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 150)
    return () => window.clearTimeout(t)
  }, [])

  const handleOpen = () => {
    if (transitioning) return
    setTransitioning(true)
    window.setTimeout(() => {
      navigate('/shais-18th-home')
    }, 1100)
  }

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="absolute inset-0">
        <PlaceholderArt variant="nightlife" className="h-full w-full" label="Manhattan night editorial placeholder" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
      </div>

      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-[1400ms] ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${transitioning ? 'opacity-0 -translate-y-4 scale-95 transition-all duration-[900ms]' : ''}`}
      >
        <p className="font-script text-4xl text-gold/90">XOXO</p>

        <h1 className="mt-4 font-display text-6xl tracking-wide text-ivory sm:text-7xl">SHAI'S</h1>
        <h2 className="mt-1 font-display text-7xl tracking-wide text-gold sm:text-8xl">18TH</h2>

        <div className="mt-6 w-32">
          <GoldLine />
        </div>

        <p className="mt-6 max-w-xs font-sans text-[11px] tracking-widest2 text-ivory/80 uppercase sm:text-xs">
          {invitationConfig.tagline}
        </p>

        <button
          onClick={handleOpen}
          className="group relative mt-14 inline-flex items-center justify-center overflow-hidden rounded-full border border-gold px-10 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors duration-500 hover:text-ink"
        >
          <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
          Open Invitation
        </button>
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

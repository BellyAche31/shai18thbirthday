import { useEffect, useRef, useState } from 'react'
import BokehLights from './BokehLights'

type Phase = 'in' | 'hold' | 'out'

export default function IntroReveal({ onFinished }: { onFinished: () => void }) {
  const [phase, setPhase] = useState<Phase>('in')
  const firedRef = useRef(false)

  const finish = () => {
    if (firedRef.current) return
    firedRef.current = true
    onFinished()
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      const t1 = window.setTimeout(() => setPhase('hold'), 50)
      const t2 = window.setTimeout(() => setPhase('out'), 900)
      const t3 = window.setTimeout(finish, 1400)
      return () => {
        window.clearTimeout(t1)
        window.clearTimeout(t2)
        window.clearTimeout(t3)
      }
    }

    const t1 = window.setTimeout(() => setPhase('hold'), 1000)
    const t2 = window.setTimeout(() => setPhase('out'), 3600)
    const t3 = window.setTimeout(finish, 4600)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink">
      <BokehLights />
      <div className="absolute inset-0 bg-ink/35" />

      <h1
        className={`relative px-6 text-center font-display text-3xl tracking-wide text-ivory transition-all duration-[1400ms] ease-out sm:text-5xl ${
          phase === 'in' ? 'opacity-0 blur-md scale-95' : 'opacity-100 blur-0 scale-100'
        }`}
      >
        Shai&rsquo;s 18th Birthday
      </h1>

      <div
        className={`absolute inset-0 bg-ink transition-opacity duration-[900ms] ease-in ${
          phase === 'out' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <button
        onClick={finish}
        className="absolute bottom-6 right-6 font-sans text-[10px] tracking-widest2 text-ivory/40 uppercase transition-colors hover:text-gold"
      >
        Skip
      </button>
    </div>
  )
}

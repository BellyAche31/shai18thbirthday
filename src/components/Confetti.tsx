import { useEffect, useState } from 'react'

type Particle = {
  id: number
  left: number
  delay: number
  duration: number
  drift: number
  size: number
  color: string
  rotate: number
}

const COLORS = ['#C6A15B', '#E4C989', '#F5F1E8', '#8a6a34']

export default function Confetti({ fire, count = 60 }: { fire: number; count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (fire === 0) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const next = Array.from({ length: count }, (_, i) => ({
      id: fire * 1000 + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2.2 + Math.random() * 1.4,
      drift: (Math.random() - 0.5) * 160,
      size: 5 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 360,
    }))
    setParticles(next)

    const t = window.setTimeout(() => setParticles([]), 4000)
    return () => window.clearTimeout(t)
  }, [fire, count])

  if (particles.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-5%] block animate-confetti-fall"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 0.4}px`,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}px`,
              '--rotate': `${p.rotate}deg`,
            } as React.CSSProperties
          }
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(105vh) translateX(var(--drift)) rotate(var(--rotate)); opacity: 0; }
        }
        .animate-confetti-fall {
          animation-name: confetti-fall;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}

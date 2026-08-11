import type { ArtVariant } from '../config'

type Variant = ArtVariant

const GRADIENTS: Record<Variant, string> = {
  city: 'radial-gradient(circle at 30% 20%, #2a2a2a 0%, #0a0a0a 55%, #000 100%)',
  texture: 'linear-gradient(135deg, #141414 0%, #060606 60%, #1a1a1a 100%)',
  silhouette: 'radial-gradient(circle at 50% 30%, #1c1c1c 0%, #050505 70%)',
  interior: 'linear-gradient(160deg, #1a1410 0%, #0a0806 55%, #000 100%)',
  champagne: 'radial-gradient(circle at 60% 70%, #2b2313 0%, #0a0806 60%, #000 100%)',
  flowers: 'radial-gradient(circle at 40% 40%, #1c1310 0%, #080604 65%, #000 100%)',
  jewelry: 'radial-gradient(circle at 50% 50%, #201a10 0%, #060504 65%, #000 100%)',
  architecture: 'linear-gradient(150deg, #171717 0%, #050505 60%)',
  flash: 'radial-gradient(circle at 50% 40%, #2c2c2c 0%, #050505 70%)',
  nightlife: 'linear-gradient(145deg, #1a1210 0%, #060404 55%, #050505 100%)',
}

function Motif({ variant }: { variant: Variant }) {
  const stroke = '#C6A15B'
  const common = { stroke, strokeWidth: 0.6, fill: 'none', vectorEffect: 'non-scaling-stroke' as const }

  switch (variant) {
    case 'city':
    case 'architecture':
      return (
        <svg viewBox="0 0 200 120" className="w-2/3 max-w-[220px] opacity-70">
          <g {...common}>
            <path d="M10 110 V60 H24 V110" />
            <path d="M28 110 V40 H46 V110" />
            <path d="M50 110 V70 H62 V110" />
            <path d="M66 110 V20 H90 V110" />
            <path d="M94 110 V55 H110 V110" />
            <path d="M114 110 V30 H132 V110" />
            <path d="M136 110 V65 H150 V110" />
            <path d="M154 110 V45 H176 V110" />
            <path d="M180 110 V75 H190 V110" />
          </g>
          <line x1="0" y1="110" x2="200" y2="110" stroke={stroke} strokeWidth="0.6" />
        </svg>
      )
    case 'champagne':
      return (
        <svg viewBox="0 0 60 120" className="h-2/3 max-h-[220px] opacity-70">
          <g {...common}>
            <path d="M20 10 C20 30 30 30 30 45 C30 30 40 30 40 10 Z" />
            <line x1="30" y1="45" x2="30" y2="95" />
            <ellipse cx="30" cy="105" rx="16" ry="5" />
          </g>
        </svg>
      )
    case 'flowers':
      return (
        <svg viewBox="0 0 120 120" className="w-1/2 max-w-[180px] opacity-70">
          <g {...common}>
            <circle cx="60" cy="60" r="10" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse
                key={deg}
                cx="60"
                cy="34"
                rx="10"
                ry="18"
                transform={`rotate(${deg} 60 60)`}
              />
            ))}
          </g>
        </svg>
      )
    case 'jewelry':
      return (
        <svg viewBox="0 0 120 120" className="w-1/2 max-w-[180px] opacity-70">
          <g {...common}>
            <circle cx="60" cy="45" r="22" />
            <path d="M38 45 L60 90 L82 45" />
            <circle cx="60" cy="45" r="6" />
          </g>
        </svg>
      )
    case 'silhouette':
    case 'flash':
      return (
        <svg viewBox="0 0 100 140" className="h-2/3 max-h-[240px] opacity-70">
          <g {...common}>
            <path d="M50 10 C35 10 30 25 32 38 C24 42 22 55 30 62 C28 80 34 96 50 100 C66 96 72 80 70 62 C78 55 76 42 68 38 C70 25 65 10 50 10 Z" />
            <line x1="50" y1="100" x2="50" y2="130" />
          </g>
        </svg>
      )
    case 'nightlife':
      return (
        <svg viewBox="0 0 160 100" className="w-2/3 max-w-[220px] opacity-70">
          <g {...common}>
            <circle cx="40" cy="35" r="18" />
            <circle cx="90" cy="55" r="24" />
            <circle cx="130" cy="30" r="12" />
          </g>
        </svg>
      )
    case 'interior':
      return (
        <svg viewBox="0 0 160 100" className="w-2/3 max-w-[220px] opacity-70">
          <g {...common}>
            <rect x="20" y="20" width="120" height="60" />
            <line x1="20" y1="50" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="80" />
            <line x1="100" y1="20" x2="100" y2="80" />
          </g>
        </svg>
      )
    case 'texture':
    default:
      return (
        <svg viewBox="0 0 100 100" className="w-1/2 max-w-[160px] opacity-60">
          <g {...common}>
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="18" />
          </g>
        </svg>
      )
  }
}

export default function PlaceholderArt({
  variant,
  className = '',
  label,
}: {
  variant: Variant
  className?: string
  label?: string
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: GRADIENTS[variant] }}
      role="img"
      aria-label={label ?? `Editorial placeholder image — ${variant}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay animate-grain bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%22120%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
      <div className="pointer-events-none absolute inset-0 border border-gold/10" />
      <Motif variant={variant} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
    </div>
  )
}

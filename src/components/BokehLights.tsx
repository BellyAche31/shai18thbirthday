const BLOBS = [
  { top: '8%', left: '48%', size: 110, color: '#6ee7b7', blur: 46, delay: 0 },
  { top: '28%', left: '12%', size: 60, color: '#f5f1e8', blur: 26, delay: 0.4 },
  { top: '52%', left: '78%', size: 85, color: '#c6a15b', blur: 34, delay: 0.9 },
  { top: '68%', left: '22%', size: 70, color: '#e4c989', blur: 30, delay: 1.3 },
  { top: '38%', left: '88%', size: 50, color: '#8a6a34', blur: 24, delay: 0.6 },
  { top: '78%', left: '58%', size: 65, color: '#f5f1e8', blur: 28, delay: 1.1 },
  { top: '14%', left: '76%', size: 46, color: '#c6a15b', blur: 22, delay: 0.2 },
  { top: '58%', left: '42%', size: 56, color: '#6ee7b7', blur: 26, delay: 1.6 },
  { top: '20%', left: '30%', size: 40, color: '#f5f1e8', blur: 20, delay: 1.8 },
  { top: '85%', left: '85%', size: 55, color: '#e4c989', blur: 26, delay: 0.7 },
]

export default function BokehLights() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {BLOBS.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-bokeh"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            backgroundColor: b.color,
            filter: `blur(${b.blur}px)`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* glowing tower silhouette, echoing the reference animation */}
      <div className="absolute left-1/2 top-0 h-[38%] w-[10px] -translate-x-1/2 bg-gradient-to-b from-emerald-300/80 via-emerald-400/25 to-transparent blur-[6px]" />
      <div className="absolute left-1/2 top-0 h-[10%] w-[3px] -translate-x-1/2 bg-emerald-200/90 blur-[2px]" />

      <style>{`
        /* Opacity only — pulsing the scale meant the compositor had to redo
           every blob's blur each frame, which is what made the intro stutter
           on phones. Opacity animates on the existing texture for free. */
        @keyframes bokeh {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .animate-bokeh {
          animation: bokeh 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-bokeh {
            animation: none;
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}

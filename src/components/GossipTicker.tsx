import invitationConfig from '../config'

export default function GossipTicker() {
  const headlines = invitationConfig.tickerHeadlines
  const line = headlines.join('   ·   ')

  return (
    <div className="relative w-full overflow-hidden border-y border-gold/15 bg-ink py-3">
      <div className="flex w-max animate-[ticker_28s_linear_infinite] motion-reduce:animate-none gap-8 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <span
            key={rep}
            className="font-sans text-[11px] tracking-widest2 text-gold/80 uppercase"
            aria-hidden={rep === 1}
          >
            {line}
            <span className="mx-8" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

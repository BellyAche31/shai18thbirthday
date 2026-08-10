import invitationConfig from '../config'
import SmartImage from './SmartImage'

/**
 * The opening gossip-column dispatch: an instant photo of the celebrant with
 * a note scrawled beneath it, tilted like it was pinned to a corkboard.
 */
export default function SpottedCard({ visible }: { visible: boolean }) {
  const { eyebrow, lines, signoff } = invitationConfig.spottedCard

  return (
    <article
      className={`relative w-[86vw] max-w-[340px] rotate-[-1.5deg] bg-ivory p-4 shadow-[0_28px_70px_rgba(0,0,0,0.7)] transition-all duration-[1100ms] ease-out motion-reduce:transition-none sm:max-w-[380px] sm:p-5 ${
        visible ? 'translate-y-0 scale-100 opacity-100 blur-0' : 'translate-y-6 scale-95 opacity-0 blur-sm'
      }`}
    >
      <p className="font-display text-lg italic tracking-wide text-ink sm:text-xl">{eyebrow}</p>

      <div className="relative mt-3 aspect-square w-full overflow-hidden bg-ink">
        <SmartImage
          src={invitationConfig.portraitPhoto}
          variant="silhouette"
          alt={`${invitationConfig.name}, the celebrant`}
          className="h-full w-full object-cover object-[50%_18%] grayscale contrast-[1.08]"
        />
        {/* A touch of flash-photo bloom across the top of the print. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
      </div>

      <div className="mt-4 space-y-1.5">
        {lines.map((line) => (
          <p key={line} className="font-body text-[15px] leading-snug text-ink/85 sm:text-base">
            {line}
          </p>
        ))}
        <p className="whitespace-pre-line pt-1 font-script text-3xl leading-tight text-gold">{signoff}</p>
      </div>
    </article>
  )
}

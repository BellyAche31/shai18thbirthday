/**
 * The "xoxo, gossip girl" lockup: a small handwritten "xoxo," sitting above a
 * wide, thin geometric "gossip girl", with a kiss tucked at the end. Two
 * different faces on purpose — that contrast is the whole look.
 */
export default function Signoff({
  className = '',
  size = 'md',
  align = 'center',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** Where the lockup sits relative to its container. */
  align?: 'center' | 'left'
}) {
  const scale = {
    sm: { xoxo: 'text-2xl sm:text-3xl', name: 'text-xl sm:text-2xl', kiss: 'text-base sm:text-lg', pull: '-mt-1' },
    md: { xoxo: 'text-3xl sm:text-4xl', name: 'text-2xl sm:text-3xl', kiss: 'text-lg sm:text-xl', pull: '-mt-1.5' },
    lg: { xoxo: 'text-4xl sm:text-5xl', name: 'text-3xl sm:text-5xl', kiss: 'text-xl sm:text-2xl', pull: '-mt-2' },
  }[size]

  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} leading-none ${className}`}
    >
      {/* Indented slightly so the script sits over the middle of the word
          below it, the way it does on a handwritten note. */}
      <span className={`font-xoxo ${scale.xoxo} ${align === 'center' ? '' : 'ml-1'}`}>xoxo,</span>
      <span className={`flex items-end gap-2 ${scale.pull}`}>
        <span className={`font-gossip ${scale.name} tracking-[0.08em] lowercase`}>gossip girl</span>
        <span className={`${scale.kiss} leading-none`} aria-hidden="true">
          💋
        </span>
      </span>
    </div>
  )
}

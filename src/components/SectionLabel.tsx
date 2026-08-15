export default function SectionLabel({
  children,
  align = 'center',
}: {
  children: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      <span className="font-sans text-[11px] sm:text-xs tracking-widest2 text-gold uppercase">
        {children}
      </span>
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
    </div>
  )
}

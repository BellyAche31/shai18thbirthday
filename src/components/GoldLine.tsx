export default function GoldLine({ className = '' }: { className?: string }) {
  return (
    <div className={`h-px w-full origin-left scale-x-0 animate-lineGrow bg-gradient-to-r from-transparent via-gold to-transparent ${className}`} />
  )
}

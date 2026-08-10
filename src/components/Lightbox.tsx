import { useEffect, useRef } from 'react'
import SmartImage from './SmartImage'
import type { GalleryImage } from '../config'

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}) {
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onNavigate])

  const image = images[index]

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNavigate((index + 1) % images.length)
      else onNavigate((index - 1 + images.length) % images.length)
    }
    touchStartX.current = null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/97 backdrop-blur-md animate-fadeIn px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.caption} — full screen view`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <button
        onClick={() => onNavigate((index + 1) % images.length)}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="relative w-full max-w-2xl aspect-[4/5] border border-gold/20">
        <SmartImage
          src={image.src}
          variant={image.variant}
          alt={image.caption}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-5 font-sans text-xs tracking-widest2 text-gold uppercase">{image.caption}</p>
      <p className="mt-1 font-body text-ivory/50 text-sm">
        {index + 1} / {images.length}
      </p>
      <p className="mt-1 font-sans text-[9px] tracking-widest2 text-ivory/30 uppercase sm:hidden">
        Swipe to browse
      </p>
    </div>
  )
}

import { useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import SmartImage from '../SmartImage'
import Lightbox from '../Lightbox'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const images = invitationConfig.galleryImages

  return (
    <section id="gallery" className="relative bg-ink px-6 py-24 sm:py-32">
      <Reveal>
        <SectionLabel>Gallery</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide text-ivory sm:text-4xl">
          THE VISUAL DIARY
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
        {images.map((image, i) => (
          <Reveal key={image.src} delay={(i % 6) * 80} className={i % 5 === 0 ? 'col-span-2 sm:col-span-1' : ''}>
            <button
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden aspect-[3/4] focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label={`Open photo: ${image.caption}`}
            >
              <SmartImage
                src={image.src}
                variant={image.variant}
                alt={image.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="absolute bottom-3 left-3 font-sans text-[10px] tracking-widest2 text-ivory uppercase">
                {image.caption}
              </span>
              <span className="absolute inset-0 border border-gold/0 transition-colors duration-300 group-hover:border-gold/40" />
            </button>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={(next) => setActiveIndex(next)}
        />
      )}
    </section>
  )
}

import { useEffect, useState } from 'react'
import assetUrl from '../assetUrl'

type Props = {
  src: string
  /** Which edge she stands against. The fade runs toward the opposite side. */
  side: 'left' | 'right'
  /**
   * Width of the figure, phone and `sm:` up, as a percentage of the section.
   * Given as numbers so the two are obviously a pair.
   */
  width?: { phone: number; desktop: number }
  /**
   * Ceiling on her height. Capped against the viewport as well as the section,
   * because the entourage sections run to eighteen name plates and a straight
   * percentage of those would have her three storeys tall.
   *
   * `viewportPhone` runs much shorter than `viewport` on purpose: a phone
   * centres its type across the whole width, so the only place she can stand
   * without a paragraph landing on her face is the band of padding below the
   * content. Sections carrying a figure open that band up.
   */
  maxHeight?: { section: number; viewport: number; viewportPhone: number }
  /** 0–1. Phones carry centred type across the full width, so they run lower. */
  opacity?: { phone: number; desktop: number }
  className?: string
}

/**
 * The celebrant, cut out of her studio frame and stood at the edge of a
 * section.
 *
 * This is the counterpart to `PhotoBackdrop`, not a variant of it. A backdrop
 * is a photograph turned into atmosphere — darkened, desaturated, blurred,
 * pushed under a gradient. Running a keyed-out figure through that same
 * treatment doesn't produce a subtle figure, it produces a smudge: there is no
 * frame left to read as texture, only her, and she disappears. So this keeps
 * her sharp and in colour and does its blending with a mask instead — she
 * dissolves toward the type rather than being dimmed underneath it.
 */
export default function FigureCutout({
  src,
  side,
  width = { phone: 52, desktop: 33 },
  maxHeight = { section: 78, viewport: 78, viewportPhone: 26 },
  opacity = { phone: 0.9, desktop: 1 },
  className = '',
}: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.onload = () => !cancelled && setLoaded(true)
    img.src = assetUrl(src)
    return () => {
      cancelled = true
    }
  }, [src])

  // She fades out toward the middle of the section, where the type lives, and
  // along the bottom, where the studio crop cuts her off at the hip. Two
  // gradients intersected: a single one can only do one of the two, and an
  // uncut bottom edge reads as a photo someone sliced in half.
  const inner = side === 'left' ? 'to right' : 'to left'
  const mask = [
    `linear-gradient(${inner}, #000 0%, #000 52%, rgba(0,0,0,0.55) 76%, transparent 100%)`,
    'linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.45) 88%, transparent 100%)',
  ].join(', ')

  return (
    <div
      className={`figure-cutout pointer-events-none absolute bottom-0 z-0 select-none ${
        side === 'left' ? 'left-0' : 'right-0'
      } ${className}`}
      style={
        {
          '--fig-w': `${width.phone}%`,
          '--fig-w-sm': `${width.desktop}%`,
          '--fig-h': `${maxHeight.section}%`,
          '--fig-vh': `${maxHeight.viewportPhone}vh`,
          '--fig-vh-sm': `${maxHeight.viewport}vh`,
          '--fig-o': String(opacity.phone),
          '--fig-o-sm': String(opacity.desktop),
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* A warm bloom behind her, so she lifts off the near-black instead of
          sitting on it as a silhouette. Sized larger than she is and kept very
          low — it should read as spill from the room, not a halo. */}
      <div
        className="absolute inset-0 -z-10 scale-125 opacity-70"
        style={{
          background:
            side === 'left'
              ? 'radial-gradient(60% 55% at 38% 42%, rgba(232,219,160,0.13), transparent 70%)'
              : 'radial-gradient(60% 55% at 62% 42%, rgba(232,219,160,0.13), transparent 70%)',
        }}
      />

      <img
        src={assetUrl(src)}
        alt=""
        decoding="async"
        loading="lazy"
        className="h-full w-full object-contain object-bottom transition-all duration-[1600ms] ease-out motion-reduce:transition-none"
        style={{
          opacity: loaded ? undefined : 0,
          transform: `translate3d(0, ${loaded ? '0' : '18px'}, 0)`,
          maskImage: mask,
          WebkitMaskImage: mask,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
          // Studio light is flat by nature; a touch of contrast and warmth puts
          // her in the same room as the rest of the page.
          filter: 'contrast(1.06) saturate(1.05) drop-shadow(0 18px 40px rgba(0,0,0,0.55))',
        }}
      />
    </div>
  )
}

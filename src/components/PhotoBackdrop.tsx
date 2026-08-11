import { useEffect, useState } from 'react'
import PlaceholderArt from './PlaceholderArt'
import assetUrl from '../assetUrl'
import type { ArtVariant } from '../config'

const GRAIN =
  "url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%22120%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')"

type Props = {
  src: string
  /** Generated art shown if the photo file isn't there. */
  variant: ArtVariant
  label?: string
  /** 0–1. Deliberately low — this is atmosphere, not a photo on display. */
  opacity?: number
  blurPx?: number
  /** 0–1 desaturation, for the black-and-white editorial feel. */
  grayscale?: number
  /**
   * Tailwind classes controlling background-size / background-position.
   *
   * These need to be classes rather than inline styles so they can respond to
   * breakpoints: a square portrait wants `contain` on a tall phone (`cover`
   * would crop away most of its width), but `cover` on a wide screen (`contain`
   * leaves bare vertical edges where the photo stops).
   */
  sizingClassName?: string
  /** Tailwind classes for the darkening gradient over the photo. */
  overlayClassName?: string
  /** Pointer-parallax offset in px. */
  offset?: { x: number; y: number }
  className?: string
}

/**
 * A photograph used as set dressing: darkened, desaturated and softly blurred
 * so it reads as mood behind the content rather than competing with it.
 *
 * Falls back to the generated placeholder art if the file is missing, so a
 * not-yet-uploaded photo never leaves a blank panel.
 */
export default function PhotoBackdrop({
  src,
  variant,
  label = '',
  opacity = 0.55,
  blurPx = 3,
  grayscale = 0.55,
  sizingClassName = '[background-size:cover] [background-position:50%_25%]',
  // Darkest at the edges where type sits, lightest through the middle so the
  // photo actually reads. Stacking heavy overlays on a low-opacity photo
  // multiplies out to near-black, so this stays deliberately light.
  overlayClassName = 'bg-gradient-to-b from-ink/75 via-ink/40 to-ink/95',
  offset = { x: 0, y: 0 },
  className = '',
}: Props) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Decode before showing, so it fades up cleanly instead of popping in
  // half-painted partway through the download.
  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.onload = () => !cancelled && setLoaded(true)
    img.onerror = () => !cancelled && setFailed(true)
    img.src = assetUrl(src)
    return () => {
      cancelled = true
    }
  }, [src])

  if (failed) {
    return <PlaceholderArt variant={variant} className={className} label={label} />
  }

  return (
    // No position utility here on purpose: callers pass their own (usually
    // `absolute inset-0`), and a hardcoded `relative` would win the cascade
    // and collapse this to a 0x0 box.
    <div className={`overflow-hidden bg-ink ${className}`} aria-hidden="true">
      <div
        className={`h-full w-full bg-no-repeat transition-all duration-[2200ms] ease-out motion-reduce:transition-none ${sizingClassName}`}
        style={{
          backgroundImage: `url("${assetUrl(src)}")`,
          opacity: loaded ? opacity : 0,
          filter: `grayscale(${grayscale}) blur(${blurPx}px)`,
          // Overscaled so the blur never reveals soft edges, and so the
          // settle-in has somewhere to travel from.
          transform: `scale(${loaded ? 1.14 : 1.26}) translate3d(${offset.x}px, ${offset.y}px, 0)`,
          willChange: 'transform, opacity',
        }}
      />

      {/* Keeps type legible over any part of the photo. */}
      <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />

      {/* Vignette — pulls the eye to the middle, hides the frame edges. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 32%, transparent 0%, rgba(8,8,8,0.28) 62%, rgba(8,8,8,0.8) 100%)',
        }}
      />

      {/* Film grain, matching the treatment on the generated art. */}
      <div
        className="pointer-events-none absolute inset-0 animate-grain bg-repeat opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  )
}

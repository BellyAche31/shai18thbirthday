import { useState, type CSSProperties } from 'react'
import PlaceholderArt from './PlaceholderArt'
import assetUrl from '../assetUrl'
import type { ArtVariant } from '../config'

export default function SmartImage({
  src,
  variant,
  alt,
  className = '',
  style,
}: {
  src: string
  variant: ArtVariant
  alt: string
  className?: string
  /** For per-photo object-position — faces don't all sit in the same place. */
  style?: CSSProperties
}) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return <PlaceholderArt variant={variant} className={className} label={alt} />
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      loading="lazy"
      className={className}
      style={style}
      // Blocks the long-press callout on iOS and the right-click menu on
      // desktop — the two easy ways to save a photo. A determined guest can
      // still screenshot or open the file URL; see the note in index.css.
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onError={() => setErrored(true)}
    />
  )
}

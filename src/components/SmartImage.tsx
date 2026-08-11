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
      onError={() => setErrored(true)}
    />
  )
}

import { useState } from 'react'
import PlaceholderArt from './PlaceholderArt'
import assetUrl from '../assetUrl'
import type { ArtVariant } from '../config'

export default function SmartImage({
  src,
  variant,
  alt,
  className = '',
}: {
  src: string
  variant: ArtVariant
  alt: string
  className?: string
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
      onError={() => setErrored(true)}
    />
  )
}

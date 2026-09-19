/**
 * Resolve a public-folder path (e.g. "/images/photo-01.jpg") against the
 * app's base URL.
 *
 * Vite rewrites asset URLs it can see at build time (imports, index.html),
 * but paths that live in config and are only used at runtime are emitted
 * verbatim. A root-absolute "/images/..." breaks whenever the site is served
 * from a subpath — e.g. GitHub Pages project sites at
 * username.github.io/repo-name/ — because it resolves against the domain
 * root instead of the repo folder.
 */
export function assetUrl(path: string): string {
  // Already an absolute URL or a data URI — leave it alone.
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) return path

  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

export default assetUrl

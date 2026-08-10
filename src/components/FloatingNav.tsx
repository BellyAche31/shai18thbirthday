import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#scoop', label: 'THE SCOOP' },
  { href: '#cover-story', label: 'COVER STORY' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#the-night', label: 'THE NIGHT' },
  { href: '#rsvp', label: 'RSVP' },
]

export default function FloatingNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-8 py-4 transition-colors duration-500 ${
          scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
        }`}
      >
        <a href="#home" className="font-display text-ivory text-sm tracking-widest2 uppercase">
          S<span className="text-gold">·</span>18
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-sans text-[11px] tracking-widest2 text-ivory/80 hover:text-gold transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-gold/30"
        >
          <span
            className={`block h-px w-4 bg-gold transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-4 bg-gold transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-ink/97 backdrop-blur-sm transition-opacity duration-400 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            className={`font-display text-2xl tracking-widest text-ivory hover:text-gold transition-all duration-500 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}

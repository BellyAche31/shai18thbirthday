import { useEffect, useState } from 'react'
import PreferenceToggles from './PreferenceToggles'
import { useT } from '../LanguageContext'

export default function FloatingNav() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const LINKS = [
    { href: '#home', label: t.nav.home },
    { href: '#scoop', label: t.nav.scoop },
    { href: '#the-night', label: t.nav.theNight },
    { href: '#rsvp', label: t.nav.rsvp },
  ]

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
          scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
        }`}
      >
        {/* Pre-scroll, the bar floats transparent over Hero, which stays a
            fixed dark photo in both themes — so the logo/links need fixed
            ivory here, not the themed onsurface, or light mode goes
            dark-on-dark. Once scrolled, the bar gets its own themed
            backdrop, so onsurface is correct again. */}
        <a
          href="#home"
          className={`font-display text-sm tracking-widest2 uppercase transition-colors duration-500 ${scrolled ? 'text-onsurface' : 'text-ivory'}`}
        >
          S<span className="text-gold">·</span>18
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-sans text-[11px] tracking-widest2 hover:text-gold transition-colors uppercase ${scrolled ? 'text-onsurface/80' : 'text-ivory/80'}`}
            >
              {link.label}
            </button>
          ))}
          <PreferenceToggles />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <PreferenceToggles />
          <button
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-gold/30"
          >
            <span
              className={`block h-px w-4 bg-gold transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-4 bg-gold transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-surface/97 backdrop-blur-sm transition-opacity duration-400 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            className={`font-display text-2xl tracking-widest text-onsurface hover:text-gold transition-all duration-500 ${
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

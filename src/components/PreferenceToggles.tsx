import { useTheme } from '../ThemeContext'
import { useLang } from '../LanguageContext'

/**
 * Theme switch, shared between the cover page (which has no nav bar yet)
 * and the floating nav on the invitation itself.
 */
export default function PreferenceToggles({ className = '' }: { className?: string }) {
  const { theme, toggle: toggleTheme } = useTheme()
  const { t } = useLang()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t.nav.switchToLight : t.nav.switchToDark}
        title={theme === 'dark' ? t.nav.switchToLight : t.nav.switchToDark}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        {theme === 'dark' ? (
          // Sun — tap to go light.
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
          </svg>
        ) : (
          // Moon — tap to go dark.
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" stroke="none">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
          </svg>
        )}
      </button>
    </div>
  )
}

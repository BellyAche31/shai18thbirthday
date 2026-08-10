import { useMusic } from '../MusicContext'

/**
 * Floating play/pause control. The <audio> element itself lives in
 * MusicProvider so playback survives the cover -> invitation transition.
 */
export default function MusicPlayer() {
  const { playing, unavailable, toggle } = useMusic()

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggle}
        disabled={unavailable}
        aria-label={playing ? 'Pause music' : 'Play music'}
        aria-pressed={playing}
        title={unavailable ? 'Music coming soon' : playing ? 'Pause music' : 'Play music'}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
          unavailable
            ? 'border-gold/15 opacity-40 cursor-not-allowed'
            : 'border-gold/40 bg-ink/70 backdrop-blur-md hover:border-gold hover:bg-ink/90'
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full border border-gold/30 ${
            playing ? 'animate-spinSlow' : ''
          }`}
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${unavailable ? 'text-gold/40' : 'text-gold'}`}
          fill="currentColor"
        >
          {playing ? (
            <path d="M9 4h2v16H9zM13 4h2v16h-2z" />
          ) : (
            <path d="M9 18V6l10 6-10 6z" />
          )}
        </svg>
      </button>
    </div>
  )
}

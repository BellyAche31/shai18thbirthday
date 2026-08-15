import { useEffect, useState } from 'react'

/**
 * The title card, animated the way a show's opening titles are: the letters
 * arrive out of focus and resolve one after another, the tracking closes up,
 * and a gold glint runs through the finished wordmark.
 *
 * Two rules shape the implementation:
 *
 *  - Nothing keeps a `filter` once it has landed. A lingering filter — even
 *    blur(0) — pins the element to its own composited layer, and phones
 *    rasterize those at reduced resolution, which is what made an earlier
 *    version of this intro look permanently pixelated. So the blur lives only
 *    inside the keyframes, and `settled` strips them off afterwards.
 *  - The glint is a text-shadow, not a filter, for the same reason.
 *
 * Characters are grouped into words rather than laid out as one flat run:
 * the line starts at wide tracking, which is far too wide for a phone, so it
 * has to be able to wrap — but only between words, never mid-word.
 */
export default function IntroTitle({
  text,
  eyebrow,
  visible,
}: {
  text: string
  eyebrow: string
  visible: boolean
}) {
  const words = text.split(' ')
  const STAGGER = 55
  const CHAR_DURATION = 900
  const settleAt = [...text].length * STAGGER + CHAR_DURATION

  const [settled, setSettled] = useState(false)

  useEffect(() => {
    if (!visible) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setSettled(true)
      return
    }
    const t = window.setTimeout(() => setSettled(true), settleAt)
    return () => window.clearTimeout(t)
    // Deliberately never resets on hide. `settled` is what strips the
    // keyframes off the letters, and an animation that interpolates *to*
    // `filter: none` still computes as blur(0px) while it fills — a filter
    // is a filter, and it would pin the title to a low-res composited layer
    // for the rest of the intro. Once settled, it stays settled.
  }, [visible, settleAt])

  // Each word remembers where it starts in the whole string, so the stagger
  // reads as one continuous sweep instead of restarting on every word (and
  // the skipped space keeps a beat of pause between them).
  let cursor = 0
  const groups = words.map((word) => {
    const start = cursor
    cursor += word.length + 1
    return { word, start }
  })

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 px-5 text-center transition-opacity ease-out sm:px-6 ${
        visible ? 'opacity-100 duration-700' : 'opacity-0 duration-300'
      }`}
    >
      {/* A soft bed of dark behind the type. The skyline is at its brightest
          right about here, and the title has to win. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[150vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.75) 45%, rgba(8,8,8,0) 72%)',
        }}
        aria-hidden="true"
      />

      <p
        className={`intro-eyebrow font-sans text-[9px] tracking-widest2 text-gold/75 uppercase sm:text-[11px] sm:tracking-widest3 ${
          settled ? 'is-settled' : ''
        }`}
      >
        {eyebrow}
      </p>

      <h1
        className={`intro-title mt-4 font-display text-[1.75rem] leading-[1.25] text-ivory sm:mt-5 sm:text-5xl ${
          settled ? 'is-settled' : ''
        }`}
      >
        {groups.map(({ word, start }, w) => (
          <span key={w}>
            {/* The word is one unbreakable unit; the space after it is a
                normal text node, so a long title wraps between words. */}
            <span className="intro-word">
              {[...word].map((ch, i) => (
                <span
                  key={i}
                  className="intro-char"
                  style={settled ? undefined : { animationDelay: `${(start + i) * STAGGER}ms` }}
                  aria-hidden="true"
                >
                  {ch}
                </span>
              ))}
            </span>
            {w < groups.length - 1 ? ' ' : null}
          </span>
        ))}
        {/* The spans above are decorative; this keeps the title readable as
            one string to a screen reader. */}
        <span className="sr-only">{text}</span>
      </h1>

      <span
        className={`intro-rule mx-auto mt-5 block h-px w-40 max-w-[70%] bg-gradient-to-r from-transparent via-gold to-transparent sm:mt-6 ${
          settled ? 'is-settled' : ''
        }`}
        aria-hidden="true"
      />
    </div>
  )
}

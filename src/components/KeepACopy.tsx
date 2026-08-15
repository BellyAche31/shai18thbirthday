import { useState } from 'react'
import { useT } from '../LanguageContext'
import { downloadCalendarEvent } from '../lib/calendarEvent'

type State = 'idle' | 'working' | 'failed'

/**
 * Lets a guest take the details away with them: the full programme as a
 * printable PDF, and the evening in their calendar.
 */
export default function KeepACopy({ tone = 'onsurface' }: { tone?: 'onsurface' | 'onalt' }) {
  const t = useT()
  const [state, setState] = useState<State>('idle')

  const handleProgram = async () => {
    setState('working')
    try {
      // Pulled in on tap — the PDF builder is bigger than the rest of the
      // app and most guests will never need it.
      const { downloadProgramPdf } = await import('../lib/programPdf')
      await downloadProgramPdf(t)
      setState('idle')
    } catch {
      setState('failed')
    }
  }

  const hint = tone === 'onalt' ? 'text-onalt/60' : 'text-onsurface/60'

  return (
    <div className="mx-auto flex max-w-md flex-col items-center">
      <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
        <button
          onClick={handleProgram}
          disabled={state === 'working'}
          className="inline-flex items-center justify-center gap-2.5 border border-gold/50 px-7 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
          </svg>
          {state === 'working' ? t.downloads.preparing : t.downloads.program}
        </button>

        <button
          onClick={() => downloadCalendarEvent(t.intro.title)}
          className="inline-flex items-center justify-center gap-2.5 border border-gold/50 px-7 py-4 font-sans text-xs tracking-widest2 text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15" rx="1" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          </svg>
          {t.downloads.calendar}
        </button>
      </div>

      <p className={`mt-4 text-center font-sans text-[11px] ${state === 'failed' ? 'text-burgundy' : hint}`} role={state === 'failed' ? 'alert' : undefined}>
        {state === 'failed' ? t.downloads.failed : t.downloads.programHint}
      </p>
    </div>
  )
}

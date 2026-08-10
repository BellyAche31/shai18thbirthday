import { useEffect, useState } from 'react'
import invitationConfig from '../../config'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import GoldLine from '../GoldLine'
import Confetti from '../Confetti'

type Attendance = 'accepts' | 'declines'
type RsvpRecord = {
  name: string
  attendance: Attendance
  guests: number
}

const STORAGE_KEY = 'shai18-rsvp'

export default function Rsvp() {
  const [record, setRecord] = useState<RsvpRecord | null>(null)
  const [editing, setEditing] = useState(true)
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('accepts')
  const [guests, setGuests] = useState(1)
  const [error, setError] = useState('')
  const [fire, setFire] = useState(0)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved: RsvpRecord = JSON.parse(raw)
        setRecord(saved)
        setName(saved.name)
        setAttendance(saved.attendance)
        setGuests(saved.guests)
        setEditing(false)
      }
    } catch {
      // ignore corrupted storage
    }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Tell us who to expect.')
      return
    }
    setError('')
    const next: RsvpRecord = { name: name.trim(), attendance, guests }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setRecord(next)
    setEditing(false)
    if (attendance === 'accepts') setFire((f) => f + 1)
  }

  const showExternalLink = !invitationConfig.rsvpUrl.startsWith('#')

  return (
    <section id="rsvp" className="relative bg-ivory px-6 py-24 text-center text-ink sm:py-32">
      <Reveal>
        <SectionLabel>You're Invited</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-4xl tracking-wide sm:text-5xl">RSVP</h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-sm font-body text-lg italic text-ink/70">
          Because no unforgettable night is complete without the right
          people.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="mx-auto mt-6 w-16">
          <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-sm">
        {editing ? (
          <Reveal delay={400}>
            <form onSubmit={submit} className="space-y-5 text-left">
              <div>
                <label htmlFor="rsvp-name" className="font-sans text-[10px] tracking-widest2 text-ink/60 uppercase">
                  Your Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Genevieve Marchetti"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 font-body text-lg text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none"
                />
                {error && <p className="mt-1 font-sans text-xs text-burgundy">{error}</p>}
              </div>

              <div>
                <span className="font-sans text-[10px] tracking-widest2 text-ink/60 uppercase">Will you attend?</span>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('accepts')}
                    aria-pressed={attendance === 'accepts'}
                    className={`border px-3 py-3 font-sans text-xs tracking-widest2 uppercase transition-colors ${
                      attendance === 'accepts' ? 'border-ink bg-ink text-ivory' : 'border-ink/30 text-ink/70 hover:border-ink'
                    }`}
                  >
                    Joyfully Accepts
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('declines')}
                    aria-pressed={attendance === 'declines'}
                    className={`border px-3 py-3 font-sans text-xs tracking-widest2 uppercase transition-colors ${
                      attendance === 'declines' ? 'border-ink bg-ink text-ivory' : 'border-ink/30 text-ink/70 hover:border-ink'
                    }`}
                  >
                    Regretfully Declines
                  </button>
                </div>
              </div>

              {attendance === 'accepts' && (
                <div>
                  <span className="font-sans text-[10px] tracking-widest2 text-ink/60 uppercase">Party Size</span>
                  <div className="mt-2 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      aria-label="Decrease guest count"
                      className="flex h-9 w-9 items-center justify-center border border-ink/30 text-ink hover:border-ink"
                    >
                      &minus;
                    </button>
                    <span className="w-6 text-center font-display text-xl">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(6, g + 1))}
                      aria-label="Increase guest count"
                      className="flex h-9 w-9 items-center justify-center border border-ink/30 text-ink hover:border-ink"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full border border-ink px-12 py-4 font-sans text-xs tracking-widest2 uppercase transition-colors hover:bg-ink hover:text-ivory"
              >
                Send RSVP
              </button>
            </form>
          </Reveal>
        ) : (
          record && (
            <Reveal delay={100}>
              <div className="border border-gold/50 bg-ink px-6 py-8 text-ivory">
                <p className="font-sans text-[10px] tracking-widest2 text-gold uppercase">
                  {record.attendance === 'accepts' ? "You're on the list." : 'Noted, with regret.'}
                </p>
                <p className="mt-3 font-display text-2xl">{record.name}</p>
                {record.attendance === 'accepts' && (
                  <p className="mt-1 font-body text-ivory/70">
                    Party of {record.guests}
                  </p>
                )}
                <button
                  onClick={() => setEditing(true)}
                  className="mt-6 font-sans text-[11px] tracking-widest2 text-gold/80 uppercase underline underline-offset-4 hover:text-gold"
                >
                  Edit RSVP
                </button>
              </div>
            </Reveal>
          )
        )}

        {showExternalLink && (
          <Reveal delay={500}>
            <p className="mt-6 font-sans text-xs text-ink/50">
              Prefer another way?{' '}
              <a href={invitationConfig.rsvpUrl} className="underline underline-offset-4 hover:text-gold" target="_blank" rel="noreferrer">
                RSVP via our official form
              </a>
            </p>
          </Reveal>
        )}
      </div>

      <Confetti fire={fire} />
    </section>
  )
}

import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import { useT } from '../../LanguageContext'

const VOTES_KEY = 'shai18-poll-votes'
const VOTED_KEY = 'shai18-poll-voted'

// Seed counts so the bars feel alive before real guests weigh in.
const BASE_COUNTS = [14, 22, 9, 31]

function loadVotes(optionCount: number): number[] {
  try {
    const raw = window.localStorage.getItem(VOTES_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length === optionCount) return parsed
    }
  } catch {
    // ignore corrupted storage
  }
  return BASE_COUNTS.slice(0, optionCount)
}

export default function Poll() {
  const t = useT()
  const options = t.poll.options
  const [votes, setVotes] = useState<number[]>(() => loadVotes(options.length))
  const [voted, setVoted] = useState<number | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(VOTED_KEY)
    if (stored !== null) setVoted(Number(stored))
  }, [])

  const castVote = (index: number) => {
    setVotes((prev) => {
      const next = [...prev]
      if (voted !== null) next[voted] = Math.max(0, next[voted] - 1)
      next[index] += 1
      window.localStorage.setItem(VOTES_KEY, JSON.stringify(next))
      return next
    })
    setVoted(index)
    window.localStorage.setItem(VOTED_KEY, String(index))
  }

  const total = votes.reduce((sum, v) => sum + v, 0) || 1

  return (
    <section className="relative bg-surface px-6 py-24 text-onsurface sm:py-32">
      <Reveal>
        <SectionLabel>{t.poll.label}</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-center font-display text-3xl tracking-wide sm:text-4xl">
          {t.poll.question}
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 max-w-md space-y-4">
        {options.map((option, i) => {
          const pct = Math.round((votes[i] / total) * 100)
          const isChoice = voted === i
          return (
            <Reveal key={option} delay={150 + i * 80}>
              <button
                onClick={() => castVote(i)}
                aria-pressed={isChoice}
                className={`group relative block w-full overflow-hidden border px-5 py-4 text-left transition-colors duration-300 ${
                  isChoice ? 'border-gold' : 'border-gold/25 hover:border-gold/50'
                }`}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-gold/15 transition-[width] duration-700 ease-out"
                  style={{ width: `${pct}%` }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between">
                  <span className="font-body text-lg text-onsurface">
                    {option}
                    {isChoice && <span className="ml-2 text-gold">&#10003;</span>}
                  </span>
                  <span className="font-sans text-xs tracking-widest2 text-gold">{pct}%</span>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={500}>
        <p className="mt-8 text-center font-sans text-[10px] tracking-widest2 text-onsurface/40 uppercase">
          {total} {t.poll.footer}
        </p>
      </Reveal>
    </section>
  )
}

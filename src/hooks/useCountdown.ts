import { useEffect, useState } from 'react'

export type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function diffToCountdown(target: number): Countdown {
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, done: false }
}

export function useCountdown(isoDate: string): Countdown {
  const target = new Date(isoDate).getTime()
  const [countdown, setCountdown] = useState<Countdown>(() => diffToCountdown(target))

  useEffect(() => {
    let timer = 0

    // setInterval(1000) drifts, so ticks slowly slide off the second boundary
    // and eventually two land inside one second — the seconds tile flips
    // twice, then sits still. Instead, sleep exactly until the next moment the
    // remaining time crosses a whole second and re-aim after every tick.
    const schedule = () => {
      const next = diffToCountdown(target)
      setCountdown(next)
      if (next.done) return
      const remainder = (target - Date.now()) % 1000
      timer = window.setTimeout(schedule, (remainder > 0 ? remainder : 1000) + 20)
    }

    schedule()
    return () => window.clearTimeout(timer)
  }, [target])

  return countdown
}

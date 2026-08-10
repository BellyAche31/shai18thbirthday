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
    const tick = () => setCountdown(diffToCountdown(target))
    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [target])

  return countdown
}

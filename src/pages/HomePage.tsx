import FloatingNav from '../components/FloatingNav'
import ScrollProgress from '../components/ScrollProgress'
import GossipTicker from '../components/GossipTicker'
import SpottedToast from '../components/SpottedToast'
import Hero from '../components/sections/Hero'
import GossipIntro from '../components/sections/GossipIntro'
import BlindItems from '../components/sections/BlindItems'
import Scoop from '../components/sections/Scoop'
import Countdown from '../components/sections/Countdown'
import EighteenRoses from '../components/sections/EighteenRoses'
import EighteenGossips from '../components/sections/EighteenGossips'
import EighteenGifts from '../components/sections/EighteenGifts'
import EighteenBlueBills from '../components/sections/EighteenBlueBills'
import TheNight from '../components/sections/TheNight'
import DressCode from '../components/sections/DressCode'
import Rsvp from '../components/sections/Rsvp'
import FinalSection from '../components/sections/FinalSection'

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />
      <Hero />
      <GossipTicker />
      <GossipIntro />
      <BlindItems />
      <Scoop />
      <Countdown />
      <EighteenRoses />
      <EighteenGossips />
      <EighteenGifts />
      <EighteenBlueBills />
      <TheNight />
      <DressCode />
      <Rsvp />
      <FinalSection />
      <SpottedToast />
    </main>
  )
}

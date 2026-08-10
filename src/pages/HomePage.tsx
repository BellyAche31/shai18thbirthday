import FloatingNav from '../components/FloatingNav'
import ScrollProgress from '../components/ScrollProgress'
import GossipTicker from '../components/GossipTicker'
import SpottedToast from '../components/SpottedToast'
import Hero from '../components/sections/Hero'
import GossipIntro from '../components/sections/GossipIntro'
import BlindItems from '../components/sections/BlindItems'
import Scoop from '../components/sections/Scoop'
import Countdown from '../components/sections/Countdown'
import CoverStory from '../components/sections/CoverStory'
import Gallery from '../components/sections/Gallery'
import Moments18 from '../components/sections/Moments18'
import Poll from '../components/sections/Poll'
import EighteenRoses from '../components/sections/EighteenRoses'
import EighteenGossips from '../components/sections/EighteenGossips'
import EighteenGifts from '../components/sections/EighteenGifts'
import EighteenBlueBills from '../components/sections/EighteenBlueBills'
import GuestList from '../components/sections/GuestList'
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
      <CoverStory />
      <Gallery />
      <Moments18 />
      <Poll />
      <EighteenRoses />
      <EighteenGossips />
      <EighteenGifts />
      <EighteenBlueBills />
      <GuestList />
      <TheNight />
      <DressCode />
      <Rsvp />
      <FinalSection />
      <SpottedToast />
    </main>
  )
}

import FloatingNav from '../components/FloatingNav'
import MusicPlayer from '../components/MusicPlayer'
import Hero from '../components/sections/Hero'
import GossipIntro from '../components/sections/GossipIntro'
import Scoop from '../components/sections/Scoop'
import Countdown from '../components/sections/Countdown'
import CoverStory from '../components/sections/CoverStory'
import Gallery from '../components/sections/Gallery'
import Moments18 from '../components/sections/Moments18'
import GuestList from '../components/sections/GuestList'
import TheNight from '../components/sections/TheNight'
import DressCode from '../components/sections/DressCode'
import Rsvp from '../components/sections/Rsvp'
import FinalSection from '../components/sections/FinalSection'

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <FloatingNav />
      <Hero />
      <GossipIntro />
      <Scoop />
      <Countdown />
      <CoverStory />
      <Gallery />
      <Moments18 />
      <GuestList />
      <TheNight />
      <DressCode />
      <Rsvp />
      <FinalSection />
      <MusicPlayer />
    </main>
  )
}

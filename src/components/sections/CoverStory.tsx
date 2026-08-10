import Reveal from '../Reveal'
import SectionLabel from '../SectionLabel'
import PlaceholderArt from '../PlaceholderArt'
import GoldLine from '../GoldLine'

export default function CoverStory() {
  return (
    <section id="cover-story" className="relative bg-ivory px-6 py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal className="order-2 md:order-1">
          <SectionLabel align="left">The Cover Story</SectionLabel>
          <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            Every chapter deserves a<br /> memorable beginning.
          </h2>
          <div className="mt-6 w-16">
            <GoldLine className="from-ink/0 via-ink/30 to-ink/0" />
          </div>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/75">
            At eighteen, Shai begins a new chapter — surrounded by the people
            who make every moment worth remembering. This is her night, told
            the way the city tells its favorite stories: in whispers, in
            flashbulbs, and in one unforgettable headline.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink/60">
            Consider this the exclusive first look.
          </p>
        </Reveal>

        <Reveal delay={150} className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[3/4] max-w-sm border border-ink/10 shadow-2xl">
            <PlaceholderArt variant="flash" className="h-full w-full" label="Cover story editorial portrait placeholder" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

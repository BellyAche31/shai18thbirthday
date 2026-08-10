// ============================================================================
// CENTRAL INVITATION CONFIGURATION
// Edit everything about the event from this single file.
// ============================================================================

export type ProgramItem = {
  time: string
  title: string
}

export type MomentEntry = {
  number: string
  text: string
}

export type GalleryImage = {
  src: string
  caption: string
  /** Visual placeholder style used until the real photo is dropped in. */
  variant: 'city' | 'texture' | 'silhouette' | 'interior' | 'champagne' | 'flowers' | 'jewelry' | 'architecture' | 'flash' | 'nightlife'
}

export const invitationConfig = {
  name: 'Shai',
  age: 18,
  headline: 'SHAI REIGNS AT 18',
  tagline: "THE NIGHT EVERYONE'S TALKING ABOUT",

  // Shown the instant the wax seal cracks, before the envelope even opens.
  sealBrokenNote: "SPOTTED: Shai's 18th birthday",
  // The note inside the envelope's inner letter card.
  innerLetter: {
    line1: 'Shaina reigns at eighteen',
    line2: 'A new chapter, a timeless reign',
  },

  // ISO date string — drives the live countdown. Change this when the date is set.
  eventDate: '2026-09-26T17:00:00',
  eventDateDisplay: 'SATURDAY, SEPTEMBER 26, 2026',
  eventTimeDisplay: 'Five o’clock in the evening',

  venue: 'DOS CASA DE AMENA',
  address: 'Far East Ave, Bankers Village, Bagumbong, Caloocan City',

  dressCode: 'FORMAL ATTIRE',
  dressCodeNote: "Come dressed like the night belongs to you.",
  // Gold is reserved for the house tonight — everything else in palette is fair game.
  styleAlert: 'Please follow the assigned color palette, and do not wear gold.',
  dressCodePalette: {
    women: [
      { name: 'Midnight Blue', hex: '#1a2744' },
      { name: 'Emerald Green', hex: '#0b6e4f' },
      { name: 'Burgundy', hex: '#5c1a2e' },
    ],
    men: [
      { name: 'Black', hex: '#111111' },
      { name: 'Blue', hex: '#1e3a6d' },
    ],
  },

  // The invitation is non-transferable — one name, one seat.
  allowPlusOnes: false,
  exclusivityNote: 'No plus ones — this invitation is exclusive to you.',

  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dos+Casa+De+Amena%2C+Far+East+Ave%2C+Bankers+Village%2C+Bagumbong%2C+Caloocan+City',
  wazeUrl: 'https://waze.com/ul?q=Dos%20Casa%20De%20Amena%2C%20Far%20East%20Ave%2C%20Bankers%20Village%2C%20Bagumbong%2C%20Caloocan%20City&navigate=yes',
  rsvpUrl: 'https://appt.apptrainings.com/r/caS9k1HFSz8pvaj1',

  // The celebrant's portrait, used as the softly-darkened backdrop behind the
  // sealed envelope and the hero. Swap the path to change both at once.
  portraitPhoto: '/images/photo-01.jpg',

  musicFile: '/audio/background-music.mp3',
  // Background-music level, 0–1. Kept low so it sits under the moment
  // rather than competing with it. Raise toward 0.5 for a fuller sound.
  musicVolume: 0.3,
  // Start the music on the guest's first tap (breaking the wax seal).
  // Browsers block audio that starts before any interaction, so this rides
  // on that opening gesture rather than firing on page load.
  autoplayOnOpen: true,

  galleryImages: [
    { src: '/images/photo-01.jpg', caption: 'THE BIRTHDAY GIRL', variant: 'silhouette' },
    { src: '/images/photo-02.jpg', caption: 'THE NIGHT', variant: 'nightlife' },
    { src: '/images/photo-03.jpg', caption: 'THE LOOK', variant: 'flash' },
    { src: '/images/photo-04.jpg', caption: 'THE MOMENT', variant: 'champagne' },
    { src: '/images/photo-05.jpg', caption: 'THE CROWD', variant: 'nightlife' },
    { src: '/images/photo-06.jpg', caption: 'THE CITY', variant: 'city' },
    { src: '/images/photo-07.jpg', caption: 'THE DETAILS', variant: 'jewelry' },
    { src: '/images/photo-08.jpg', caption: 'THE ROOM', variant: 'interior' },
    { src: '/images/photo-09.jpg', caption: 'THE BOUQUET', variant: 'flowers' },
    { src: '/images/photo-10.jpg', caption: 'THE ARRIVAL', variant: 'architecture' },
    { src: '/images/photo-11.jpg', caption: 'THE TOAST', variant: 'champagne' },
    { src: '/images/photo-12.jpg', caption: 'THE AFTERGLOW', variant: 'texture' },
  ] as GalleryImage[],

  program: [
    { time: '5:00 PM', title: 'ARRIVAL' },
    { time: '5:30 PM', title: 'WELCOME' },
    { time: '6:00 PM', title: 'DINNER' },
    { time: '6:30 PM', title: '18 ROSES' },
    { time: '7:00 PM', title: '18 CANDLES' },
    { time: '7:30 PM', title: 'CELEBRATION' },
  ] as ProgramItem[],

  guestList: [
    'The Aldridge Family',
    'Genevieve Marchetti',
    'The Whitfield Twins',
    'Isabella Cross',
    'The Harrington Party',
    'Nico Delacroix',
    'The St. James Circle',
    'Amara Voss',
  ],

  wishes: [
    'Dance until the heels come off.',
    'Say something you actually mean.',
    'Take the photo, not just the mental note.',
    'Wear the outfit you almost didn’t buy.',
    'Make a toast nobody asked for.',
    'Forgive the small stuff before midnight.',
    'Let someone else pick the song.',
    'Stay for the last course.',
    'Tell one secret. Keep the rest.',
    'Thank the people who showed up early.',
    'Ask someone to dance first.',
    'Let the night run late.',
    'Wear the good jewelry, not just save it.',
    'Laugh loud enough to turn heads.',
    'Take a moment alone to notice it all.',
    'Give a compliment you mean completely.',
    'Leave room for one more surprise.',
    'Remember this is only the beginning.',
  ] as string[],

  // Scrolling ticker headlines — the ambient gossip-column marquee.
  tickerHeadlines: [
    'SHAI TURNS 18 THIS SEPTEMBER',
    'THE GUEST LIST IS ALREADY A RUMOR',
    'FORMAL ATTIRE. NO GOLD.',
    'DOS CASA DE AMENA, TRANSFORMED FOR ONE NIGHT ONLY',
    'SOURCES CONFIRM: THIS IS THE PARTY OF THE SEASON',
    'XOXO',
  ] as string[],

  // Rotating ambient "breaking" notifications that surface while guests browse.
  spottedHeadlines: [
    'SPOTTED: an invitation nobody wanted to miss.',
    'BREAKING: the dress code is non-negotiable.',
    "SOURCES SAY: Shai's playlist is under lock and key.",
    'RUMOR HAS IT: the cake has a secret ingredient.',
    'SPOTTED: a guest list getting harder to get on by the hour.',
    'BREAKING: this invitation self-destructs at midnight. (Kidding. Mostly.)',
    'STYLE MEMO: gold is reserved for the house tonight.',
  ] as string[],

  // Click-to-reveal gossip cards.
  blindItems: [
    {
      teaser: 'Which birthday girl is turning a very significant age this year?',
      reveal: "It's Shai. It was always going to be Shai.",
    },
    {
      teaser: 'What venue is getting a total transformation for one night only?',
      reveal: 'Dos Casa De Amena — dress code enforced.',
    },
    {
      teaser: 'Who requested absolutely no phones during the cake?',
      reveal: 'The birthday girl herself. Live it, don’t film it.',
    },
    {
      teaser: 'What time does this exclusive affair really get started?',
      reveal: 'Five o’clock sharp. Fashionably late is still just late.',
    },
    {
      teaser: 'Which color is strictly off the guest list tonight?',
      reveal: 'Gold. The house is wearing that — you are not.',
    },
  ] as { teaser: string; reveal: string }[],

  // Interactive live poll.
  poll: {
    question: 'What steals the show tonight?',
    options: ['The Dress', 'The Playlist', 'The Cake', 'The Surprise'] as string[],
  },

  // The Eighteen Roses — eighteen gentlemen presenting a rose during the program.
  roses: [
    'Ralph Delara',
    'Lemuel Samillano',
    'Lance Nollido',
    'James Abiegos',
    'Jacob Cochoty',
    'Junnel Pis-o',
    'Yruz Cortez',
    'Rajan Abdon',
    'Jeoster Gasmen',
    'Vinz Cortez',
    'Joey Dee',
    'Justin Gasmen',
    'Rodolfo Abdon',
    'Edward Daproza',
    'Larry Aujero',
    'Jhulienne Gasmen',
    'Jhune Carlo Gasmen',
    'Jhun Gasmen',
  ] as string[],
  rosesNote: 'Accompany me as we share a graceful dance together.',

  // The Eighteen Gossips — eighteen ladies sharing a message, memory, or piece of advice.
  gossipsAndShots: {
    prompt: 'Share a heartwarming message, favorite memory, or advice for me to cherish❤️',
    names: [
      'Arrianne Abdon',
      'Shyleen Aujero',
      'Elaine Gasmen',
      'Stephanie Gasmen',
      'Eloisa Gasmen',
      'Briyanna Mercado',
      'Izy Arguilles',
      'Kimberly Francisco',
      'Althea Cuestas',
      'Camille Castillo',
      'Althea Evora',
      'Melody Abdon',
      'Angela Bascuguin',
      'Bea Pullido',
      'Pauleen Baldelomar',
      'Naomi Garcia',
      'Santhena Pineda',
      'Eldrich Daproza',
    ] as string[],
  },

  // The Eighteen Gifts — a keepsake tradition.
  eighteenGiftsNote: 'Surprise me with anything thoughtful from your heart to make this milestone unforgettable.',
  eighteenGifts: [
    'Anabella Aujero',
    'Melojane Abdon',
    'Ma. Elena Gasmen',
    'Jennifer Gasmen',
    'Mark Dumlao',
    'Raquel Abasolo',
    'Cynthia Tuburan',
    'Melody Joy Hope Abdon',
    'Brigitte Romero',
    'Eva Inojales',
    'Arlene Trinidad',
    'Lilet Rivera',
    'Joan Abdon',
    'Cherry Ong',
    'Doc Christine Baligod Corpuz',
    'Michelle Ordiz',
    'Mayet Elico',
    'Marlyn Cambe',
  ] as string[],

  // The Eighteen Blue Bills — a monetary-blessing tradition.
  eighteenBlueBillsNote: 'Share a little blessing with a heartfelt wish for my journey ahead.',
  eighteenBlueBills: [
    'Tito Jaynar Gasmen',
    'Tito Marlon Gasmen',
    'Amelia Dumlao',
    'Jason Ordiz',
    'Alvin Cortez',
    'Tito Larry Aujero',
    'Dhenz Colipano',
    'Doc Robert Corpuz',
    'Alexis Taguinod',
    'Ramie Depiedra',
    'Joan Orellano',
    'Doc Leonisa Abasolo',
    'Manuel Cambe',
    'Jharo Abdon',
    'Antonio Marquez III',
    'Debbie Ong',
    'Ferdie Velasquez',
    'Violy Ipanag',
  ] as string[],

  // A gentle note on gifts, shown near the RSVP.
  giftNote: "Your presence is the present. If you'd like to give something more, gifts and cash gifts can be handed directly to Mommy or Kuya.",

  // A small, honest, self-promoting easter egg from whoever built this thing.
  creatorCredit: "Gawa ni JC Gasmen tong invitation hehe #broken aray koooo.. cool pa rin ba yan? haha",

  // The gossip-column dispatch that opens the invitation — an instant photo
  // pinned to the page, written in the voice of the party's gossip narrator.
  spottedCard: {
    eyebrow: 'Spotted: Shaina Jhianne',
    lines: [
      'Hey, Upper East Siders. Gossip Girl here…',
      'Stepping into the spotlight and leaving childhood behind. On September 26, 2026, our favorite girl will officially be turning 18—and you’re invited to witness the celebration.',
      'So put on your finest attire, bring your best secrets, and get ready for an evening filled with glamour, laughter, and memories worth gossiping about.',
      'After all, you wouldn’t want to miss the party everyone will be talking about. 💋',
    ] as string[],
    signoff: 'XOXO,\nGossip Girl',
  },
} as const

export default invitationConfig

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
  headline: "SHAI'S 18TH",
  tagline: "THE NIGHT EVERYONE'S TALKING ABOUT",

  // ISO date string — drives the live countdown. Change this when the date is set.
  eventDate: '2026-11-14T19:00:00',
  eventDateDisplay: 'SATURDAY, NOVEMBER 14, 2026',
  eventTimeDisplay: '7:00 PM',

  venue: 'THE ARCHIVE BALLROOM',
  address: '412 Madison Avenue, New York, NY',

  dressCode: 'FORMAL ATTIRE',
  dressCodeNote: "Come dressed like the night belongs to you.",
  // Black and gold are the house palette for the evening — reserved, not shared.
  styleAlert: 'No black. No gold. Those shades are reserved for the house tonight.',

  // The invitation is non-transferable — one name, one seat.
  allowPlusOnes: false,
  exclusivityNote: 'No plus ones — this invitation is exclusive to you.',

  mapsUrl: '#location',
  rsvpUrl: '#rsvp',

  musicFile: '/audio/background-music.mp3',
  // Background-music level, 0–1. Kept low so it sits under the moment
  // rather than competing with it. Raise toward 0.5 for a fuller sound.
  musicVolume: 0.3,

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
    { time: '6:00 PM', title: 'ARRIVAL' },
    { time: '6:30 PM', title: 'WELCOME' },
    { time: '7:00 PM', title: 'DINNER' },
    { time: '7:30 PM', title: '18 ROSES' },
    { time: '8:00 PM', title: '18 CANDLES' },
    { time: '8:30 PM', title: 'CELEBRATION' },
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
    'SHAI TURNS 18 THIS NOVEMBER',
    'THE GUEST LIST IS ALREADY A RUMOR',
    'FORMAL ATTIRE. NO BLACK. NO GOLD.',
    'THE ARCHIVE BALLROOM, TRANSFORMED FOR ONE NIGHT ONLY',
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
    'STYLE MEMO: black and gold are reserved for the house tonight.',
  ] as string[],

  // Click-to-reveal gossip cards.
  blindItems: [
    {
      teaser: 'Which birthday girl is turning a very significant age this year?',
      reveal: "It's Shai. It was always going to be Shai.",
    },
    {
      teaser: 'What NYC ballroom is getting a total transformation for one night only?',
      reveal: 'The Archive Ballroom — gold everything, dress code enforced.',
    },
    {
      teaser: 'Who requested absolutely no phones during the cake?',
      reveal: 'The birthday girl herself. Live it, don’t film it.',
    },
    {
      teaser: 'What time does this exclusive affair really get started?',
      reveal: '7:00 PM sharp. Fashionably late is still just late.',
    },
    {
      teaser: 'Which two colors are strictly off the guest list tonight?',
      reveal: 'Black and gold. The house is wearing those — you are not.',
    },
  ] as { teaser: string; reveal: string }[],

  // Interactive live poll.
  poll: {
    question: 'What steals the show tonight?',
    options: ['The Dress', 'The Playlist', 'The Cake', 'The Surprise'] as string[],
  },

  // The 18 gentlemen presenting a rose during the program.
  roses: [
    'Yruz',
    'VA',
    'Lemuel',
    'Lance',
    'James',
    'Jacob',
    'Ralph',
    'Kuya JC',
    'JK',
    'Daddy',
    'JL',
    'Justin',
    'Rajan',
    'Kuya Roji',
    'Tito Edward',
    'Tito Larry',
    'Kuya Joey',
    'Kuya Buboy',
  ] as string[],

  // The 18 ladies sharing a message, memory, or piece of advice.
  gossipsAndShots: {
    prompt: 'Share a heartwarming message, favorite memory, or advice for me!',
    names: [
      'Eldrich',
      'Ate Arianne',
      'Ate Dimple',
      'Kim',
      'Althea',
      'Santhena',
      'Bea',
      'Julia',
      'Briyanna',
      'Izy',
      'Camille',
      'Ate Althea',
      'Ate Faye',
      'Ate Elaine',
      'Ate Angela',
      'Ate Lil',
      'Ate Kring',
      'Pauleen',
    ] as string[],
  },

  // A gentle note on gifts, shown near the RSVP.
  giftNote: "Your presence is the present. If you'd like to give something more, gifts and cash gifts can be handed directly to Mommy or Kuya.",
} as const

export default invitationConfig

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

  dressCode: 'BLACK TIE / FORMAL',
  dressCodeNote: "Come dressed like the night belongs to you.",

  mapsUrl: '#location',
  rsvpUrl: '#rsvp',

  musicFile: '/audio/background-music.mp3',

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
} as const

export default invitationConfig

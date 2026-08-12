// ============================================================================
// CENTRAL INVITATION CONFIGURATION
// Edit everything about the event from this single file.
// ============================================================================

export type ProgramItem = {
  time: string
  title: string
}

/** Style of generated art shown in place of a photo that isn't there. */
export type ArtVariant =
  | 'city'
  | 'texture'
  | 'silhouette'
  | 'interior'
  | 'champagne'
  | 'flowers'
  | 'jewelry'
  | 'architecture'
  | 'flash'
  | 'nightlife'

export const invitationConfig = {
  name: 'Shai',


  // ISO date string — drives the live countdown. Change this when the date is set.
  eventDate: '2026-09-26T17:00:00',

  venue: 'DOS CASA DE AMENA',
  address: 'Far East Ave, Bankers Village, Bagumbong, Caloocan City',

  dressCodePalette: {
    women: [
      { name: 'Midnight Blue', hex: '#1a2744', image: '/images/dresscode-women-midnight-v2.png' },
      { name: 'Emerald Green', hex: '#0b6e4f', image: '/images/dresscode-women-emerald-v2.png' },
      { name: 'Burgundy', hex: '#5c1a2e', image: '/images/dresscode-women-burgundy-v2.png' },
    ],
    // Black is off the guest list along with gold, so blue is the men's palette.
    men: [
      { name: 'Blue', hex: '#1e3a6d' },
    ],
    // Supplied with a real alpha channel, so no background keying and none of
    // the halo the earlier flood-filled sheets carried.
    menReferenceImage: '/images/dresscode-men-navy-v2.png',
  },

  // The invitation is non-transferable — one name, one seat.
  allowPlusOnes: false,

  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dos+Casa+De+Amena%2C+Far+East+Ave%2C+Bankers+Village%2C+Bagumbong%2C+Caloocan+City',
  wazeUrl: 'https://waze.com/ul?q=Dos%20Casa%20De%20Amena%2C%20Far%20East%20Ave%2C%20Bankers%20Village%2C%20Bagumbong%2C%20Caloocan%20City&navigate=yes',
  rsvpUrl: 'https://appt.apptrainings.com/r/caS9k1HFSz8pvaj1',

  // The celebrant's portrait, used as the softly-darkened backdrop behind the
  // sealed envelope and the hero. Swap the path to change both at once.
  portraitPhoto: '/images/photo-01.jpg',
  // A second look, so the same frame isn't repeated down the whole page.
  // Shot in a hotel lobby under chandeliers, which is more or less the exact
  // palette the rest of the invitation is built from. Its aspect is already
  // ~4:5, so the section crop shows essentially the whole frame.
  // `focus` is the object-position for its crops.
  portraitPhotoAlt: '/images/photo-gold.jpg',
  portraitPhotoAltFocus: '50% 28%',
  // The frame on the opening dispatch card. Its own entry because that card
  // is a square crop and wants a shot framed for it.
  spottedPhoto: '/images/photo-spotted.jpg',
  spottedPhotoFocus: '40% 24%',

  musicFile: '/audio/background-music.mp3',
  // Background-music level, 0–1. Kept low so it sits under the moment
  // rather than competing with it. Raise toward 0.5 for a fuller sound.
  musicVolume: 0.3,
  // Start the music on the guest's first tap (breaking the wax seal).
  // Browsers block audio that starts before any interaction, so this rides
  // on that opening gesture rather than firing on page load.
  autoplayOnOpen: true,

  // Every tradition the invitation has a section for gets its own slot here,
  // in the order it happens on the night. Titles are index-matched to
  // `programTitles` in i18n.ts — add a row here, add a title there.
  program: [
    { time: '5:00 PM', title: 'ARRIVAL' },
    { time: '5:30 PM', title: 'WELCOME' },
    { time: '6:00 PM', title: 'DINNER' },
    { time: '6:45 PM', title: '18 ROSES' },
    { time: '7:15 PM', title: '18 GOSSIPS' },
    { time: '7:45 PM', title: '18 GIFTS' },
    { time: '8:15 PM', title: '18 BLUE BILLS' },
    { time: '8:45 PM', title: 'CELEBRATION' },
  ] as ProgramItem[],

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
    'Joey Delacruz',
    'Justin Gasmen',
    'Rodolfo Abdon',
    'Edward Daproza',
    'Larry Aujero',
    'Jhulienne Gasmen',
    'Jhune Carlo Gasmen',
    'Jhun Gasmen',
  ] as string[],

  // The Eighteen Gossips — eighteen ladies sharing a message, memory, or piece of advice.
  gossipsAndShots: {
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
      'Melody Delacruz',
      'Angela Bascuguin',
      'Bea Pullido',
      'Pauleen Baldelomar',
      'Naomi Garcia',
      'Santhena Pineda',
      'Eldrich Daproza',
    ] as string[],
  },

  // The Eighteen Gifts — a keepsake tradition.
  eighteenGifts: [
    'Anabella Aujero',
    'Melojane Abdon',
    'Ma. Elena Gasmen',
    'Jennifer Gasmen',
    'Mark Dumlao',
    'Raquel Abasolo',
    'Cynthia Tuburan',
    'Melody Delacruz',
    'Brigitte Romero',
    'Eva Inojales',
    'Arlene Trinidad',
    'Lilet Rivera',
    'Joan Abdon',
    'Cherry Ong',
    'Dr. Christine Corpuz',
    'Michelle Ordiz',
    'Mayet Elico',
    'Marlyn Cambe',
  ] as string[],

  // The Eighteen Blue Bills — a monetary-blessing tradition.
  eighteenBlueBills: [
    'Jaynar Gasmen',
    'Marlon Gasmen',
    'Amelia Dumlao',
    'Jason Ordiz',
    'Alvin Cortez',
    'Larry Aujero',
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

  // ---- PHASE1XB ----------------------------------------------------------
  // Names for the invented "just RSVP'd" notices in the corner toast. These
  // are made up, not the guest list, and they are shuffled per page load so
  // the same name never leads twice. To remove the feature: delete this
  // array, `rsvpToast` in i18n.ts, and the PHASE1XB block in SpottedToast.tsx.
  rsvpTickerNames: [
    'Althea', 'Bianca', 'Camille', 'Danica', 'Erika',
    'Faye', 'Gabrielle', 'Hazel', 'Isabel', 'Jasmine',
    'Kyla', 'Liana', 'Mikaela', 'Nadine', 'Olivia',
    'Patricia', 'Queenie', 'Rhea', 'Sofia', 'Trisha',
    'Ursula', 'Verna', 'Wilma', 'Ximena', 'Yvonne',
    'Zoe', 'Aaliyah', 'Beatrice', 'Cielo', 'Denise',
    'Elaine', 'Francine', 'Gwyneth', 'Heart', 'Ivy',
    'Jewel', 'Katrina', 'Lorraine', 'Maureen', 'Nicolette',
    'Odette', 'Precious', 'Rowena', 'Shaira', 'Tricia',
    'Venus', 'Winona', 'Yasmin', 'Angelo', 'Bryan',
    'Carlo', 'Dominic', 'Enrico', 'Franco', 'Gabriel',
    'Hector', 'Ivan', 'Joaquin', 'Kervin', 'Lorenzo',
    'Marco', 'Nathaniel', 'Oliver', 'Paolo', 'Quentin',
    'Rafael', 'Sebastian', 'Tobias', 'Ulysses', 'Vincent',
    'Warren', 'Xander', 'Yuri', 'Zachary', 'Adrian',
    'Brandon', 'Cedric', 'Darius', 'Emmanuel', 'Fidel',
    'Gerard', 'Hansel', 'Ignacio', 'Jerome', 'Kenneth',
    'Lester', 'Miguel', 'Norman', 'Orlando', 'Percival',
    'Quirino', 'Ramon', 'Stefano', 'Teodoro', 'Uriel',
    'Valentin', 'Wendell', 'Yohan', 'Zaldy', 'Arabella',
  ] as string[],

  // A small, honest, self-promoting easter egg from whoever built this thing.
  creatorCredit: '— made by JC Gasmen',

} as const

export default invitationConfig

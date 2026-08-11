// ============================================================================
// COPY, IN BOTH LANGUAGES
//
// Everything a guest can read lives here. config.ts keeps the things that
// aren't language-dependent: names, the ISO date, links, photos, palette
// hexes. If you add a string to `en`, TypeScript will require it in `tl`.
// ============================================================================

export type Lang = 'en' | 'tl'

const en = {
  langName: 'English',

  headline: 'SHAI REIGNS AT 18',
  tagline: "THE NIGHT EVERYONE'S TALKING ABOUT",

  // --- Cover page / envelope ---------------------------------------------
  cover: {
    tapSeal: 'Tap the seal to open your invitation',
    // Split in two: an all-caps word set in a cursive face reads as
    // squiggles, so the label stays in the letterspaced sans.
    sealBrokenLabel: 'Spotted',
    sealBrokenNote: "Shai's 18th birthday",
    innerLine1: 'Shaina reigns at eighteen',
    innerLine2: 'A new chapter, a timeless reign',
    openInvitation: 'Open Invitation',
  },

  // --- The opening dispatch ----------------------------------------------
  intro: {
    title: "Shai's 18th Birthday",
    skip: 'Skip',
  },
  spottedCard: {
    eyebrow: 'Spotted: Shaina Jhianne',
    lines: [
      'Hey, Upper East Siders. Gossip Girl here…',
      'Stepping into the spotlight and leaving childhood behind. On September 26, 2026, our favorite girl will officially be turning 18—and you’re invited to witness the celebration.',
      'So put on your finest attire, bring your best secrets, and get ready for an evening filled with glamour, laughter, and memories worth gossiping about.',
      'After all, you wouldn’t want to miss the party everyone will be talking about. 💋',
    ],
  },

  // --- Hero ---------------------------------------------------------------
  hero: {
    title: 'SHAINA REIGNS AT 18',
    subtitle: 'A new chapter, a timeless reign',
    place: 'New York · After Dark',
    scroll: 'Scroll',
  },

  // --- Navigation ---------------------------------------------------------
  nav: {
    home: 'HOME',
    scoop: 'THE SCOOP',
    theNight: 'THE NIGHT',
    rsvp: 'RSVP',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },

  // --- Ambient copy -------------------------------------------------------
  tickerHeadlines: [
    'SHAI TURNS 18 THIS SEPTEMBER',
    'THE GUEST LIST IS ALREADY A RUMOR',
    'FORMAL ATTIRE. NO BLACK. NO GOLD.',
    'DOS CASA DE AMENA, TRANSFORMED FOR ONE NIGHT ONLY',
    'SOURCES CONFIRM: THIS IS THE PARTY OF THE SEASON',
    'XOXO',
  ],
  spottedHeadlines: [
    'SPOTTED: an invitation nobody wanted to miss.',
    'BREAKING: the dress code is non-negotiable.',
    "SOURCES SAY: Shai's playlist is under lock and key.",
    'RUMOR HAS IT: the cake has a secret ingredient.',
    'SPOTTED: a guest list getting harder to get on by the hour.',
    'BREAKING: this invitation self-destructs at midnight. (Kidding. Mostly.)',
    'STYLE MEMO: black and gold are reserved for the house tonight.',
  ],
  dismissNotification: 'Dismiss notification',

  // --- Gossip intro -------------------------------------------------------
  gossipIntro: {
    label: 'Breaking',
    quote: '"Spotted: Shai, stepping into her eighteenth chapter."',
    line1:
      "One birthday. One unforgettable night. And an invitation you definitely don't want to miss.",
    line2: 'Word is, the guest list is already the talk of the town.',
    notice: 'Consider this your formal notice. XOXO.',
  },

  // --- Blind items --------------------------------------------------------
  blindItems: {
    label: 'Blind Items',
    heading: "WHAT WE'VE HEARD",
    subtitle: 'Every good scandal starts with a question. Tap a card for the answer.',
    itemPrefix: 'Blind Item',
    tapToReveal: 'Tap to reveal',
    confirmed: 'Confirmed',
    tapToHide: 'Tap to hide',
    items: [
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
        teaser: 'Which colors are strictly off the guest list tonight?',
        reveal: 'Black and gold. The house is wearing those — you are not.',
      },
    ],
  },

  // --- The scoop ----------------------------------------------------------
  scoop: {
    label: 'The Scoop',
    dateLabel: 'The Evening Date',
    timeLabel: 'The Hour',
    venueLabel: 'The Venue',
    dateDisplay: 'SATURDAY, SEPTEMBER 26, 2026',
    timeDisplay: 'Five o’clock in the evening',
    googleMaps: 'Google Maps',
    waze: 'Waze',
  },

  // --- Countdown ----------------------------------------------------------
  countdown: {
    label: 'Counting Down',
    arrived: 'THE NIGHT HAS ARRIVED.',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
  },

  // --- 18 Wishes ----------------------------------------------------------
  wishesSection: {
    label: '18 Wishes',
    subtitle: '',
    reveal: 'Reveal',
  },
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
  ],

  // --- Poll ---------------------------------------------------------------
  poll: {
    label: 'Cast Your Vote',
    question: '',
    options: ['The Dress', 'The Playlist', 'The Cake', 'The Surprise'],
    footer: 'votes and counting · tap to change your vote',
  },

  // --- The eighteens ------------------------------------------------------
  insidersNote: "The insider's note",
  roses: {
    label: 'The Eighteen Roses',
    heading: 'EIGHTEEN GENTLEMEN, EIGHTEEN DANCES',
    note: 'Accompany me as we share a graceful dance together.',
  },
  gossips: {
    label: 'The Eighteen Gossips',
    heading: 'THE INSIDE SOURCES',
    note: 'Share a heartwarming message, favorite memory, or advice for me to cherish❤️',
  },
  gifts: {
    label: 'The Eighteen Gifts',
    heading: 'A KEEPSAKE FOR EIGHTEEN',
    note: 'Surprise me with anything thoughtful from your heart to make this milestone unforgettable.',
  },
  blueBills: {
    label: 'The Eighteen Blue Bills',
    heading: 'A BLESSING FOR THE JOURNEY AHEAD',
    note: 'Share a little blessing with a heartfelt wish for my journey ahead.',
  },


  // --- Programme ----------------------------------------------------------
  theNight: {
    label: 'The Night',
    heading: '',
  },
  downloads: {
    program: 'Download the Programme',
    programHint: 'A printable copy with the full running order and everyone’s role.',
    preparing: 'Preparing…',
    failed: 'Could not build the file — please try again.',
    calendar: 'Add to Calendar',
  },
  // Index-matched to invitationConfig.program.
  programTitles: [
    'ARRIVAL',
    'WELCOME',
    'DINNER',
    '18 ROSES',
    '18 GOSSIPS',
    '18 GIFTS',
    '18 BLUE BILLS',
    'CELEBRATION',
  ],

  // --- Dress code ---------------------------------------------------------
  dressCode: {
    label: 'The Look',
    heading: 'FORMAL ATTIRE',
    note: 'Come dressed like the night belongs to you.',
    styleAlert: 'Please follow the assigned color palette. Do not wear black or gold.',
    women: 'Women',
    men: 'Men',
    insidersNote: "The Insider's Note",
    // Parallels invitationConfig.dressCodePalette's order exactly.
    womenColors: ['Midnight Blue', 'Emerald Green', 'Burgundy'],
    menColors: ['Blue'],
  },

  // --- RSVP ---------------------------------------------------------------
  rsvp: {
    label: "You're Invited",
    heading: 'RSVP',
    subtitle: 'Because no unforgettable night is complete without the right people.',
    exclusivity: 'No plus ones — this invitation is exclusive to you.',
    giftNote:
      "Your presence is the present. If you'd like to give something more, gifts and cash gifts can be handed directly to Mommy or Kuya.",
    button: 'RSVP Now',
    helper: 'Opens our RSVP form in a new tab — your response goes straight to us.',
  },

  // --- Closing ------------------------------------------------------------
  final: {
    seeYouThere: 'SEE YOU THERE.',
    name: 'SHAI',
  },

  music: {
    play: 'Play music',
    pause: 'Pause music',
    comingSoon: 'Music coming soon',
  },
}

/** Every key in `en`, required. Keeps the two languages from drifting apart. */
export type Copy = typeof en

const tl: Copy = {
  langName: 'Tagalog',

  headline: 'PAGHAHARI NI SHAI SA 18',
  tagline: 'ANG GABING PAG-UUSAPAN NG LAHAT',

  cover: {
    tapSeal: 'Pindutin ang selyo para buksan ang paanyaya',
    sealBrokenLabel: 'Spotted',
    sealBrokenNote: 'Ika-18 kaarawan ni Shai',
    innerLine1: 'Naghahari si Shaina sa labingwalo',
    innerLine2: 'Bagong yugto, walang kupas na paghahari',
    openInvitation: 'Buksan ang Paanyaya',
  },

  intro: {
    title: 'Ika-18 Kaarawan ni Shai',
    skip: 'Laktawan',
  },
  spottedCard: {
    eyebrow: 'Spotted: Shaina Jhianne',
    lines: [
      'Uy, mga taga-Upper East Side. Gossip Girl ito…',
      'Papasok na siya sa spotlight at iiwan na ang pagkabata. Sa Setyembre 26, 2026, opisyal nang magiging 18 ang paborito nating dalaga—at imbitado kang saksihan ang selebrasyon.',
      'Kaya isuot mo ang pinakamaganda mong damit, dalhin ang pinakamasarap mong tsismis, at maghanda para sa gabing puno ng ganda, halakhak, at mga alaalang sulit tsismisan.',
      'Sa huli, ayaw mo namang mapalampas ang partido na pag-uusapan ng lahat. 💋',
    ],
  },

  hero: {
    title: 'NAGHAHARI SI SHAINA SA 18',
    subtitle: 'Bagong yugto, walang kupas na paghahari',
    place: 'New York · Pagsapit ng Dilim',
    scroll: 'Mag-scroll',
  },

  nav: {
    home: 'SIMULA',
    scoop: 'ANG DETALYE',
    theNight: 'ANG GABI',
    rsvp: 'RSVP',
    openMenu: 'Buksan ang menu',
    closeMenu: 'Isara ang menu',
    language: 'Wika',
    theme: 'Tema',
    dark: 'Madilim',
    light: 'Maliwanag',
    switchToLight: 'Lumipat sa maliwanag na tema',
    switchToDark: 'Lumipat sa madilim na tema',
  },

  tickerHeadlines: [
    'MAG-18 NA SI SHAI NGAYONG SETYEMBRE',
    'TSISMIS NA ANG GUEST LIST',
    'PORMAL NA KASUOTAN. WALANG ITIM. WALANG GINTO.',
    'DOS CASA DE AMENA, IBA ANG ANYO SA IISANG GABI LAMANG',
    'KUMPIRMADO: ITO ANG PARTIDO NG PANAHON',
    'XOXO',
  ],
  spottedHeadlines: [
    'SPOTTED: paanyayang ayaw palampasin ninuman.',
    'BREAKING: hindi mapag-uusapan ang dress code.',
    'BALITA: nakakandado ang playlist ni Shai.',
    'TSISMIS: may lihim na sangkap ang cake.',
    'SPOTTED: lalong humihirap ang pagpasok sa guest list.',
    'BREAKING: mawawala ang paanyayang ito sa hatinggabi. (Biro lang. Medyo.)',
    'PAALALA SA ESTILO: ang itim at ginto ay para sa okasyon, hindi sa mga bisita.',
  ],
  dismissNotification: 'Isara ang abiso',

  gossipIntro: {
    label: 'Balitang Mainit',
    quote: '"Spotted: Si Shai, papasok na sa kaniyang ikalabingwalong yugto."',
    line1:
      'Isang kaarawan. Isang gabing di malilimutan. At isang paanyayang talagang ayaw mong palampasin.',
    line2: 'Ang balita, pinag-uusapan na ng bayan ang guest list.',
    notice: 'Ituring mo itong pormal na abiso. XOXO.',
  },

  blindItems: {
    label: 'Mga Palaisipan',
    heading: 'ANG AMING NARINIG',
    subtitle: 'Bawat magandang tsismis ay nagsisimula sa tanong. Pindutin ang card para sa sagot.',
    itemPrefix: 'Palaisipan',
    tapToReveal: 'Pindutin para makita',
    confirmed: 'Kumpirmado',
    tapToHide: 'Pindutin para itago',
    items: [
      {
        teaser: 'Sinong may kaarawan ang aabot sa napakahalagang edad ngayong taon?',
        reveal: 'Si Shai. Siya talaga ang laging sagot.',
      },
      {
        teaser: 'Anong lugar ang tuluyang magbabago ng anyo sa iisang gabi lamang?',
        reveal: 'Dos Casa De Amena — mahigpit ang dress code.',
      },
      {
        teaser: 'Sino ang humiling na walang cellphone habang cake?',
        reveal: 'Ang may kaarawan mismo. Damhin mo, huwag mo lang kunan.',
      },
      {
        teaser: 'Anong oras ba talaga magsisimula ang eksklusibong gabing ito?',
        reveal: 'Alas-singko, hindi lalampas. Ang late ay late pa rin kahit maganda ang damit.',
      },
      {
        teaser: 'Anong mga kulay ang mahigpit na ipinagbabawal ngayong gabi?',
        reveal: 'Itim at ginto. Iyan ang suot ng okasyon — hindi mo iyan puwedeng agawin.',
      },
    ],
  },

  scoop: {
    label: 'Ang Detalye',
    dateLabel: 'Ang Petsa ng Gabi',
    timeLabel: 'Ang Oras',
    venueLabel: 'Ang Lugar',
    dateDisplay: 'SABADO, SETYEMBRE 26, 2026',
    timeDisplay: 'Alas-singko ng hapon',
    googleMaps: 'Google Maps',
    waze: 'Waze',
  },

  countdown: {
    label: 'Pabilang na',
    arrived: 'DUMATING NA ANG GABI.',
    days: 'Araw',
    hours: 'Oras',
    minutes: 'Minuto',
    seconds: 'Segundo',
  },

  wishesSection: {
    label: '18 Hiling',
    subtitle: '',
    reveal: 'Buksan',
  },
  wishes: [
    'Sumayaw hanggang matanggal ang takong.',
    'Magsabi ng isang bagay na totoong nararamdaman mo.',
    'Kunan mo ng litrato, huwag mo lang tandaan.',
    'Isuot mo ang damit na muntik mo nang hindi bilhin.',
    'Mag-toast kahit walang humihingi.',
    'Patawarin ang maliliit na bagay bago maghatinggabi.',
    'Hayaan mong iba naman ang pumili ng kanta.',
    'Manatili hanggang huling putahe.',
    'Magsabi ng isang sikreto. Itago ang iba.',
    'Pasalamatan ang mga maagang dumating.',
    'Ikaw ang maunang mag-aya ng sayaw.',
    'Hayaan mong gumabi nang husto.',
    'Isuot ang magandang alahas, huwag lang itago.',
    'Tumawa nang malakas hanggang lumingon sila.',
    'Maglaan ng sandali mag-isa para pagmasdan ang lahat.',
    'Magbigay ng papuring buong-buo mong ibig sabihin.',
    'Mag-iwan ng puwang para sa isa pang sorpresa.',
    'Tandaan mong ito pa lang ang simula.',
  ],

  poll: {
    label: 'Iboto Mo',
    question: '',
    options: ['Ang Damit', 'Ang Playlist', 'Ang Cake', 'Ang Sorpresa'],
    footer: 'boto at patuloy pa · pindutin para palitan ang boto mo',
  },

  insidersNote: 'Paalala ng insider',
  roses: {
    label: 'Ang Labingwalong Rosas',
    heading: 'LABINGWALONG GINOO, LABINGWALONG SAYAW',
    note: 'Samahan mo ako sa isang marangal na sayaw.',
  },
  gossips: {
    label: 'Ang Labingwalong Tsismis',
    heading: 'ANG MGA TAGALOOB',
    note: 'Magbahagi ng mensaheng magpapainit ng puso, paboritong alaala, o payong aking iingatan❤️',
  },
  gifts: {
    label: 'Ang Labingwalong Regalo',
    heading: 'ISANG ALAALA PARA SA LABINGWALO',
    note: 'Sorpresahin mo ako ng kahit anong mula sa puso mo para maging di-malilimutan ang yugtong ito.',
  },
  blueBills: {
    label: 'Ang Labingwalong Blue Bills',
    heading: 'ISANG BASBAS PARA SA PAGLALAKBAY',
    note: 'Magbahagi ng kaunting biyaya kasama ang taos-pusong hiling para sa aking paglalakbay.',
  },


  theNight: {
    label: 'Ang Gabi',
    heading: '',
  },
  downloads: {
    program: 'I-download ang Programa',
    programHint: 'Kopyang puwedeng i-print, kasama ang buong takbo ng gabi at ang papel ng bawat isa.',
    preparing: 'Inihahanda…',
    failed: 'Hindi nagawa ang file — pakisubukan muli.',
    calendar: 'Idagdag sa Kalendaryo',
  },
  programTitles: [
    'PAGDATING',
    'PAGSALUBONG',
    'HAPUNAN',
    '18 ROSAS',
    '18 TSISMIS',
    '18 REGALO',
    '18 BLUE BILLS',
    'SELEBRASYON',
  ],

  dressCode: {
    label: 'Ang Kasuotan',
    heading: 'PORMAL NA KASUOTAN',
    note: 'Magbihis na parang sa iyo ang gabing ito.',
    styleAlert: 'Pakisunod ang itinakdang color palette. Huwag magsuot ng itim o ginto.',
    women: 'Kababaihan',
    men: 'Kalalakihan',
    insidersNote: 'Paalala ng Insider',
    womenColors: ['Asul na Hatinggabi', 'Berdeng Emerald', 'Burgundy'],
    menColors: ['Asul'],
  },

  rsvp: {
    label: 'Ikaw ay Inaanyayahan',
    heading: 'RSVP',
    subtitle: 'Dahil walang gabing di malilimutan kung wala ang tamang mga tao.',
    exclusivity: 'Walang plus one — ang paanyayang ito ay para lamang sa iyo.',
    giftNote:
      'Ang presensya mo ang regalo. Kung nais mong magbigay pa, ang mga regalo at cash gift ay maaaring ibigay nang direkta kay Mommy o Kuya.',
    button: 'Mag-RSVP Na',
    helper: 'Bubuksan ang aming RSVP form sa bagong tab — diretso sa amin ang sagot mo.',
  },

  final: {
    seeYouThere: 'MAGKITA TAYO DOON.',
    name: 'SHAI',
  },

  music: {
    play: 'I-play ang musika',
    pause: 'Ihinto ang musika',
    comingSoon: 'Malapit nang dumating ang musika',
  },
}

export const copy: Record<Lang, Copy> = { en, tl }

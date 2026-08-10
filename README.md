# Shai's 18th — Digital Invitation

A premium, cinematic, mobile-first digital invitation for Shai's 18th
birthday, inspired by Upper East Side luxury, fashion editorials, and
anonymous society-column energy.

## Stack

Vite + React + TypeScript + Tailwind CSS + React Router.

## Routes

- `/shais-18th` — the secret invitation: a wax-sealed envelope guests tap
  to crack open, revealing the invitation card and an "Open Invitation" button.
- `/shais-18th-home` — the full interactive invitation (hero with pointer
  parallax, gossip ticker, blind items, the scoop, split-flap countdown,
  cover story, swipeable gallery lightbox, flip-card 18 wishes, a live
  "cast your vote" poll, guest list, the night, the look, a real RSVP form,
  closing).

## Interactive features

- **Envelope + wax seal** opening sequence on the cover page.
- **Split-flap countdown** — digits flip like a departure board; fires
  confetti the moment the countdown hits zero.
- **Blind Items** — tap-to-flip gossip cards revealing the "scoop."
- **18 Wishes** — each number is a flip card revealing a wish on the back.
- **Cast Your Vote** — a live poll with animated result bars, persisted
  per-browser via `localStorage`.
- **RSVP** — a real name/attendance/party-size form. Submissions are saved
  to `localStorage` (front-end only — wire up a backend or the
  `rsvpUrl` fallback link in `src/config.ts` if you need submissions sent
  anywhere) and trigger a gold confetti burst.
- **Spotted toasts** — rotating ambient gossip notifications, dismissible.
- Scroll progress bar, cursor glow, and swipe gestures in the gallery lightbox.

## Configuration

Everything editable lives in one place: `src/config.ts` — event date/time,
venue, address, dress code, RSVP/maps links, gallery images, the night's
program, guest list, 18 wishes, ticker headlines, blind items, and the poll
question/options.

## Photos & music

Drop real files into `public/images/` (`photo-01.jpg`…`photo-12.jpg`) and
`public/audio/background-music.mp3` using the filenames already referenced
in `src/config.ts`. Until then, the site shows tasteful generated
placeholders and disables the music button — nothing breaks.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the production build
```

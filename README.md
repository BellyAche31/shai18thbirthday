# Shai's 18th — Digital Invitation

A premium, cinematic, mobile-first digital invitation for Shai's 18th
birthday, inspired by Upper East Side luxury, fashion editorials, and
anonymous society-column energy.

## Stack

Vite + React + TypeScript + Tailwind CSS + React Router.

## Routes

- `/shais-18th` — the secret invitation cover, with an "Open Invitation" button.
- `/shais-18th-home` — the full interactive invitation (hero, the scoop,
  countdown, cover story, gallery, 18 wishes, guest list, the night, the
  look, RSVP, closing).

## Configuration

Everything editable lives in one place: `src/config.ts` — event date/time,
venue, address, dress code, RSVP/maps links, gallery images, the night's
program, guest list, and the 18 wishes.

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

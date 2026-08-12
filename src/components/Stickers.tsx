/**
 * Scattered die-cut stickers, the way a sticker sheet lands on a laptop lid.
 *
 * Drawn rather than photographed: every shape here is original artwork in the
 * spirit of the sheet, so the invitation can carry the theme without putting
 * publicity photographs of real people on a public page.
 *
 * The die-cut edge is `paint-order: stroke fill` with a fat white stroke —
 * that gives the white rim a real sticker has, with no `filter` involved, so
 * these never get promoted to their own composited layer.
 */

const PINK = '#E26AA8'
const CORAL = '#E8815C'
const GOLD = '#E8DBA0'
const BLUE = '#5DADE2'
const INK = '#141210'

/** Shared by every glyph: the white die-cut rim. */
const cut = { paintOrder: 'stroke fill' as const, stroke: '#fff', strokeWidth: 9, strokeLinejoin: 'round' as const }

function Lips({ fill = PINK }: { fill?: string }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full overflow-visible">
      <path
        d="M60 26c9-14 26-20 38-12 11 7 12 20 6 30-9 15-28 30-44 34-16-4-35-19-44-34-6-10-5-23 6-30 12-8 29-2 38 12z"
        fill={fill}
        {...cut}
      />
      <path d="M16 44c14 6 30 9 44 9s30-3 44-9" stroke="#fff" strokeWidth="4" fill="none" />
    </svg>
  )
}

function Xoxo({ fill = INK }: { fill?: string }) {
  return (
    <svg viewBox="0 0 150 60" className="h-full w-full overflow-visible">
      <text
        x="75"
        y="45"
        textAnchor="middle"
        fontFamily="'Poiret One', system-ui, sans-serif"
        fontSize="38"
        letterSpacing="2"
        fill={fill}
        {...cut}
      >
        XOXO
      </text>
    </svg>
  )
}

function Crown({ fill = GOLD }: { fill?: string }) {
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full overflow-visible">
      <path d="M14 70l-8-44 30 20L60 16l24 30 30-20-8 44z" fill={fill} {...cut} />
      <rect x="14" y="70" width="92" height="12" rx="3" fill={fill} {...cut} />
    </svg>
  )
}

function Coupe({ fill = GOLD }: { fill?: string }) {
  return (
    <svg viewBox="0 0 90 120" className="h-full w-full overflow-visible">
      <path d="M12 16h66c0 26-13 40-29 43v39h18a5 5 0 010 10H23a5 5 0 010-10h18V59C25 56 12 42 12 16z" fill={fill} {...cut} />
    </svg>
  )
}

function Heel({ fill = PINK }: { fill?: string }) {
  return (
    <svg viewBox="0 0 130 90" className="h-full w-full overflow-visible">
      <path d="M10 22c26 6 44 20 58 36 9 10 22 16 40 16h14v12H74c-10 0-18-3-26-9-4 8-4 12-4 12H10z" fill={fill} {...cut} />
      <rect x="96" y="74" width="9" height="12" fill={fill} {...cut} />
    </svg>
  )
}

function Phone({ fill = BLUE }: { fill?: string }) {
  return (
    <svg viewBox="0 0 80 120" className="h-full w-full overflow-visible">
      <rect x="10" y="8" width="60" height="104" rx="12" fill={fill} {...cut} />
      <rect x="20" y="22" width="40" height="60" rx="4" fill="#fff" opacity="0.85" />
      <circle cx="40" cy="97" r="7" fill="#fff" opacity="0.85" />
    </svg>
  )
}

function Eighteen({ fill = CORAL }: { fill?: string }) {
  return (
    <svg viewBox="0 0 110 90" className="h-full w-full overflow-visible">
      <circle cx="55" cy="45" r="38" fill={fill} {...cut} />
      <text
        x="55"
        y="60"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="40"
        fill="#fff"
      >
        18
      </text>
    </svg>
  )
}

function Star({ fill = GOLD }: { fill?: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
      <path d="M50 6l11 30 32 1-25 20 9 31-27-19-27 19 9-31L7 37l32-1z" fill={fill} {...cut} />
    </svg>
  )
}

const GLYPHS = { lips: Lips, xoxo: Xoxo, crown: Crown, coupe: Coupe, heel: Heel, phone: Phone, eighteen: Eighteen, star: Star }
type Glyph = keyof typeof GLYPHS

/** width / height of each glyph's viewBox. A square span letterboxed the
 *  oblong ones and made them render smaller than their given size. */
const RATIO: Record<Glyph, number> = {
  lips: 120 / 90,
  xoxo: 150 / 60,
  crown: 120 / 90,
  coupe: 90 / 120,
  heel: 130 / 90,
  phone: 80 / 120,
  eighteen: 110 / 90,
  star: 1,
}

type Placed = { g: Glyph; top?: string; bottom?: string; left?: string; right?: string; w: number; rot: number; fill?: string }

/**
 * Preset scatters, so no two sections carry the same arrangement.
 *
 * Every position sits in a section's vertical padding band — the empty space
 * above the first line and below the last. On a phone the text runs almost
 * edge to edge, so there is no side margin to hide in; the only reliable gap
 * is top and bottom. A first pass placed these mid-section and landed a
 * sticker straight on top of a line of copy.
 */
const SCATTERS: Record<string, Placed[]> = {
  a: [
    { g: 'lips', top: '3%', left: '3%', w: 62, rot: -16 },
    { g: 'xoxo', bottom: '3%', right: '3%', w: 88, rot: 11, fill: GOLD },
  ],
  b: [
    { g: 'crown', top: '3%', right: '3%', w: 58, rot: 13 },
    { g: 'coupe', bottom: '3%', left: '4%', w: 34, rot: -12 },
  ],
  c: [
    { g: 'heel', top: '3.5%', left: '3%', w: 72, rot: 9 },
    { g: 'star', bottom: '4%', right: '5%', w: 34, rot: -20, fill: CORAL },
  ],
  d: [
    { g: 'eighteen', top: '3%', left: '4%', w: 52, rot: -9 },
    { g: 'phone', bottom: '3%', right: '4%', w: 32, rot: -14, fill: PINK },
  ],
}

export default function Stickers({ scatter = 'a' }: { scatter?: keyof typeof SCATTERS }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {SCATTERS[scatter].map((s, i) => {
        const G = GLYPHS[s.g]
        return (
          <span
            key={i}
            className="absolute block opacity-55 sm:opacity-75"
            style={{
              top: s.top,
              bottom: s.bottom,
              left: s.left,
              right: s.right,
              width: s.w,
              height: s.w / RATIO[s.g],
              transform: `rotate(${s.rot}deg)`,
            }}
          >
            <G fill={s.fill} />
          </span>
        )
      })}
    </div>
  )
}

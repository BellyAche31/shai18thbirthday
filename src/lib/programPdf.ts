import invitationConfig from '../config'
import type { Copy } from '../i18n'

const CREAM: [number, number, number] = [250, 247, 240]
const INK: [number, number, number] = [26, 22, 17]
const GOLD: [number, number, number] = [150, 116, 47]
const MUTED: [number, number, number] = [110, 100, 88]

const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 18

/**
 * jsPDF's built-in fonts are Latin-1 only. An emoji doesn't just fail to
 * draw — it corrupts the rest of the run, which turned the Gossips note
 * into garbled, stretched text. Strip them on the way in.
 */
function clean(text: string) {
  return text
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Builds the keepsake programme as a PDF: the running order plus every
 * entourage role, so a guest can save or print the details instead of
 * scrolling back to the site on the night.
 *
 * jsPDF is imported on demand — it's larger than the rest of the app, and
 * only the handful of guests who tap download should ever pay for it.
 */
export async function downloadProgramPdf(t: Copy) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })

  let y = 0

  const paintPage = () => {
    doc.setFillColor(...CREAM)
    doc.rect(0, 0, PAGE_W, PAGE_H, 'F')
  }

  /** Starts a new page before drawing if `needed` mm won't fit. */
  const room = (needed: number) => {
    if (y + needed <= PAGE_H - MARGIN) return
    doc.addPage()
    paintPage()
    y = MARGIN
  }

  const label = (text: string) => {
    room(14)
    doc.setFont('helvetica', 'normal').setFontSize(8).setTextColor(...GOLD)
    doc.text(clean(text).toUpperCase(), MARGIN, y, { charSpace: 1.4 })
    y += 3
    doc.setDrawColor(...GOLD).setLineWidth(0.2)
    doc.line(MARGIN, y, PAGE_W - MARGIN, y)
    y += 7
  }

  const body = (text: string, size = 10.5) => {
    doc.setFont('times', 'normal').setFontSize(size).setTextColor(...INK)
    const lines = doc.splitTextToSize(clean(text), PAGE_W - MARGIN * 2) as string[]
    room(lines.length * (size * 0.42) + 3)
    doc.text(lines, MARGIN, y)
    y += lines.length * (size * 0.42) + 3
  }

  /** Numbered names, two columns, so eighteen of them fit on one block. */
  const nameList = (names: readonly string[]) => {
    const colW = (PAGE_W - MARGIN * 2) / 2
    const rows = Math.ceil(names.length / 2)
    room(rows * 6 + 4)
    const top = y
    names.forEach((name, i) => {
      const col = i < rows ? 0 : 1
      const row = i < rows ? i : i - rows
      const x = MARGIN + col * colW
      const ny = top + row * 6
      doc.setFont('helvetica', 'normal').setFontSize(7.5).setTextColor(...GOLD)
      doc.text(String(i + 1).padStart(2, '0'), x, ny)
      doc.setFont('times', 'normal').setFontSize(10.5).setTextColor(...INK)
      doc.text(clean(name), x + 7, ny)
    })
    y = top + rows * 6 + 4
  }

  // ---- Cover block --------------------------------------------------------
  paintPage()
  y = 34

  doc.setFont('times', 'normal').setFontSize(26).setTextColor(...INK)
  doc.text(clean(t.hero.title), PAGE_W / 2, y, { align: 'center' })
  y += 9

  doc.setFont('times', 'italic').setFontSize(12).setTextColor(...GOLD)
  doc.text(clean(t.hero.subtitle), PAGE_W / 2, y, { align: 'center' })
  y += 10

  doc.setDrawColor(...GOLD).setLineWidth(0.4)
  doc.line(PAGE_W / 2 - 22, y, PAGE_W / 2 + 22, y)
  y += 12

  doc.setFont('helvetica', 'normal').setFontSize(9).setTextColor(...INK)
  doc.text(clean(t.scoop.dateDisplay), PAGE_W / 2, y, { align: 'center', charSpace: 0.8 })
  y += 6
  doc.setFont('times', 'normal').setFontSize(11)
  doc.text(clean(t.scoop.timeDisplay), PAGE_W / 2, y, { align: 'center' })
  y += 6
  doc.text(clean(invitationConfig.venue), PAGE_W / 2, y, { align: 'center' })
  y += 5.5
  doc.setFontSize(9.5).setTextColor(...MUTED)
  doc.text(clean(invitationConfig.address), PAGE_W / 2, y, { align: 'center' })
  y += 14

  // ---- Running order ------------------------------------------------------
  label(t.theNight.label)
  invitationConfig.program.forEach((item, i) => {
    room(7)
    doc.setFont('helvetica', 'normal').setFontSize(8.5).setTextColor(...GOLD)
    doc.text(item.time, MARGIN, y)
    doc.setFont('times', 'normal').setFontSize(11).setTextColor(...INK)
    doc.text(clean(t.programTitles[i] ?? item.title), MARGIN + 24, y)
    y += 7
  })
  y += 4

  // ---- Dress code ---------------------------------------------------------
  label(t.dressCode.label)
  body(t.dressCode.styleAlert)
  body(`${t.dressCode.women}: ${t.dressCode.womenColors.join(', ')}`)
  body(`${t.dressCode.men}: ${t.dressCode.menColors.join(', ')}`)
  y += 4

  // ---- Entourage ----------------------------------------------------------
  const groups: Array<{ heading: string; note: string; names: readonly string[] }> = [
    { heading: t.roses.label, note: t.roses.note, names: invitationConfig.roses },
    { heading: t.gossips.label, note: t.gossips.note, names: invitationConfig.gossipsAndShots.names },
    { heading: t.gifts.label, note: t.gifts.note, names: invitationConfig.eighteenGifts },
    { heading: t.blueBills.label, note: t.blueBills.note, names: invitationConfig.eighteenBlueBills },
  ]

  groups.forEach((g) => {
    label(g.heading)
    doc.setFont('times', 'italic').setFontSize(10).setTextColor(...MUTED)
    const noteLines = doc.splitTextToSize(clean(g.note), PAGE_W - MARGIN * 2) as string[]
    room(noteLines.length * 4.5 + 4)
    doc.text(noteLines, MARGIN, y)
    y += noteLines.length * 4.5 + 4
    nameList(g.names)
    y += 3
  })

  // ---- Footer on every page ----------------------------------------------
  const pages = doc.getNumberOfPages()
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p)
    doc.setFont('times', 'italic').setFontSize(8).setTextColor(...MUTED)
    doc.text(clean(invitationConfig.creatorCredit), PAGE_W / 2, PAGE_H - 10, { align: 'center' })
  }

  doc.save('Shaina-18th-Programme.pdf')
}

/**
 * The defocused city that sits behind the whole page.
 *
 * Fixed rather than per-section, so scrolling moves the content over a
 * continuous field of lights instead of past a series of separate backdrops —
 * which is what makes the reference read as one place rather than a stack of
 * panels. Everything it needs lives in `.bokeh-field` in index.css.
 */
export default function BokehField() {
  return <div className="bokeh-field" aria-hidden="true" />
}

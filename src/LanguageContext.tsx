import { createContext, useContext, type ReactNode } from 'react'
import { copy, type Copy, type Lang } from './i18n'

// Tagalog toggle was pulled — English only for now. Keeping the Copy/i18n
// plumbing in place (rather than inlining strings) so it's a one-line
// change to bring the switch back later.
const lang: Lang = 'en'

type LanguageValue = {
  lang: Lang
  t: Copy
}

const LanguageCtx = createContext<LanguageValue>({ lang, t: copy.en })

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageCtx.Provider value={{ lang, t: copy.en }}>{children}</LanguageCtx.Provider>
}

export function useLang() {
  return useContext(LanguageCtx)
}

/** Shorthand for components that only need the strings. */
export function useT(): Copy {
  return useContext(LanguageCtx).t
}

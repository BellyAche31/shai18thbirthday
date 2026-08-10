import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { copy, type Copy, type Lang } from './i18n'

const STORAGE_KEY = 'shai18-lang'

type LanguageValue = {
  lang: Lang
  t: Copy
  setLang: (l: Lang) => void
  toggle: () => void
}

const LanguageCtx = createContext<LanguageValue>({
  lang: 'en',
  t: copy.en,
  setLang: () => {},
  toggle: () => {},
})

function readStored(): Lang {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'tl' ? 'tl' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored)

  useEffect(() => {
    document.documentElement.lang = lang === 'tl' ? 'tl' : 'en'
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Private browsing — the choice just won't survive a reload.
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState((l) => (l === 'en' ? 'tl' : 'en')), [])

  return (
    <LanguageCtx.Provider value={{ lang, t: copy[lang], setLang, toggle }}>
      {children}
    </LanguageCtx.Provider>
  )
}

export function useLang() {
  return useContext(LanguageCtx)
}

/** Shorthand for components that only need the strings. */
export function useT(): Copy {
  return useContext(LanguageCtx).t
}

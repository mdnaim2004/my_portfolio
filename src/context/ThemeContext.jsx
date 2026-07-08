import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const THEMES = ['dark', 'light', 'natural']
const THEME_STORAGE_KEY = 'portfolio-theme'

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  themes: THEMES,
  isReducedMotion: false,
})

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme && THEMES.includes(storedTheme)) return storedTheme

  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = () => setIsReducedMotion(mediaQuery.matches)

    updateReducedMotion()
    mediaQuery.addEventListener?.('change', updateReducedMotion)

    return () => {
      mediaQuery.removeEventListener?.('change', updateReducedMotion)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = window.document.documentElement
    root.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({ theme, setTheme, themes: THEMES, isReducedMotion }),
    [theme, isReducedMotion],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

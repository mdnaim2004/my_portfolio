import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContextObject'
import { THEMES, THEME_STORAGE_KEY } from './themeConstants'

function getInitialTheme() {
  if (typeof window === 'undefined') return THEMES[0]

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme && THEMES.includes(storedTheme)) return storedTheme

  return THEMES[0]
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

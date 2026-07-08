import { createContext } from 'react'
import { THEMES } from './themeConstants'

export const ThemeContext = createContext({
  theme: THEMES[0],
  setTheme: () => {},
  themes: THEMES,
  isReducedMotion: false,
})

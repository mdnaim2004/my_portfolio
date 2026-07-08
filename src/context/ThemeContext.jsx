import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved) return saved
      
      // Check for OS preference for light mode, otherwise default to dark
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    }
    return 'dark'
  })

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme)
    
    // Apply to html element
    document.documentElement.setAttribute('data-theme', theme)
    
    // Add specific classes to body for easier CSS targeting if needed
    document.body.className = `theme-${theme}`
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

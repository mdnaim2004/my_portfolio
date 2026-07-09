import { FiSun, FiMoon, FiCloud } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-toggle-container">
      <div className="theme-selector">
        <button 
          onClick={() => setTheme('dark')}
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          aria-label="Dark Mode"
          title="Dark Mode"
        >
          <FiMoon />
        </button>
        <button 
          onClick={() => setTheme('light')}
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          aria-label="Light Mode"
          title="Light Mode"
        >
          <FiSun />
        </button>
        <button 
          onClick={() => setTheme('natural')}
          className={`theme-btn ${theme === 'natural' ? 'active' : ''}`}
          aria-label="Natural Mode"
          title="Natural Mode"
        >
          <FiCloud />
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle

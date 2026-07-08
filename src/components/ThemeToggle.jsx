import { FiMoon, FiSun } from 'react-icons/fi'
import { LuLeaf } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'

const themeOptions = [
  { value: 'dark', label: 'Dark', icon: FiMoon },
  { value: 'light', label: 'Light', icon: FiSun },
  { value: 'natural', label: 'Natural', icon: LuLeaf },
]

function ThemeToggle({ compact = false }) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`theme-toggle-wrap flex items-center rounded-full border p-1 backdrop-blur-md ${
        compact ? 'w-full justify-between' : ''
      }`}
      role="group"
      aria-label="Theme selector"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon
        const isActive = theme === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`theme-toggle-btn inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              isActive ? 'is-active' : ''
            } ${compact ? 'flex-1 justify-center' : ''}`}
            aria-pressed={isActive}
            aria-label={`Switch to ${option.label} theme`}
          >
            <Icon size={14} />
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ThemeToggle

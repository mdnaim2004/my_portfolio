import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container section-padding py-3 navbar-inner">
        <a href="#home" className="navbar-brand">
          Md Naim Babu
        </a>

        <div className="flex items-center gap-4">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <ThemeToggle />

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-mobile-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar

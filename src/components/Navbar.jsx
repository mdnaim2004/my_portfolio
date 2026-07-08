import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="theme-navbar sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <a href="#home" className="theme-heading text-sm font-semibold uppercase tracking-[0.32em]">
          Md Naim Babu
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="theme-nav-link text-sm transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="theme-menu-btn rounded-lg border p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </nav>

      {open && (
        <div className="theme-mobile-nav border-t px-5 py-4 md:hidden">
          <ThemeToggle compact />
          <ul className="mt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="theme-nav-link text-sm" onClick={() => setOpen(false)}>
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

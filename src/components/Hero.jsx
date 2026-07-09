import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { personalInfo, socialLinks } from '../data/portfolioData'

function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-card rounded-3xl p-8 md:p-12"
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="theme-accent text-sm font-semibold tracking-wide uppercase">
            Hi, I'm {personalInfo.name}
          </span>
          <span className="theme-muted text-xs opacity-50">•</span>
          <p className="theme-eyebrow theme-chip inline-flex rounded-full px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium">
            {personalInfo.location}
          </p>
        </div>

        <h1 className="theme-heading max-w-4xl text-4xl font-bold leading-[1.15] md:text-5xl lg:text-6xl tracking-tight">
          {personalInfo.heroHeadline}
        </h1>

        <p className="theme-body mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-90">
          {personalInfo.heroSubtext}
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowUpRight />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Contact Me <FiMail />
            </a>
          </div>
          <div className="hidden sm:block h-6 w-[1px] bg-slate-800 dark:bg-slate-700 opacity-20"></div>
          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="theme-nav-link flex items-center gap-1 text-sm font-medium transition"
              >
                {item.label}
                <span className="text-[10px] opacity-60">↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

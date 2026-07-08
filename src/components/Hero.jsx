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
        <p className="theme-eyebrow theme-chip mb-5 inline-flex rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
          {personalInfo.location}
        </p>
        <h1 className="theme-heading max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          {personalInfo.heroHeadline}
        </h1>
        <p className="theme-body mt-5 max-w-3xl text-lg">{personalInfo.heroSubtext}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View Projects <FiArrowUpRight />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
            Contact Me <FiMail />
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="theme-link-card group rounded-2xl px-4 py-3 text-sm transition"
            >
              <span className="font-medium">{item.label}</span>
              <span className="theme-accent ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

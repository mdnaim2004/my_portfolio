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
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
          {personalInfo.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {personalInfo.heroHeadline}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">{personalInfo.heroSubtext}</p>

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
              className="group rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              <span className="font-medium">{item.label}</span>
              <span className="ml-2 text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-0.5">
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

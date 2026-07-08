import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { personalInfo, socialLinks } from '../data/portfolioData'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="container hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-card hero-card"
      >
        <p className="hero-location">
          {personalInfo.location}
        </p>
        <h1 className="hero-title">
          {personalInfo.heroHeadline}
        </h1>
        <p className="hero-text">{personalInfo.heroSubtext}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects <FiArrowUpRight />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
            Contact Me <FiMail />
          </a>
        </div>

        <div className="hero-socials">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="social-link"
            >
              <span className="font-medium">{item.label}</span>
              <span className="social-link-icon">
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

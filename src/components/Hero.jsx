import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { personalInfo, socialLinks } from '../data/portfolioData'
import './Hero.css'

const heroSocials = ['GitHub', 'Kaggle', 'LeetCode', 'LinkedIn']

function Hero() {
  return (
    <section id="home" className="container hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-card hero-card"
      >
        <span className="hero-badge">Based in {personalInfo.location}</span>

        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-title">{personalInfo.heroHeadline}</h2>
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
          {socialLinks
            .filter((item) => heroSocials.includes(item.label))
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                {item.label}
                <span className="social-link-arrow">↗</span>
              </a>
            ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

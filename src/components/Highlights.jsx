import { FiArrowUpRight } from 'react-icons/fi'
import { highlights } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Highlights() {
  return (
    <section className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Profiles"
          title="GitHub, Kaggle, LeetCode"
          description="A snapshot of my coding, experimentation, and public technical profile."
        />
      </Reveal>

      <div className="grid gap-5 md-grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card block p-6 rounded-3xl"
              style={{ display: 'block' }}
            >
              <p className="text-sm uppercase tracking-wider text-secondary">{item.title}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.value}</h3>
              <p className="mt-3 text-sm text-secondary">{item.description}</p>
              <span className="mt-5 flex items-center gap-2 text-sm text-cyan">
                Visit profile <FiArrowUpRight />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Highlights

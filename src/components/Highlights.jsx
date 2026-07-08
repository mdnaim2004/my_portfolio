import { FiArrowUpRight } from 'react-icons/fi'
import { highlights } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Highlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Profiles"
          title="GitHub, Kaggle, LeetCode"
          description="A snapshot of my coding, experimentation, and public technical profile."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group glass-card block rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <p className="theme-muted text-sm uppercase tracking-[0.2em]">{item.title}</p>
              <h3 className="theme-heading mt-2 text-xl font-semibold">{item.value}</h3>
              <p className="theme-body mt-3 text-sm">{item.description}</p>
              <span className="theme-accent mt-5 inline-flex items-center gap-2 text-sm">
                Visit profile <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Highlights

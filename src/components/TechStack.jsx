import { techStack } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function TechStack() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use"
          description="My typical stack for data analysis, machine learning, deep learning, and product-ready interfaces."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card rounded-3xl p-7">
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="theme-pill theme-body rounded-full px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default TechStack

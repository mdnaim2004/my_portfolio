import { techStack } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function TechStack() {
  return (
    <section className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use"
          description="My typical stack for data analysis, machine learning, deep learning, and product-ready interfaces."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card section-card">
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="tech-badge"
              >
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

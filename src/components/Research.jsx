import { researchInterests } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Research() {
  return (
    <section id="research" className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Research Interests"
          title="Where I want to contribute"
          description="I aim to grow as an AI/ML Research Engineer by working on practical, high-impact, and trustworthy ML systems."
        />
      </Reveal>

      <div className="grid gap-4 md-grid-cols-2">
        {researchInterests.map((item, index) => (
          <Reveal key={item} delay={index * 0.05}>
            <div className="glass-card p-6 rounded-2xl text-secondary">{item}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Research

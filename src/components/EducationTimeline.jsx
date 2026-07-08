import { educationTimeline } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function EducationTimeline() {
  return (
    <section className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic timeline"
          description="Academic foundation shaping my path into AI/ML research and engineering."
        />
      </Reveal>

      <div className="space-y-4">
        {educationTimeline.map((item, index) => (
          <Reveal key={`${item.title}-${item.period}`} delay={index * 0.05}>
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-sm uppercase tracking-wider text-cyan">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-secondary">{item.institution}</p>
              <p className="mt-3 text-secondary">{item.details}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default EducationTimeline

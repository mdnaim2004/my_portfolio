import { achievements } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Achievements() {
  return (
    <section className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones"
          description="Signals of consistency, growth, and contribution in AI/ML and problem solving."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card section-card">
          <ul className="space-y-4 text-secondary">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 rounded-full" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default Achievements

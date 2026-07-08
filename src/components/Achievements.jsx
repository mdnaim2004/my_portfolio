import { achievements } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Achievements() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones"
          description="Signals of consistency, growth, and contribution in AI/ML and problem solving."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card rounded-3xl p-8">
          <ul className="theme-body space-y-4">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="theme-dot mt-2 h-2 w-2 rounded-full" />
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

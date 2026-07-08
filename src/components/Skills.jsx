import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Core strengths"
          description="A balanced profile across ML, research, and algorithmic problem solving."
        />
      </Reveal>

      <div className="grid gap-4 sm-grid-cols-2 lg-grid-cols-4">
        {skills.map((skill, index) => (
          <Reveal key={skill} delay={index * 0.04}>
            <div className="glass-card p-4 rounded-2xl text-sm font-medium text-center" style={{ color: 'var(--text-primary)' }}>
              {skill}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills

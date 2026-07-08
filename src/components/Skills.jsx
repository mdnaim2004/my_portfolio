import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Core strengths"
          description="A balanced profile across ML, research, and algorithmic problem solving."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Reveal key={skill} delay={index * 0.04}>
            <div className="glass-card theme-heading rounded-2xl p-5 text-sm font-medium">{skill}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills

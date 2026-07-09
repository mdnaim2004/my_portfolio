import { personalInfo } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Building things, asking questions, and learning in public"
          description="I am still early in my journey, but I believe in showing up consistently — writing code, running experiments, and sharing what I learn along the way."
        />
      </Reveal>

      <Reveal delay={0.1} className="glass-card section-card">
        <h3 className="text-2xl font-semibold text-white">{personalInfo.name}</h3>
        <p className="mt-2 text-cyan">{personalInfo.title}</p>
        <p className="mt-4 text-secondary leading-relaxed">{personalInfo.bio}</p>
      </Reveal>
    </section>
  )
}

export default About

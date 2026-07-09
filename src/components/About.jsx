import { personalInfo } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="Curious, hands-on, and eager to learn"
          description="I like exploring data, testing new ideas, and combining structured logic with code to solve interesting problems."
        />
      </Reveal>

      <Reveal delay={0.1} className="glass-card rounded-3xl p-8 md:p-10">
        <h3 className="theme-heading text-2xl font-semibold">{personalInfo.name}</h3>
        <p className="theme-accent mt-2">{personalInfo.title}</p>
        <p className="theme-body mt-4 leading-relaxed">{personalInfo.bio}</p>
      </Reveal>
    </section>
  )
}

export default About

import { personalInfo } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Engineering with curiosity, rigor, and purpose"
          description="I enjoy combining research thinking with practical engineering to build AI systems that are reliable, interpretable, and impact-focused."
        />
      </Reveal>

      <Reveal delay={0.1} className="glass-card rounded-3xl p-8 md:p-10">
        <h3 className="theme-heading text-2xl font-semibold">{personalInfo.name}</h3>
        <p className="theme-accent mt-2">{personalInfo.title}</p>
        <p className="theme-body mt-4">{personalInfo.bio}</p>
      </Reveal>
    </section>
  )
}

export default About

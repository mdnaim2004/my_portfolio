import { FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          description="I am open to research collaborations, internships, and AI/ML engineering opportunities."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card rounded-3xl p-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-white">Reach me directly at:</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 inline-block text-lg font-medium text-cyan-300 hover:text-cyan-200"
            >
              {personalInfo.email}
            </a>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary mt-5 md:mt-0">
            Send Email <FiMail />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact

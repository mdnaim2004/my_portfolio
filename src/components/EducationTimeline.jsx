import { educationTimeline } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function EducationTimeline() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
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
            <div className="glass-card rounded-2xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.institution}</p>
              <p className="mt-3 text-slate-300">{item.details}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default EducationTimeline

import { projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="From research-grade ML experiments to secure systems development."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="project-card h-full rounded-3xl p-6 md:p-7">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-100"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects

import { projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section id="projects" className="container section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="From research-grade ML experiments to secure systems development."
        />
      </Reveal>

      <div className="grid md-grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="project-card h-full p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-secondary">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="tag-pill"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 list-disc pl-5 text-sm text-secondary" style={{ paddingLeft: '1.25rem' }}>
                {project.highlights.map((point) => (
                  <li key={point} className="mb-2">{point}</li>
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

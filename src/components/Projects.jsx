import Reveal from "./Reveal";
import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section className="section" id="work">
      <Reveal>
        <div className="divider" />
        <div className="section-label">Work</div>
        <h2 className="section-title">Things I've built</h2>
      </Reveal>

      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <div className="project-card">
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

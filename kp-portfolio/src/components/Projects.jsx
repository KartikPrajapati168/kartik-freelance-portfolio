import { Github, ExternalLink, Scale, Leaf, UtensilsCrossed, Soup, BarChart3 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolioData.js";

const visualIcon = { legal: Scale, waste: Leaf, food: UtensilsCrossed, tiffin: Soup, analytics: BarChart3 };

// Original CSS mockups – no images needed. Replace with real screenshots if you have them.
function ProjectVisual({ type }) {
  const Icon = visualIcon[type];
  return (
    <div className={`visual visual-${type}`} aria-hidden="true">
      {type === "analytics" ? (
        <div className="bars">{[40, 65, 50, 85, 60, 95, 70].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
      ) : (
        <>
          <Icon size={34} />
          <div className="lines"><i /><i /><i /></div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects that show how I build." id="projects-title" />
        <div className="grid grid-projects">
          {projects.map((p) => (
            <article key={p.name} className="card project-card">
              <ProjectVisual type={p.visual} />
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="project-sub">{p.title}</p>
                <p>{p.text}</p>
                <ul className="chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer"><Github size={15} /> Code</a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live demo</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

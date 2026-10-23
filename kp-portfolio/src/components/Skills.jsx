import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading eyebrow="MY TOOLKIT" title="Skills & Technologies" id="skills-title" />
        <div className="grid grid-3">
          {skills.map((group) => (
            <article key={group.category} className="card">
              <h3>{group.category}</h3>
              <ul className="chips">{group.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

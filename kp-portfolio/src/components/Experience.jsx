import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container narrow">
        <SectionHeading eyebrow="MY JOURNEY" title="Experience & Learning" id="exp-title" />
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="tl-dot" />
              <h3>{e.title}</h3>
              <p className="period">{e.period}</p>
              <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

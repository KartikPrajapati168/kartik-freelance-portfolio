import SectionHeading from "./SectionHeading.jsx";
import TechStrip from "./TechStrip.jsx";
import { about } from "../data/portfolioData.js";

export default function About() {
  return (
    <>
      <TechStrip />
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container about-grid">
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.heading} id="about-title" />
            <p className="lead">{about.text}</p>
          </div>
          <ul className="principles">
            {about.principles.map((p, i) => (
              <li key={p.title} className="card">
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="section alt" aria-labelledby="edu-title">
      <div className="container narrow">
        <SectionHeading title="Education" id="edu-title" />
        <div className="card edu-card">
          <span className="icon-wrap"><GraduationCap size={26} /></span>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            {education.period && <p className="period">{education.period}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

import { techStrip } from "../data/portfolioData.js";

export default function TechStrip() {
  return (
    <div className="tech-strip" aria-label="Technologies">
      <ul className="container">
        {techStrip.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}

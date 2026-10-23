import { Monitor, Server, Brain, Database, Wrench, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/portfolioData.js";

const icons = { Monitor, Server, Brain, Database, Wrench, Cloud };

export default function Services() {
  return (
    <section id="services" className="section alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT I CAN HELP WITH"
          title="Services"
          subtitle="Flexible development support for small businesses, founders and teams."
          id="services-title"
        />
        <div className="grid grid-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <article key={s.title} className="card service-card">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="icon-wrap"><Icon size={24} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

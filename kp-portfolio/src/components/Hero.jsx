import { Code2, Send, Github, Linkedin } from "lucide-react";
import { profile, contact, heroCode, floatingTech } from "../data/portfolioData.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge"><i className="dot" />{profile.status}</span>
          <p className="hello">Hello, I'm</p>
          <h1>Kartik <span className="accent">Prajapati</span></h1>
          <p className="headline">{profile.headline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary"><Code2 size={18} /> View My Projects</a>
            <a href="#contact" className="btn btn-outline"><Send size={18} /> Hire Me</a>
          </div>
          <div className="socials">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden={!profile.photo}>
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          {profile.photo ? (
            <img className="hero-photo" src={profile.photo} alt={profile.photoAlt} />
          ) : (
            <div className="code-card">
              <div className="code-dots"><i /><i /><i /></div>
              <pre>
                {heroCode.map((line, i) => (
                  <span key={i} className="code-line">{line}{"\n"}</span>
                ))}
              </pre>
            </div>
          )}
          {floatingTech.map((t, i) => (
            <span key={t} className={`float-chip chip-${i + 1}`}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

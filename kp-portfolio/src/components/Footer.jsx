import { ArrowUp, Github, Linkedin } from "lucide-react";
import Logo from "./Logo.jsx";
import { profile, contact, navLinks } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted">{profile.tagline}</p>
          <div className="socials">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          </div>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          {navLinks.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a href="#home" className="btn btn-outline back-top"><ArrowUp size={16} /> Back to top</a>
      </div>
      <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/portfolioData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={close}>Hire Me</a>
        </nav>
        <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

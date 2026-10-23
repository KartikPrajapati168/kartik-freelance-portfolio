import { profile } from "../data/portfolioData.js";

export default function Logo({ href = "#home" }) {
  return (
    <a className="logo" href={href} aria-label={`${profile.name} – home`}>
      <span className="logo-mark">{profile.initials}</span>
      <span className="logo-text">{profile.name}</span>
    </a>
  );
}

import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Github, MapPin, Send } from "lucide-react";
import { contact } from "../data/portfolioData.js";

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

// NOTE: static site – this only opens the visitor's email app (mailto).
// For real server-side submissions use a form service (Formspree, Web3Forms, Netlify Forms) or a backend.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.details.trim().length < 10) next.details = "Please add a few details about your project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.details}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const options = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
    { icon: Github, label: "GitHub", href: contact.github },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Let's build something useful.</h2>
          <p className="lead">Tell me a little about your project. I'll review the requirements and get back to you.</p>
          <ul className="contact-list">
            {options.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon size={18} /> {label}
                </a>
              </li>
            ))}
            <li><span><MapPin size={18} /> {contact.location}</span></li>
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        <form className="card contact-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <small role="alert">{errors.name}</small>}

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <small role="alert">{errors.email}</small>}

          <label htmlFor="details">Project details</label>
          <textarea id="details" name="details" rows="5" value={form.details} onChange={onChange} aria-invalid={!!errors.details} />
          {errors.details && <small role="alert">{errors.details}</small>}

          <button type="submit" className="btn btn-primary"><Send size={18} /> Prepare Email</button>
        </form>
      </div>
    </section>
  );
}

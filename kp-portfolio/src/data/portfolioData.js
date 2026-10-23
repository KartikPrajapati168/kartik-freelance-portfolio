// ============================================================
//  EDIT EVERYTHING HERE – personal details, links and content.
//  Items marked  TODO  must be replaced before publishing.
// ============================================================

export const profile = {
  name: "Kartik Prajapati",
  initials: "KP",
  headline: "Python | Django | AI/ML Developer",
  status: "Available for Select Freelance Projects",
  intro:
    "I build practical web applications, backend APIs and data-driven solutions for real-world problems.",
  tagline: "Practical web apps, APIs and ML solutions.",
  // Optional: put a real photo in /public (e.g. "/kartik.jpg") and set it here.
  // Leave empty ("") to show the developer code-card illustration.
  photo: "",
  photoAlt: "Portrait of Kartik Prajapati",
};

export const contact = {
  email: "kartikprajapati9995@gmail.com", // TODO replace (also receives the contact-form mailto)
  whatsappNumber: "917016875858", // TODO country code + number, digits only (e.g. 919876543210)
  github: "https://github.com/KartikPrajapati168",
  linkedin: "https://linkedin.com/in/kartik-prajapati-a5a104306",
  location: "Ahmedabad, Gujarat, India",
  whatsappMessage: "Hi Kartik, I'd like to discuss a project with you.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroCode = [
  'class Developer:',
  '    name = "Kartik"',
  '    focus = ["Python", "Django",',
  '             "AI/ML", "APIs"]',
];

export const floatingTech = ["Python", "Django", "React", "REST APIs", "Machine Learning"];

export const techStrip = [
  "Python", "Django", "Django REST Framework", "React",
  "PostgreSQL", "MongoDB", "Scikit-learn", "XGBoost",
];

export const about = {
  eyebrow: "A LITTLE ABOUT ME",
  heading: "I turn ideas into working software.",
  text:
    "I'm a developer based in Ahmedabad, India, with hands-on project experience across Python, Django, REST APIs, React, databases and machine learning. I enjoy breaking down real problems into maintainable, practical solutions.",
  principles: [
    { title: "Problem-first thinking", text: "Understand the need before choosing the tools." },
    { title: "Maintainable code", text: "Clean structure that is easy to extend later." },
    { title: "Honest communication", text: "Clear updates and realistic expectations." },
    { title: "Practical delivery", text: "Working features shipped step by step." },
  ],
};

// icon names map to Lucide icons inside Services.jsx
export const services = [
  { icon: "Monitor", title: "Web Application Development", text: "Responsive business applications, custom workflows, dashboards and web tools." },
  { icon: "Server", title: "Python & REST API Development", text: "Backend APIs, authentication, third-party integrations and feature development." },
  { icon: "Brain", title: "AI/ML Solutions", text: "Data analysis, model development and machine-learning prototypes when appropriate." },
  { icon: "Database", title: "Database Integration", text: "PostgreSQL, MySQL, MongoDB and application data workflows." },
  { icon: "Wrench", title: "Bug Fixes & Existing Project Development", text: "Debugging, feature additions and application improvements." },
  { icon: "Cloud", title: "Deployment Support", text: "Frontend and backend deployment assistance, configuration and setup documentation." },
];

// visual: legal | waste | food | tiffin | analytics   (CSS mockups, see Projects.jsx)
// repo / demo: put real URLs. Leave "" to hide that link.
export const projects = [
  {
    name: "AdvoCare", title: "Smart Legal Case Management System", visual: "legal",
    text: "A legal case-management platform concept with role-based workflows for clients, law firms and administrators.",
    tags: ["Django", "Django REST Framework", "React", "PostgreSQL", "JWT"],
    repo: "https://github.com/KartikPrajapati168", demo: "",
  },
  {
    name: "WasteExchange AI", title: "Industrial Waste Marketplace", visual: "waste",
    text: "A marketplace concept connecting industrial waste generators and buyers, with AI-assisted material classification and buyer matching.",
    tags: ["MERN", "MongoDB", "JWT", "AI/ML"],
    repo: "https://github.com/KartikPrajapati168", demo: "",
  },
  {
    name: "ZaykaZone", title: "Food Ordering Platform", visual: "food",
    text: "A food-ordering platform project focused on restaurant discovery and ordering workflows.",
    tags: ["Django", "PostgreSQL", "Payment Integration"],
    repo: "https://github.com/KartikPrajapati168", demo: "",
  },
  {
    name: "Jaman Ahmedabad", title: "Tiffin Ordering Platform", visual: "tiffin",
    text: "A tiffin-ordering application concept connecting customers with meal providers.",
    tags: ["FastAPI", "React", "MongoDB"],
    repo: "https://github.com/KartikPrajapati168", demo: "",
  },
  {
    name: "Customer Churn ML", title: "Machine Learning System", visual: "analytics",
    text: "A machine-learning workflow involving preprocessing, model training, evaluation and model comparison.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    repo: "https://github.com/KartikPrajapati168", demo: "",
  },
];

export const skills = [
  { category: "Programming", items: ["Python", "JavaScript", "SQL", "Java (Basic)"] },
  { category: "Backend", items: ["Django", "Django REST Framework", "FastAPI", "Node.js", "Express.js"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "AI/ML", items: ["Scikit-learn", "Pandas", "NumPy", "XGBoost", "Exploratory Data Analysis", "Feature Engineering", "Model Evaluation"] },
  { category: "Tools & Concepts", items: ["Git", "GitHub", "REST APIs", "JWT Authentication", "Object-Oriented Programming", "Deployment Fundamentals"] },
];

export const experience = [
  {
    title: "BrainyBeam — Python / AI-ML Training",
    period: "Approx. 2 months · Remote", // TODO verify exact dates before publishing
    points: ["Remote training focused on Python and AI/ML.", "Exact dates and program details to be verified before publication."],
  },
  {
    title: "Independent Development Projects",
    period: "Self-driven",
    points: ["Hands-on project work across web applications, APIs, database integrations and machine-learning workflows."],
  },
];

export const education = {
  degree: "Integrated MCA (IMCA)",
  school: "LJ University, Ahmedabad",
  period: "", // TODO e.g. "2023 – 2028" or "Currently pursuing" – leave "" to hide
};

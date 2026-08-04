import { CaseStudy, TechnicalSkillCategory, ExperienceItem, EducationItem } from "../types";

export const PERSONAL_INFO = {
  name: "Lokesh Binkam",
  title: "React Web Development Team Lead",
  experienceYears: "8 Years",
  location: "Hyderabad, India",
  roleFocus: "Frontend Architecture, Micro-Frontends & AI Integration",
  email: "lokesh.binkam@gmail.com",
  phone: "+91 98765 43210",
  github: "https://github.com/lokeshbinkam",
  linkedin: "https://www.linkedin.com/in/lokesh-binkam-79208b141/",
  status: "Open to Technical Leadership & Principal Architect Opportunities",
  objective:
    "Results-driven React Web Development Team Lead with 8 years of hands-on expertise in building scalable, high-performance web applications and enterprise portals. Seeking to leverage dynamic leadership, expertise in Micro-Frontend architecture, AI-driven development workflows, and modern JavaScript frameworks to drive technical excellence and business growth in a collaborative environment.",
};

export const CORE_PILLARS = [
  {
    iconName: "LayoutGrid",
    title: "Micro-Frontend Architecture",
    description: "Decoupling monolithic web applications into modular, independently deployable UI domain packages with lazy-loading and strict quality governance.",
    metric: "30% Faster Load Times",
  },
  {
    iconName: "Bot",
    title: "AI Agent & Workflow Integration",
    description: "Embedding cutting-edge AI agents, automated testing pipelines, and AI-assisted developer onboarding into engineering workflows.",
    metric: "2x Sprint Velocity",
  },
  {
    iconName: "Figma",
    title: "Figma-to-Code Engineering",
    description: "Bridging complex client design visions and enterprise business rules into pixel-perfect, accessible, and responsive React component libraries.",
    metric: "Defect-Free Releases",
  },
  {
    iconName: "Zap",
    title: "Enterprise Web Performance",
    description: "Auditing runtime memory, optimizing bundle sizes, implementing state-of-the-art caching, and tuning SPA interaction responsiveness.",
    metric: "8+ Yrs Proven Expertise",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "azure-ui-modules",
    title: "Microsoft Azure UI Modules & AI Workflows",
    company: "Accenture India",
    project: "Project: Microsoft",
    client: "Microsoft Azure",
    period: "March 2024 – Present",
    role: "React Web Development Team Lead",
    summary:
      "Steered a high-performing team of frontend engineers in designing and building core Azure UI modules aligned with Microsoft's strategic technical goals, embedding AI agent pipelines for 2x team velocity gains.",
    impactMetrics: [
      { label: "Initial Load Time", value: "-30%", desc: "Reduced initial load times via Micro-Frontend architecture" },
      { label: "Dev Productivity", value: "2x", desc: "Accelerated sprint pipelines using embedded AI agents" },
      { label: "Team Leadership", value: "Multi-Engineer", desc: "Steered frontend engineering team & client UX consultations" },
    ],
    tags: ["React", "Micro-Frontends", "AI Agents", "TypeScript", "Azure UI", "Figma"],
    featured: true,
    architectureDiagramType: "micro-frontend",
    problem:
      "Large enterprise cloud management consoles demand modular scaling across sub-teams while maintaining consistent UX, strict accessibility, and instantaneous initial rendering times without monolithic build bottlenecks.",
    solution: [
      "Architected micro-frontend module boundaries allowing sub-teams to independently build and deploy Azure UI features.",
      "Provided technical & UX design consultation during Figma design phases to bridge client vision with robust React component architectures.",
      "Embedded AI agents and automation tools into development and testing pipelines achieving 2x productivity gains.",
      "Architected AI-assisted onboarding frameworks empowering new hires to seamlessly adapt to Microsoft project workflows from day one.",
    ],
    highlights: [
      "Conducted technical AI enablement sessions for junior developers and onboarding teams.",
      "Implemented state-of-the-art performance optimization techniques and bundle splitting.",
      "End-to-end translation of client requirements into modular, responsive, and aesthetically refined UI components.",
    ],
    techStack: ["React", "TypeScript", "Micro-Frontends", "AI Agents", "Figma AI Plugins", "VS Code", "Docker"],
  },
  {
    id: "att-ecommerce-spa",
    title: "AT&T Enterprise E-Commerce Single Page App",
    company: "Accenture India",
    project: "Project: AT&T",
    client: "AT&T Telecommunications",
    period: "March 2022 – February 2024",
    role: "Custom Software Senior Analyst",
    summary:
      "Conceptualized and architected robust, highly responsive web UI components for AT&T's enterprise Single Page Application, translating complex telecom business rules into intuitive wireframes complying with brand identity.",
    impactMetrics: [
      { label: "QA Delivery", value: "Defect-Free", desc: "Rigorous cross-functional engineering and QA oversight" },
      { label: "Component Scale", value: "Enterprise SPA", desc: "Robust multi-tier e-commerce UI component architecture" },
      { label: "Design Alignment", value: "100% Brand", desc: "Transformed complex rules into compliant intuitive wireframes" },
    ],
    tags: ["React", "Redux", "Enterprise SPA", "AT&T Brand", "Wireframing"],
    featured: true,
    architectureDiagramType: "spa-architecture",
    problem:
      "AT&T required a modern enterprise e-commerce platform capable of rendering high-velocity checkout flows, complex bundle options, and enterprise compliance with strict brand aesthetics.",
    solution: [
      "Conceptualized and architected robust, highly responsive web UI components for AT&T's enterprise Single Page Application.",
      "Served as design and functional consultant, transforming complex business rules into intuitive wireframes complying with AT&T's brand identity.",
      "Facilitated cross-functional collaboration between engineering teams and enterprise stakeholders, ensuring defect-free delivery.",
    ],
    highlights: [
      "Guided design-to-development translation across multi-team workflows.",
      "Optimized SPA state management for enterprise e-commerce conversion paths.",
      "Maintained zero-defect standards across major release cycles.",
    ],
    techStack: ["React", "Redux", "JavaScript (ES6+)", "Sass/SCSS", "Figma", "Postman"],
  },
  {
    id: "telecom-ecommerce",
    title: "Telecom E-Commerce SPA Development",
    company: "Infosys Limited",
    project: "Project: Telecommunications",
    client: "Global Telecom Client",
    period: "August 2020 – March 2022",
    role: "Senior Systems Engineer",
    summary:
      "Spearheaded full-lifecycle development of a telecom e-commerce platform using React, Redux, Axios, and modern CSS frameworks with layout wireframing and performance tuning.",
    impactMetrics: [
      { label: "Lifecycle Lead", value: "Full-Cycle", desc: "Spearheaded design, development, wireframing & tuning" },
      { label: "State Engine", value: "Redux Architecture", desc: "Centralized client-side state for complex cart workflows" },
    ],
    tags: ["React", "Redux", "Axios", "Telecom E-Commerce", "UI Performance"],
    featured: false,
    architectureDiagramType: "spa-architecture",
    problem:
      "Telecom customer portals struggled with disjointed user journeys, slow cart calculations, and unresponsive mobile UI during peak promotional launches.",
    solution: [
      "Spearheaded full-lifecycle development of telecom e-commerce platform using React, Redux, and modern CSS.",
      "Translated complex telecom business workflows into seamless UI designs, overseeing wireframing and performance tuning.",
      "Engineered responsive UI components backed by unified API integration via Axios.",
    ],
    highlights: [
      "Layout wireframing for complex mobile-first user journeys.",
      "Performance tuning for high-traffic telecom cart checkouts.",
    ],
    techStack: ["React", "Redux", "Axios", "React-Bootstrap", "CSS3", "JavaScript"],
  },
  {
    id: "finacle-core-banking",
    title: "Finacle Core Banking UI & Quality Engineering",
    company: "EdgeVerve Limited (Infosys)",
    project: "Project: Finacle Product",
    client: "Finacle Banking Software",
    period: "August 2018 – February 2021",
    role: "Test Engineer",
    summary:
      "Executed comprehensive automated and manual UI and API test suites using Selenium, Tosca, Postman, and MySQL to safeguard core financial module stability.",
    impactMetrics: [
      { label: "Test Coverage", value: "UI & API", desc: "Automated & manual test suites across core financial modules" },
      { label: "System Stability", value: "Banking Grade", desc: "Led performance, regression, smoke, and sanity testing" },
    ],
    tags: ["Selenium", "Tosca", "Postman", "MySQL", "Banking UI", "Quality Engineering"],
    featured: false,
    architectureDiagramType: "testing-matrix",
    problem:
      "Core banking applications require absolute zero tolerance for UI and API regression defects across mission-critical financial transactions.",
    solution: [
      "Executed comprehensive automated and manual UI and API test suites using Selenium, Tosca, Postman, MySQL, and CLM.",
      "Led performance, regression, smoke, and sanity testing campaigns to safeguard system stability across core financial modules.",
    ],
    highlights: [
      "Established foundational understanding of enterprise software stability and QA methodologies.",
      "Led API verification pipelines for banking transactions.",
    ],
    techStack: ["Selenium", "Tosca", "Postman", "MySQL", "Java", "C", "CLM"],
  },
];

export const TECHNICAL_SKILLS: TechnicalSkillCategory[] = [
  {
    category: "JS Libraries & Frameworks",
    iconName: "Code2",
    skills: [
      { name: "React", level: 98, highlight: "Core Expertise" },
      { name: "Redux / State Management", level: 92 },
      { name: "TypeScript", level: 94, highlight: "Enterprise Type Safety" },
      { name: "Axios & Fetch API", level: 95 },
      { name: "Angular 2+", level: 82 },
      { name: "React-Bootstrap & Tailwind", level: 96 },
      { name: "JSX / React 19", level: 98 },
    ],
  },
  {
    category: "Web Technologies & Architecture",
    iconName: "Layers",
    skills: [
      { name: "Micro-Frontends", level: 96, highlight: "Azure UI Architecture" },
      { name: "HTML5 & CSS3 / Modern CSS", level: 98 },
      { name: "JavaScript (ES6+)", level: 98 },
      { name: "Sass / SCSS", level: 92 },
      { name: "Frontend Performance Tuning", level: 94, highlight: "30% Load Time Boost" },
    ],
  },
  {
    category: "AI & Workflow Tools (2025-2026)",
    iconName: "Sparkles",
    skills: [
      { name: "AI Agents for Workflow Automation", level: 95, highlight: "2x Productivity Gains" },
      { name: "AI-Driven UI Optimization", level: 92 },
      { name: "Figma AI Plugins & Integration", level: 90 },
      { name: "AI-Assisted Developer Onboarding", level: 94 },
    ],
  },
  {
    category: "Programming & Databases",
    iconName: "Database",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C Language", level: 78 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    category: "Environments & Tools",
    iconName: "Terminal",
    skills: [
      { name: "VS Code & Extension Pipelines", level: 98 },
      { name: "Figma (UI/UX Consultation)", level: 92 },
      { name: "Docker", level: 88 },
      { name: "Postman API Testing", level: 95 },
      { name: "Tosca & Selenium QA Automation", level: 88 },
      { name: "Eclipse / CLM", level: 82 },
    ],
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "accenture-microsoft",
    role: "React Web Development Team Lead",
    company: "Accenture India",
    project: "Project: Microsoft",
    period: "March 2024 – Present",
    location: "Hyderabad, India",
    focus: "Design & Development of Azure UI Modules",
    responsibilities: [
      "Steered a high-performing team of frontend engineers in designing and building core Azure UI modules aligned with Microsoft's strategic technical goals.",
      "Provided technical and UX design consultation during Figma design phases, seamlessly bridging client vision with frontend architecture and execution.",
      "Managed end-to-end translation of client requirements into modular, responsive, and aesthetically refined UI components with strict quality controls.",
      "Implemented state-of-the-art performance optimization techniques and micro-frontend architecture to improve responsiveness and reduce initial load times by 30%.",
    ],
    keyInnovations: {
      title: "Key Leadership & AI Innovations (2025–2026)",
      items: [
        "Productivity Acceleration: Embedded AI agents and automation tools into development and testing pipelines, achieving 2x productivity gains and significantly accelerating sprint timelines.",
        "AI-Driven Workflows & Training: Conducted technical AI enablement sessions for junior developers and onboarding teams to boost productivity and reduce time-to-market.",
        "Structured Onboarding: Architected AI-assisted onboarding frameworks, empowering new hires to seamlessly adapt to Microsoft project workflows and contribute productively from day one.",
      ],
    },
    technologies: ["React", "TypeScript", "Micro-Frontends", "AI Agents", "Figma", "VS Code", "Docker"],
  },
  {
    id: "accenture-att",
    role: "Custom Software Senior Analyst",
    company: "Accenture India",
    project: "Project: AT&T",
    period: "March 2022 – February 2024",
    location: "Hyderabad, India",
    focus: "Design & Development of AT&T E-Commerce Website",
    responsibilities: [
      "Conceptualized and architected robust, highly responsive web UI components for AT&T's enterprise Single Page Application (SPA).",
      "Served as a design and functional consultant, transforming complex business rules into intuitive wireframes complying with AT&T's brand identity.",
      "Facilitated cross-functional collaboration between engineering teams and enterprise stakeholders, ensuring defect-free delivery through rigorous QA oversight.",
    ],
    technologies: ["React", "Redux", "JavaScript (ES6+)", "Sass/SCSS", "Figma", "Postman"],
  },
  {
    id: "infosys-telecom",
    role: "Senior Systems Engineer",
    company: "Infosys Limited",
    project: "Project: Telecommunications",
    period: "August 2020 – March 2022",
    location: "Hyderabad, India",
    focus: "Telecom E-Commerce SPA Development",
    responsibilities: [
      "Spearheaded full-lifecycle development of a telecom e-commerce platform using React, Redux, Axios, and modern CSS frameworks.",
      "Translated complex telecom business workflows into seamless UI designs, overseeing layout wireframing and performance tuning.",
    ],
    technologies: ["React", "Redux", "Axios", "React-Bootstrap", "CSS3", "JavaScript"],
  },
  {
    id: "edgeverve-finacle",
    role: "Test Engineer",
    company: "EdgeVerve Limited (Infosys)",
    project: "Project: Finacle Product",
    period: "August 2018 – February 2021",
    location: "Hyderabad, India",
    focus: "UI & API Quality Engineering for Finacle Core Banking",
    responsibilities: [
      "Executed comprehensive automated and manual UI and API test suites using Selenium, Tosca, Postman, MySQL, and CLM.",
      "Led performance, regression, smoke, and sanity testing campaigns to safeguard system stability across core financial modules.",
    ],
    technologies: ["Selenium", "Tosca", "Postman", "MySQL", "Java", "C", "CLM"],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Technology (EEE)",
  institution: "JNTU(H)",
  honors: "Graduated with Distinction",
  languages: ["English", "Hindi", "Telugu"],
};

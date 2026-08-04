export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  project: string;
  client: string;
  period: string;
  role: string;
  summary: string;
  impactMetrics: { label: string; value: string; desc: string }[];
  tags: string[];
  featured: boolean;
  architectureDiagramType: "micro-frontend" | "ai-pipeline" | "spa-architecture" | "testing-matrix";
  problem: string;
  solution: string[];
  highlights: string[];
  techStack: string[];
}

export interface TechnicalSkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  project: string;
  period: string;
  location: string;
  focus: string;
  responsibilities: string[];
  keyInnovations?: {
    title: string;
    items: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  honors: string;
  languages: string[];
}

export interface AiOptimizationResult {
  source: "gemini" | "simulated";
  mode: string;
  analysis: string;
}

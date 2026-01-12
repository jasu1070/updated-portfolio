
export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  percentage?: string;
  year: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  level: number;
}

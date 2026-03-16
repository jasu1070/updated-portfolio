
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
  icon: any;
  level: number;
}

export interface PersonalInfo {
  address: string;
  languages: string[];
  dob: string;
  marital_status: string;
  nationality: string;
  gender: string;
  hobbies: string[];
}

export interface StrengthItem {
  name: string;
}

export interface ResumeData {
  name: string;
  title: string;
  experience_years: number;
  email: string;
  phone: string;
  address: string;
  profile_image: string;
  resume_url: string;
  images: {
    factory: string;
    cnc: string;
    quality: string;
    measure: string;
  };
  objective: string;
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  personal_info: PersonalInfo;
  strengths: StrengthItem[];
}

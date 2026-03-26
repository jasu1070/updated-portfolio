import React from 'react';
import { Settings, Cpu, Package, ClipboardCheck, Wrench, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { ExperienceItem, EducationItem, ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "PARMAR JASHVANTBHAI",
  title: "Production & Quality Operations Expert",
  experience_years: 9,
  email: "jashvant812@gmail.com",
  phone: "6351456773",
  address: "BADODARA, ARAVALI DISTRICT, GUJARAT, INDIA - 383315",

  profile_image: "profile/123.jpg",
  resume_url: "resume/JASHVANT.pdf",
  images: {
    factory: "generated/factory_real.png",
    cnc: "generated/cnc_real.png",
    quality: "generated/quality_real.png",
    measure: "generated/tools_real.png"
  },

  objective: "To secure a responsible position where I can apply my skills in machine operation, production quality, and technical processes, while contributing to the growth of the organization and developing my career.",
  
  skills: [
    { name: "Rewinding & Cut-Sheet Machines", icon: <Zap className="w-5 h-5" />, level: 98 },
    { name: "CNC Machine Operation", icon: <Cpu className="w-5 h-5" />, level: 95 },
    { name: "Injection & Molding Machines", icon: <Package className="w-5 h-5" />, level: 92 },
    { name: "Production & Assembly Machines", icon: <Settings className="w-5 h-5" />, level: 90 },
    { name: "Machine Setup & Adjustments", icon: <Wrench className="w-5 h-5" />, level: 95 },
    { name: "Material Loading / Handling", icon: <ClipboardCheck className="w-5 h-5" />, level: 97 },
    { name: "5S & Safety Compliance", icon: <ShieldCheck className="w-5 h-5" />, level: 100 },
    { name: "Quality Checking Instruments", icon: <Gauge className="w-5 h-5" />, level: 98 }
  ],

  strengths: [
    { name: "Quick Learner" },
    { name: "Hardworking & Disciplined" },
    { name: "Good Team Coordination" },
    { name: "Safety & Quality Focused" },
    { name: "Time Management" }
  ],

  experience: [
    {
      period: "Current",
      company: "TATA FICOSA AUTOMOTIVE SYSTEMS",
      role: "Quality Inspection Specialist",
      description: [
        "Performed in-process and final quality inspection of automotive components.",
        "Conducted visual and dimensional inspection as per control plan.",
        "Used measuring instruments such as vernier calipers, height gauges, and profile gauges.",
        "Identified defects like scratches, fitment issues, alignment problems, and cosmetic defects.",
        "Maintained quality documentation and inspection records.",
        "Ensured compliance with automotive quality standards.",
        "Supported root cause analysis for rejection reduction."
      ]
    },
    {
      period: "2025",
      company: "INNOVATIVE SOLUTIONS INDIA (FERMATOR GROUP)",
      role: "Machine Operator – Prima Power PS 1225",
      description: [
        "Operated Prima Power PS 1225 CNC punching machine for precision sheet metal fabrication.",
        "Loaded and unloaded MS/SS sheets as per production schedule.",
        "Interpreted engineering drawings and job cards before machine setup.",
        "Monitored punch tooling condition and ensured correct tool selection.",
        "Maintained dimensional accuracy using vernier calipers, micrometers, and gauges.",
        "Performed first-piece inspection before batch production.",
        "Ensured adherence to safety SOPs and machine maintenance checks.",
        "Coordinated with quality and maintenance teams for defect reduction and downtime control."
      ]
    },
    {
      period: "2022 - 2025",
      company: "SUVJAY INDIA LLP, GIDC SANAND",
      role: "Machine Operator",
      description: [
        "Operated rewinding and cut-sheet machines, ensuring accurate cutting, smooth production flow, and consistent output.",
        "Followed GMP (Good Manufacturing Practices) — maintaining hygiene, cleanliness, and controlled handling of materials.",
        "Worked strictly as per SOPs (Standard Operating Procedures) for machine operation, cleaning, and daily workflow.",
        "Performed in-process quality checks for size, alignment, product accuracy, and batch consistency.",
        "Maintained proper documentation, including production logs and machine activity records for traceability.",
        "Supported routine cleaning and preventive maintenance to keep machines reliable and reduce downtime.",
        "Coordinated effectively with Quality and Production teams to resolve issues and keep the workflow smooth."
      ]
    },
    {
      period: "2020 - 2022",
      company: "FIEM INDUSTRIES LIMITED (Tier-1 OEM Supplier)",
      role: "Machine Operator",
      description: [
        "Operated and maintained various molding machines (injection/compression) to produce high-quality automotive components.",
        "Conducted routine quality inspections using precision measuring tools such as calipers and gauges.",
        "Monitored machine operations to identify defects, performing minor troubleshooting and adjusting parameters.",
        "Ensured a safe and clean working environment by following safety protocols and 5S guidelines.",
        "Managed material handling for raw plastics, loading hoppers and documenting usage for smooth production flow.",
        "Collaborated with QA, Maintenance, and Engineering teams to resolve production issues.",
        "Trimmed excess material from molded parts and prepared finished products for packaging and dispatch.",
        "Maintained accurate production records, including quality reports and machine downtime logs."
      ]
    },
    {
      period: "2019 - 2020",
      company: "ZEETA ELECTRICAL ENGINEERING",
      role: "Production Supervisor",
      description: [
        "Manage the workflow by assigning responsibilities and preparing schedules.",
        "Guide and coach employees, monitoring their productivity.",
        "Oversee safe use of equipment and schedule regular maintenance.",
        "Perform verification of production output according to specifications."
      ]
    },
    {
      period: "2018 - 2019",
      company: "MUSCOT PUMP LIMITED, GIDC NARODA",
      role: "Store Keeper",
      description: [
        "Keep a record of sales and restock the store accordingly.",
        "Manage and train store staff.",
        "Plan promotional campaigns for new products or specials.",
        "Ensure that the store is kept clean and organized.",
        "Mediate any confrontations between staff and clients, and de-escalate the situation."
      ]
    },
    {
      period: "2017 - 2018",
      company: "Lubi Industries LLP",
      role: "CNC Machine Operator",
      description: [
        "Operated CNC turning/milling machines to produce precision pump and motor components.",
        "Set up machines, adjusted offsets, and loaded programs as per job specifications.",
        "Performed in-process quality checks using calipers, micrometers, and gauges.",
        "Monitored machining operations and made necessary adjustments to maintain accuracy.",
        "Handled material loading/unloading and maintained daily production records.",
        "Followed all safety rules and 5S standards to keep the work area clean and safe."
      ]
    },
    {
      period: "2016 - 2017",
      company: "ARVIND LIMITED",
      role: "Product Quality",
      description: [
        "Monitors the quality of incoming and outgoing products or materials for the company.",
        "Tasked with conducting tests, analyzing measurements, and overseeing production processes.",
        "Worked in assembly lines and production departments to ensure standard compliance."
      ]
    }
  ],
  education: [
    { degree: "Software and Hardware Networking (Basic)", institution: "Prakshal InfoTech", year: "2016" },
    { degree: "Diploma in Elementary College", institution: "N.H. Shah PTC College, Bayad", year: "2014", percentage: "61%" },
    { degree: "Basic Computer Course", institution: "Industrial Training Institute, Modasa", year: "2013" },
    { degree: "HSC", institution: "UB Vidhyalaya (GSHSEB)", year: "2012", percentage: "61%" },
    { degree: "SSC", institution: "UB Vidhyalaya (GSSB)", year: "2010", percentage: "51%" }
  ],
  personal_info: {
    address: "Badodara, Aravali District, Gujarat, India – 383315",
    languages: ["Hindi", "English", "Gujarati"],
    dob: "02/06/1995",
    marital_status: "Married",
    nationality: "Indian",
    gender: "Male",
    hobbies: ["Listening Music", "Traveling"]
  }
};

import React from 'react';
import { Settings, Cpu, Package, ClipboardCheck, Wrench, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { ExperienceItem, EducationItem } from './types';

export const RESUME_DATA = {
  name: "PARMAR JASHVANTBHAI",
  title: "Production & Quality Operations Expert",
  experience_years: 9,
  email: "jashvant812@gmail.com",
  phone: "6351456773",
  address: "BADODARA, ARAVALI DISTRICT, GUJARAT, INDIA",

  // ✅ ONLY LINKS UPDATED (nothing else changed)
  profile_image: "profile/123.jpg",
  resume_url: "resume/JASHVANT.pdf",

  objective: "To secure a responsible position where I can apply my skills in machine operation, production quality, and technical processes, while contributing to the growth of the organization and developing my career.",
  skills: [
    { name: "Rewinding & Cut-Sheet", icon: <Settings className="w-5 h-5" />, level: 95 },
    { name: "CNC Machine Operation", icon: <Cpu className="w-5 h-5" />, level: 90 },
    { name: "Injection & Molding", icon: <Package className="w-5 h-5" />, level: 88 },
    { name: "Production & Assembly", icon: <Zap className="w-5 h-5" />, level: 92 },
    { name: "Machine Setup", icon: <Wrench className="w-5 h-5" />, level: 90 },
    { name: "Quality Checking", icon: <Gauge className="w-5 h-5" />, level: 95 },
    { name: "5S & Safety", icon: <ShieldCheck className="w-5 h-5" />, level: 100 },
    { name: "Inventory/Store", icon: <ClipboardCheck className="w-5 h-5" />, level: 85 }
  ],
  experience: [
    {
      period: "2022 - 2025",
      company: "SUVJAY INDIA LLP",
      role: "Machine Operator",
      description: [
        "Operated rewinding and cut-sheet machines for consistent output.",
        "Strict adherence to GMP (Good Manufacturing Practices).",
        "Maintained high hygiene and controlled material handling."
      ]
    },
    {
      period: "2020 - 2022",
      company: "Fiem Industries Limited",
      role: "Machine Operator",
      description: [
        "Tier-1 OEM Supplier environment.",
        "Molding machine operation (injection/compression).",
        "Performed routine quality inspections using precision tools."
      ]
    },
    {
      period: "2019 - 2020",
      company: "ZEETA ELECTRICAL ENGINEERING",
      role: "Production Supervisor",
      description: [
        "Managed workflow and assigned responsibilities.",
        "Guided and coached employees to monitor productivity.",
        "Verified production output against strict specifications."
      ]
    },
    {
      period: "2018 - 2019",
      company: "MUSCOT PUMP LIMITED",
      role: "Store Keeper",
      description: [
        "Inventory management and sales recording.",
        "Planned promotional campaigns for new products.",
        "Mediated confrontations and de-escalated staff-client issues."
      ]
    },
    {
      period: "2017 - 2018",
      company: "Lubi Industries LLP",
      role: "CNC Machine Operator",
      description: [
        "CNC turning/milling for precision pump components.",
        "Adjusted offsets and loaded programs as per job specs.",
        "Monitored machining accuracy using calipers and micrometers."
      ]
    },
    {
      period: "2016 - 2017",
      company: "ARVIND LIMITED",
      role: "Product Quality Inspector",
      description: [
        "Monitored incoming/outgoing product quality.",
        "Conducted tests and analyzed measurements.",
        "Overseeing production line standards."
      ]
    }
  ] as ExperienceItem[],
  education: [
    { degree: "Software & Hardware Networking", institution: "Prakshal InfoTech", year: "2016" },
    { degree: "Diploma in Elementary College", institution: "N.H. Shah PTC College", year: "2014", percentage: "61%" },
    { degree: "Basic Computer Course", institution: "ITI Modasa", year: "2013" },
    { degree: "HSC", institution: "UB Vidhyalaya", year: "2012", percentage: "61%" },
    { degree: "SSC", institution: "UB Vidhyalaya", year: "2010", percentage: "51%" }
  ] as EducationItem[]
};

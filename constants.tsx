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
  images: {
    factory: "generated/factory_real.png",
    cnc: "generated/cnc_real.png",
    quality: "generated/quality_real.png",
    measure: "generated/tools_real.png"
  },

  objective: "To secure a responsible position where I can apply my skills in machine operation, production quality, and technical processes, while contributing to the growth of the organization and developing my career.",
  skills: [
    { name: "QC Quality Audit", icon: <ShieldCheck className="w-5 h-5" />, level: 98 },
    { name: "CNC Punching (Prima Power)", icon: <Cpu className="w-5 h-5" />, level: 95 },
    { name: "CNC Turning & Milling", icon: <Settings className="w-5 h-5" />, level: 92 },
    { name: "Injection & Molding", icon: <Package className="w-5 h-5" />, level: 90 },
    { name: "Rewinding & Cut-Sheet", icon: <Zap className="w-5 h-5" />, level: 95 },
    { name: "Precision Measurement", icon: <Gauge className="w-5 h-5" />, level: 97 },
    { name: "5S & Safety SOPs", icon: <Wrench className="w-5 h-5" />, level: 100 },
    { name: "Production Documentation", icon: <ClipboardCheck className="w-5 h-5" />, level: 94 }
  ],
  experience: [
    {
      period: "Current",
      company: "TATA FICOSA AUTOMOTIVE SYSTEMS",
      role: "Quality Inspection Specialist",
      description: [
        "In-process and final inspection of automotive rear-view mirror systems.",
        "Utilization of precision tools: Vernier calipers, height gauges, profile gauges.",
        "Maintaining absolute quality standards for Tier-1 automotive distribution."
      ]
    },
    {
      period: "2025",
      company: "INNOVATIVE SOLUTIONS INDIA (FERMATOR GROUP)",
      role: "CNC Machine Operator",
      description: [
        "Specialized operation of Prima Power PS 1225 (CNC Punching Machine).",
        "Sheet metal fabrication for high-precision industrial components.",
        "Blueprint interpretation and direct machine parameter adjustment."
      ]
    },
    {
      period: "2022 - 2025",
      company: "SUVJAY INDIA LLP",
      role: "Machine Operator",
      description: [
        "Operated sophisticated rewinding and cut-sheet machines.",
        "Strict adherence to GMP (Good Manufacturing Practices).",
        "Documenting production logs and conducting regular material audits."
      ]
    },
    {
      period: "2020 - 2022",
      company: "Fiem Industries Limited",
      role: "Machine Operator",
      description: [
        "Injection and compression molding in a Tier-1 OEM environment.",
        "Routine quality inspections using micrometers and precision gauges.",
        "Minimizing scrap rate through predictive machine monitoring."
      ]
    },
    {
      period: "2019 - 2020",
      company: "ZEETA ELECTRICAL ENGINEERING",
      role: "Production Supervisor",
      description: [
        "Strategic workflow management and productivity optimization.",
        "Coaching and guiding production staff on safety and quality SOPs.",
        "Verifying final assembly output against engineering specifications."
      ]
    },
    {
      period: "2018 - 2019",
      company: "MUSCOT PUMP LIMITED",
      role: "Store Keeper",
      description: [
        "Inventory logistics and comprehensive sales record management.",
        "Implementing 5S standards for material handling and storage.",
        "Promotional campaign assistance and client-staff mediation."
      ]
    },
    {
      period: "2017 - 2018",
      company: "Lubi Industries LLP",
      role: "CNC Machine Operator",
      description: [
        "CNC turning/milling for precision pump and motor components.",
        "Program loading and tool offset adjustments for extreme tolerances.",
        "Dimensional verification using high-precision digital calipers."
      ]
    },
    {
      period: "2016 - 2017",
      company: "ARVIND LIMITED",
      role: "Product Quality Inspector",
      description: [
        "Monitoring production line quality standards for incoming/outgoing goods.",
        "Conducting material strength tests and analyze complex measurements.",
        "Overseeing final quality clearance for industrial distributions."
      ]
    }
  ] as ExperienceItem[],
  education: [
    { degree: "Software & Hardware Networking", institution: "Prakshal InfoTech", year: "2016" },
    { degree: "Diploma in Elementary College", institution: "N.H. Shah PTC College", year: "2014", percentage: "61%" },
    { degree: "HSC", institution: "UB Vidhyalaya (GSHSEB)", year: "2012", percentage: "61%" },
    { degree: "SSC", institution: "UB Vidhyalaya (GSSB)", year: "2010", percentage: "51%" }
  ] as EducationItem[]
};

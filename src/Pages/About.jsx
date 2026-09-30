import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  ArrowRight
} from 'lucide-react';
import { jsPDF } from 'jspdf';

// 1. Import your image directly from the src/images directory
import profileImg from '../images/profile.jpeg'; 

export default function About() {
  // Motion variants for smooth scroll reveals
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  // Technical Skills Data (ATS Optimized)
  const technicalSkills = [
    {
      category: 'Frontend & UI Architecture',
      bullets: [
        'React.js, Next.js (App Router, Server Actions, Dynamic Routing)',
        'TypeScript for type-safe state & custom UI hook abstractions',
        'Tailwind CSS & Framer Motion for responsive design systems'
      ]
    },
    {
      category: 'Backend & Systems Engineering',
      bullets: [
        'C# / .NET Core & Java Spring Boot RESTful API engineering',
        'Relational schema design with PostgreSQL, Supabase & SQLite',
        'JWT authentication, RBAC middleware, and clean controller patterns'
      ]
    },
    {
      category: 'Cloud, DevOps & Tooling',
      bullets: [
        'Azure App Services, Static Web Apps, & cloud database hosting',
        'Git version control workflows & GitHub Actions CI/CD pipelines',
        'Postman API test suites & vector tooling (Inkscape, Canva)'
      ]
    }
  ];

  // HR-Crafted Experience Timeline Data (Reverse Chronological Order)
  const experienceTimeline = [
    {
      period: '2025 — Present',
      isPresent: true,
      role: 'Full-Stack Software Engineer',
      company: 'Independent / Software Projects',
      bullets: [
        'Architected Property Management System (PMS) using Spring Boot & PostgreSQL, implementing Spring Data JPA and RESTful APIs.',
        'Engineered FinSys application using C# .NET Core and React, delivering structured financial logging deployed on Azure App Services.',
        'Developed Wave Audio App with React Native & Expo, integrating native device audio hooks and local SQLite storage.'
      ],
      highlights: [
        'Spring Boot',
        '.NET Core',
        'Next.js',
        'React Native',
        'Azure',
        'PostgreSQL'
      ]
    },
    {
      period: '2025',
      isPresent: false,
      role: 'Software Developer Intern',
      company: 'MRI Software',
      bullets: [
        'Debugged backend REST endpoints and maintained core web application components within property software suites.',
        'Participated in daily agile standups, peer reviews, and SDLC testing routines across enterprise features.',
        'Authored technical API documentation and Postman testing suites to streamline internal developer workflows.'
      ],
      highlights: [
        'API Testing',
        'Postman',
        'Enterprise SDLC',
        'REST Services'
      ]
    },
    {
      period: '2022 — 2025',
      isPresent: false,
      role: 'Founder & Technical Operator',
      company: 'The Studio Barbershop',
      bullets: [
        'Engineered digital appointment booking workflows, reducing scheduling overhead and eliminating booking collisions.',
        'Managed day-to-day operations and customer database tracking to maximize seat occupancy and service delivery.'
      ],
      highlights: [
        'System Architecture',
        'Digital Workflows',
        'Client Scheduling'
      ]
    },
    {
      period: '2021 — 2022',
      isPresent: false,
      role: 'Data Steward',
      company: 'Medpages',
      bullets: [
        'Audited and standardized 10,000+ medical practitioner records, ensuring high data accuracy across platform directories.',
        'Executed database audit scripts and data-cleansing routines to resolve duplicates and maintain relational integrity.',
        'Collaborated with operations teams to streamline taxonomy rules and improve directory verification SLAs.'
      ],
      highlights: [
        'Data Auditing',
        'Relational Integrity',
        'Healthcare Datasets',
        'SQL'
      ]
    }
  ];

  // Education Timeline Data (Reverse Chronological Order)
  const educationTimeline = [
    {
      period: '2025 — Present',
      isPresent: true,
      degree: 'Software Engineering Technology',
      institution: 'Centennial College',
      status: 'Enrolled'
    },
    {
      period: '2022 — 2025',
      isPresent: false,
      degree: 'Diploma in Software Development',
      institution: 'Rosebank College',
      status: 'Graduated'
    },
    {
      period: '2021 — 2022',
      isPresent: false,
      degree: 'National Certificate in Systems Development',
      institution: 'Academic Institute of Excellence (AIE)',
      status: 'Graduated'
    }
  ];

  // ============================================================
  // PROGRAMMATIC PDF GENERATOR USING jsPDF
  // Generates real, selectable, ATS-readable text natively.
  // ============================================================
  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const margin = 15;
    const pageWidth = 210;
    const contentWidth = pageWidth - margin * 2;
    let y = 18;

    const checkPageBreak = (neededHeight = 10) => {
      if (y + neededHeight > 280) {
        doc.addPage();
        y = 18;
      }
    };

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(20, 20, 20);
    doc.text('Ndjadi Mwembo Bienvenue', margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('FULL-STACK SOFTWARE DEVELOPER | bivenmwembo55@gmail.com', margin, y);
    y += 8;

    doc.setDrawColor(220, 220, 220);
    doc.line(margin, y, margin + contentWidth, y);
    y += 10;

    // Technical Capabilities
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text('TECHNICAL CAPABILITIES', margin, y);
    y += 6;

    technicalSkills.forEach((skill) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(60, 60, 60);
      doc.text(skill.category, margin, y);
      y += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(80, 80, 80);

      skill.bullets.forEach((bullet) => {
        const lines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 4);
        checkPageBreak(lines.length * 4);
        doc.text(lines, margin + 2, y);
        y += lines.length * 4;
      });
      y += 2;
    });

    y += 4;
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    // Experience
    checkPageBreak(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text('PROFESSIONAL & ENGINEERING EXPERIENCE', margin, y);
    y += 6;

    experienceTimeline.forEach((exp) => {
      checkPageBreak(15);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(`${exp.role} — ${exp.company}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(120, 120, 120);
      doc.text(exp.period, margin + contentWidth, y, { align: 'right' });
      y += 5;

      doc.setTextColor(80, 80, 80);
      exp.bullets.forEach((bullet) => {
        const lines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 4);
        checkPageBreak(lines.length * 4);
        doc.text(lines, margin + 2, y);
        y += lines.length * 4;
      });
      y += 3;
    });

    y += 2;
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    // Education
    checkPageBreak(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);
    doc.text('EDUCATION & QUALIFICATIONS', margin, y);
    y += 6;

    educationTimeline.forEach((edu) => {
      checkPageBreak(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(20, 20, 20);
      doc.text(edu.degree, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(120, 120, 120);
      doc.text(edu.period, margin + contentWidth, y, { align: 'right' });
      y += 4;

      doc.setTextColor(80, 80, 80);
      doc.text(`${edu.institution} (${edu.status})`, margin, y);
      y += 6;
    });

    doc.save('Ndjadi_Mwembo_CV.pdf');
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#f8f8f8] text-zinc-900 py-12 px-4 sm:px-10 lg:px-16 font-sans border-t border-zinc-200/80"
    >
      <style>{`
        @keyframes pulse-green {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        .animate-pulse-green {
          animation: pulse-green 2s infinite;
        }
      `}</style>

      <div className="max-w-4xl mx-auto space-y-10 bg-[#f8f8f8] p-6 sm:p-10 rounded-3xl">
        {/* 1. HERO / TOP PROFILE HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80"
        >
          <div className="flex items-center space-x-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-200 overflow-hidden border border-zinc-300/80 shrink-0 shadow-xs">
              {/* 2. Using the imported image variable */}
              <img
                src={profileImg}
                alt="Ndjadi Mwembo Bienvenue"
                className="w-full h-full object-cover grayscale contrast-105"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950">
                Ndjadi Mwembo Bienvenue
              </h1>

              <p className="text-xs font-light uppercase tracking-widest text-zinc-600">
                Full-Stack Software Developer
              </p>

              <div className="flex items-center space-x-2.5 pt-2">
                <a
                  href="mailto:bivenmwembo55@gmail.com"
                  className="p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-950 hover:text-white transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ndjadi-mwembo-7b4461248?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-950 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Biven-Mwembo"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-950 hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-zinc-950 text-white border border-zinc-950 hover:bg-zinc-800 sm:bg-transparent sm:text-zinc-900 sm:border-zinc-300 sm:hover:bg-zinc-950 sm:hover:text-white sm:hover:border-zinc-950 text-xs font-light tracking-wide transition-all duration-300 shadow-xs"
            >
              <span>Contact me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* 2. TECHNICAL SKILLS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2.5">
            <Code2 className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
            <h2 className="text-xl font-light tracking-tight text-zinc-950">
              Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {technicalSkills.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-2.5 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-[10px] uppercase font-light tracking-widest text-zinc-500 block border-b border-zinc-100 pb-1.5">
                  {item.category}
                </span>

                <ul className="space-y-1.5 list-disc list-inside text-xs font-light text-zinc-700 leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="marker:text-zinc-400">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. EXPERIENCE TIMELINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2.5">
            <Briefcase className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
            <h2 className="text-xl font-light tracking-tight text-zinc-950">
              Professional & Engineering Experience
            </h2>
          </div>

          <div className="relative border-l border-zinc-300 ml-3 space-y-6 pl-6 sm:pl-8">
            {experienceTimeline.map((exp, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="relative group">
                {exp.isPresent ? (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2 w-3 h-3 rounded-full bg-emerald-500 animate-pulse-green border-2 border-[#f8f8f8]" />
                ) : (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2 w-3 h-3 rounded-full bg-zinc-400 group-hover:bg-zinc-950 transition-all duration-300 border-2 border-[#f8f8f8]" />
                )}

                <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-100 pb-2.5">
                    <div>
                      <h3 className="text-base font-normal text-zinc-950">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-light text-zinc-500">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      {exp.isPresent && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-medium tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Present</span>
                        </span>
                      )}

                      <span className="text-[11px] font-light text-zinc-500 tracking-wide uppercase">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="marker:text-zinc-400">
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.highlights.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-light bg-zinc-100 text-zinc-700 border border-zinc-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. EDUCATION TIMELINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2.5">
            <GraduationCap className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
            <h2 className="text-xl font-light tracking-tight text-zinc-950">
              Education & Qualifications
            </h2>
          </div>

          <div className="relative border-l border-zinc-300 ml-3 space-y-5 pl-6 sm:pl-8">
            {educationTimeline.map((edu, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="relative group">
                {edu.isPresent ? (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2 w-3 h-3 rounded-full bg-emerald-500 animate-pulse-green border-2 border-[#f8f8f8]" />
                ) : (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2 w-3 h-3 rounded-full bg-zinc-400 group-hover:bg-zinc-950 transition-all duration-300 border-2 border-[#f8f8f8]" />
                )}

                <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-normal text-zinc-950">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-light text-zinc-500">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2.5 shrink-0">
                    <span
                      className={`text-[10px] uppercase font-light tracking-wider px-2.5 py-0.5 rounded-full border ${
                        edu.isPresent
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium'
                          : 'bg-zinc-100 text-zinc-600 border-zinc-200/60'
                      }`}
                    >
                      {edu.status}
                    </span>

                    <span className="text-xs font-light text-zinc-500">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. DOWNLOAD CV FOOTER ACTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="pt-6 border-t border-zinc-200/80 flex justify-end"
        >
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-light tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md cursor-pointer focus:outline-none"
          >
            <Download className="w-4 h-4 text-zinc-300" />
            <span>Download CV</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Calendar, 
  MapPin,
  Code2
} from 'lucide-react';

export default function Education() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Motion variants
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

  // Detailed Academic Qualifications Data (Reverse Chronological Order)
  const educationTimeline = [
    {
      id: 'centennial',
      degree: 'Software Engineering Technology',
      credential: 'Advanced College Diploma',
      institution: 'Centennial College',
      location: 'Toronto, ON, Canada',
      period: '2025 — Present',
      status: 'Enrolled',
      isPresent: true,
      description: 'Advanced software engineering program focusing on modern enterprise architectures, cloud-native backend services, relational databases, and mobile applications.',
      coreSubjects: [
        'Enterprise Application Engineering (Java / Spring Boot & C# .NET Core)',
        'Cloud Computing & Cloud-Native Architectures (Azure & Docker)',
        'Relational Database Systems & SQL (PostgreSQL, SQLite)',
        'Cross-Platform Mobile Application Development (React Native & Expo)',
        'Software Quality Assurance, Automated Testing & CI/CD Pipelines',
        'Object-Oriented Design Principles, Software Patterns & Algorithms'
      ],
      keySkills: ['Spring Boot', '.NET Core', 'Azure', 'PostgreSQL', 'Docker', 'React Native'],
      highlights: [
        'Hands-on architecture and full-stack development of production systems',
        'Specialization in RESTful backend microservices and database design',
        'Agile development team participation, code reviews, and testing routines'
      ]
    },
    {
      id: 'rosebank',
      degree: 'Diploma in Software Development',
      credential: 'Diploma',
      institution: 'Rosebank College',
      location: 'Cape Town, South Africa',
      period: '2022 — 2025',
      status: 'Graduated',
      isPresent: false,
      description: 'Comprehensive diploma program in computer programming paradigms, software analysis, relational database schemas, and modern web application development.',
      coreSubjects: [
        'Software Engineering Fundamentals & Object-Oriented Programming (C#)',
        'Database Systems Design, Normalization & SQL Queries',
        'Web Development Foundations (HTML5, CSS3, JavaScript)',
        'Systems Analysis, Requirements Modeling & Architecture Design',
        'Event-Driven GUI Application Engineering'
      ],
      keySkills: ['C#', 'SQL', 'Web Development', 'OOP', 'Systems Analysis', 'Git'],
      highlights: [
        'Graduated with strong performance across core programming & database modules',
        'Completed capstone projects focused on relational database-driven web applications',
        'Built a solid foundation in backend architecture and structured code design'
      ]
    },
    {
      id: 'aie',
      degree: 'National Certificate in Systems Development',
      credential: 'National Certificate',
      institution: 'Academic Institute of Excellence (AIE)',
      location: 'South Africa',
      period: '2021 — 2022',
      status: 'Graduated',
      isPresent: false,
      description: 'Foundational certificate program covering systems development life cycles, programming logic, data structures, and database principles.',
      coreSubjects: [
        'Introduction to Computer Programming Logic & Algorithms',
        'Database Fundamentals & Relational Data Concepts',
        'Systems Development Life Cycle (SDLC) Methodologies',
        'IT Foundations & System Architecture'
      ],
      keySkills: ['Logic & Algorithms', 'Relational Databases', 'SDLC', 'SQL Basics'],
      highlights: [
        'Established formal foundations in computer science and logical algorithms',
        'Designed and queried initial relational database schemas'
      ]
    }
  ];

  // Applied Competencies Summary
  const focusAreas = [
    {
      title: 'Backend Systems & API Architecture',
      description: 'Building production-grade REST APIs, Spring Boot & .NET controllers, JPA/EF Core ORMs, and secure authorization middleware.'
    },
    {
      title: 'Modern Frontend Engineering',
      description: 'Crafting responsive user interfaces with Next.js, React, TypeScript, and utility-first styling with Tailwind CSS.'
    },
    {
      title: 'Relational Database Design',
      description: 'Architecting normalized schemas in PostgreSQL & SQLite, query optimization, indexing, and migration pipelines.'
    }
  ];

  return (
    <section id="education" className="relative w-full bg-[#f8f8f8] text-zinc-900 py-16 px-4 sm:px-10 lg:px-16 font-sans border-t border-zinc-200/80">
      
      {/* Styles for Pulsing Indicator Dot */}
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .animate-pulse-green {
          animation: pulse-green 2s infinite;
        }
      `}</style>

      <div className="max-w-4xl mx-auto space-y-12 bg-[#f8f8f8] p-4 sm:p-0">

        {/* 1. HEADER SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="space-y-3 pb-6 border-b border-zinc-200/80"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-[11px] font-medium text-zinc-700 tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-950" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-zinc-950">
            Education & Degrees Achieved
          </h2>
          <p className="text-sm font-light text-zinc-600 leading-relaxed max-w-2xl">
            Formal qualifications paired with practical engineering disciplines,covering enterprise software architecture, backend systems, database design, and cloud technologies.
          </p>
        </motion.div>

        {/* 2. CONNECTED VERTICAL TIMELINE SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2.5">
            <GraduationCap className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
            <h3 className="text-xl font-light tracking-tight text-zinc-950">
              Education History
            </h3>
          </div>

          {/* Vertical Timeline Line */}
          <div className="relative border-l border-zinc-300 ml-3 space-y-8 pl-6 sm:pl-8">
            {educationTimeline.map((item) => (
              <motion.div key={item.id} variants={fadeUpVariant} className="relative group">
                
                {/* Timeline Indicator Dot (Pulsing Green for Current) */}
                {item.isPresent ? (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2.5 w-3 h-3 rounded-full bg-emerald-500 animate-pulse-green border-2 border-[#f8f8f8]" />
                ) : (
                  <span className="absolute -left-[30px] sm:-left-[38px] top-2.5 w-3 h-3 rounded-full bg-zinc-400 group-hover:bg-zinc-950 transition-all duration-300 border-2 border-[#f8f8f8]" />
                )}

                {/* Timeline Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-4 hover:shadow-md transition-shadow duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-zinc-100 pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-light tracking-widest text-zinc-500 block">
                        {item.credential}
                      </span>
                      <h4 className="text-base sm:text-lg font-normal text-zinc-950">
                        {item.degree}
                      </h4>
                      <p className="text-xs font-medium text-zinc-700">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0 pt-1 sm:pt-0">
                      {item.isPresent && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-medium tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Currently Enrolled</span>
                        </span>
                      )}
                      <span className="text-[11px] font-light text-zinc-500 tracking-wide uppercase">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Location & Summary Description */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1 text-xs font-light text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.keySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-light bg-zinc-100 text-zinc-700 border border-zinc-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Detail Modal */}
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgram(item)}
                      className="text-xs font-light text-zinc-900 hover:text-zinc-600 inline-flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                      <span>View curriculum modules & achievements</span>
                    </button>

                    <div className="p-1 rounded-full bg-zinc-50 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* 3. APPLIED COMPETENCIES SUMMARY */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-5"
        >
          <div className="flex items-center space-x-2.5 border-b border-zinc-100 pb-3">
            <Code2 className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
            <h3 className="text-lg font-light tracking-tight text-zinc-950">
              Core Technical Competencies Learned
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((area, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-950">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs font-light text-zinc-600 leading-relaxed pl-3 border-l border-zinc-200">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>


      {/* 4. CURRICULUM & DETAILS MODAL */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white text-zinc-900 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-950 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center space-x-2 text-xs font-light text-zinc-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedProgram.period}</span>
                  <span>•</span>
                  <span>{selectedProgram.location}</span>
                </div>
                <h3 className="text-2xl font-light text-zinc-950 leading-tight">
                  {selectedProgram.degree}
                </h3>
                <p className="text-xs font-medium text-zinc-700">
                  {selectedProgram.institution} ({selectedProgram.credential})
                </p>
              </div>

              {/* Core Subjects Covered */}
              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <h4 className="text-xs font-normal text-zinc-950 uppercase tracking-wider flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-zinc-600" />
                  <span>Key Coursework & Curriculum Modules:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.coreSubjects.map((subject, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2.5 text-xs font-light text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program Highlights */}
              <div className="space-y-3 pt-3 border-t border-zinc-100">
                <h4 className="text-xs font-normal text-zinc-950 uppercase tracking-wider flex items-center space-x-2">
                  <Award className="w-4 h-4 text-zinc-600" />
                  <span>Key Academic Highlights:</span>
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-xs font-light text-zinc-600">
                  {selectedProgram.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="marker:text-zinc-400">
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Action Footer */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2 rounded-full bg-zinc-950 text-white text-xs font-light hover:bg-zinc-800 transition-colors"
                >
                  Close details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
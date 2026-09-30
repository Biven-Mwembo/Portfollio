import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Database, 
  Globe, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  X
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Motion variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  // Comprehensive List of Engineering Services
  const services = [
    {
      id: 'fullstack-web',
      icon: Globe,
      title: 'Full-Stack Web Applications',
      subtitle: 'Scalable, performant, and type-safe modern web platforms.',
      description: 'Design and end-to-end development of dynamic web applications built for speed, SEO, and maintainability using Next.js, React, and TypeScript.',
      deliverables: [
        'Responsive, mobile-first design systems using Tailwind CSS',
        'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
        'State management & custom React hook abstractions',
        'Headless CMS & third-party API integrations'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      highlight: 'Production-ready architecture'
    },
    {
      id: 'backend-apis',
      icon: Server,
      title: 'Backend & RESTful API Engineering',
      subtitle: 'Robust microservices, controllers, and enterprise logic.',
      description: 'Building secure, clean, and well-documented REST APIs and microservice architectures capable of handling high transaction throughput.',
      deliverables: [
        'C# .NET Core & Java Spring Boot backend implementation',
        'JWT authentication, OAuth2, and RBAC authorization',
        'Postman test suites & OpenAPI/Swagger documentation',
        'Clean Architecture, DDD & SOLID software patterns'
      ],
      techStack: ['C# .NET Core', 'Java Spring Boot', 'REST APIs', 'Postman', 'JWT'],
      highlight: 'Enterprise reliability'
    },
    {
      id: 'mobile-dev',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      subtitle: 'Native-feel iOS and Android mobile experiences.',
      description: 'Custom cross-platform mobile development using React Native and Expo, bringing your web application features seamlessly to mobile devices.',
      deliverables: [
        'Single codebase deployments for both iOS & Android',
        'Offline-first synchronization using local SQLite storage',
        'Native device integrations (Audio, Camera, Push Notifications)',
        'Fluid gestures and micro-interactions'
      ],
      techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Native Modules'],
      highlight: 'iOS & Android support'
    },
    {
      id: 'cloud-db',
      icon: Database,
      title: 'Cloud Deployment & Database Design',
      subtitle: 'Relational data modeling, cloud hosting, and DevOps.',
      description: 'Architecting resilient cloud hosting environments and designing normalized relational database schemas optimized for speed and data integrity.',
      deliverables: [
        'PostgreSQL, Supabase, and SQLite database modeling',
        'Azure App Services & Azure Static Web Apps setup',
        'CI/CD pipeline configuration with GitHub Actions',
        'Query optimization, indexing, and data migrations'
      ],
      techStack: ['Azure', 'PostgreSQL', 'Supabase', 'GitHub Actions', 'Docker'],
      highlight: 'High availability'
    },
    {
      id: 'workflow-digital',
      icon: Layers,
      title: 'Digital Systems & Operations Automation',
      subtitle: 'Custom business software and workflow engineering.',
      description: 'Transforming manual operational processes into streamlined, digital workflows—including custom booking platforms, CRM tools, and internal dashboards.',
      deliverables: [
        'Tailored booking engines and customer schedule tools',
        'Real-time admin dashboards & data analytics',
        'Data cleansing, audits, and relational integrity fixes',
        'Automated business reporting & alert systems'
      ],
      techStack: ['Custom CRMs', 'SQL Audits', 'Dashboard Systems', 'REST Services'],
      highlight: 'Business efficiency'
    },
    {
      id: 'code-review-refactor',
      icon: Code2,
      title: 'Code Audit & Modernization',
      subtitle: 'Refactoring legacy systems into modern stack architectures.',
      description: 'Evaluating existing codebases to identify performance bottlenecks, technical debt, and security vulnerabilities while implementing clean refactoring strategies.',
      deliverables: [
        'Comprehensive codebase performance & security audits',
        'Migration of legacy JavaScript to modern TypeScript',
        'API refactoring and database query optimization',
        'Implementing unit testing & automated CI checks'
      ],
      techStack: ['TypeScript', 'Refactoring', 'Unit Testing', 'CI/CD', 'Security'],
      highlight: 'Code quality'
    }
  ];

  return (
    <section id="services" className="relative w-full bg-[#f8f8f8] text-zinc-900 py-16 px-4 sm:px-10 lg:px-16 font-sans border-t border-zinc-200/80">
      
      <div className="max-w-6xl mx-auto space-y-12">

        {/* 1. HEADER SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="max-w-2xl space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300 text-[11px] font-medium text-zinc-700 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-zinc-950">
            Engineering solutions built for scale and impact.
          </h2>
          <p className="text-sm font-light text-zinc-600 leading-relaxed">
            From architecture to production deployment, I provide full-lifecycle software development tailored to complex business requirements and modern web standards.
          </p>
        </motion.div>

        {/* 2. SERVICES GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariant}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] uppercase font-light tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 pt-2">
                    <h3 className="text-lg font-normal text-zinc-950 tracking-tight group-hover:text-zinc-950">
                      {service.title}
                    </h3>
                    <p className="text-xs font-light text-zinc-500 line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-light text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-light bg-zinc-50 text-zinc-600 border border-zinc-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action / Trigger Modal */}
                <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-light text-zinc-900 hover:text-zinc-600 inline-flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>View deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                    title="Inquire about this service"
                  >
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. CALL TO ACTION BANNER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              Have a custom system or platform in mind?
            </h3>
            <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              Whether you need to architect a new Spring Boot / .NET backend, launch a Next.js web application, or build a mobile app, let’s discuss your technical architecture.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-light tracking-wide transition-all duration-300 shrink-0 shadow-md"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

      {/* 4. DELIVERABLES MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white text-zinc-900 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-950 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-light">
                  Detailed Scope
                </span>
                <h3 className="text-xl font-light text-zinc-950">
                  {selectedService.title}
                </h3>
                <p className="text-xs font-light text-zinc-600">
                  {selectedService.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2 border-t border-zinc-100">
                <h4 className="text-xs font-normal text-zinc-950 uppercase tracking-wider">
                  Key Deliverables & Included Features:
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2.5 text-xs font-light text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Action Footer */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-light hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 rounded-full bg-zinc-950 text-white text-xs font-light hover:bg-zinc-800 transition-colors inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Request My Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Cloud, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: Server,
      description: 'Architecting high-performance REST APIs, scalable services, and relational schema architectures.',
      skills: [
        { name: 'C# / .NET Core', level: 'Core Stack' },
        { name: 'Java / Spring Boot', level: 'Core Stack' },
        { name: 'RESTful API Design', level: 'Architecture' },
        { name: 'PostgreSQL & SQL', level: 'Database' },
        { name: 'Supabase & SQLite', level: 'Database' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & Mobile',
      icon: Layout,
      description: 'Crafting responsive, type-safe web interfaces and cross-platform native mobile experiences.',
      skills: [
        { name: 'React.js & TypeScript', level: 'Core Stack' },
        { name: 'Next.js (App Router)', level: 'Production' },
        { name: 'React Native & Expo', level: 'Mobile' },
        { name: 'Tailwind CSS', level: 'Styling' },
        { name: 'State Management', level: 'Patterns' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Deploying applications to cloud environments with automated workflows and robust database hosting.',
      skills: [
        { name: 'Microsoft Azure', level: 'Cloud Host' },
        { name: 'App Services & Static Apps', level: 'Deployment' },
        { name: 'CI/CD Pipelines', level: 'Automation' },
        { name: 'Git & GitHub Actions', level: 'Version Control' },
      ],
    },
    {
      id: 'design-tools',
      title: 'Design & Tools',
      icon: Wrench,
      description: 'Utilizing vector design, UI wireframing, and structured toolchains for rapid prototyping.',
      skills: [
        { name: 'Inkscape & Vector Graphics', level: 'Design' },
        { name: 'Canva & Layouts', level: 'Branding' },
        { name: 'Postman & API Testing', level: 'Tooling' },
        { name: 'Vite & Build Tools', level: 'Dev Environment' },
      ],
    },
  ];

  // Motion variants for smooth scrolling stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="w-full bg-[#f8f8f8] text-zinc-900 py-16 px-6 sm:px-12 lg:px-20 font-sans border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 text-zinc-600 mb-2">
              <span className="w-6 h-[1px] bg-zinc-800 shrink-0" />
              <span className="text-xs sm:text-sm font-light tracking-widest uppercase">Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-zinc-950">
              Skills & Tech Stack
            </h2>
          </div>
          <p className="text-zinc-600 font-light max-w-md text-xs sm:text-sm leading-relaxed">
            A comprehensive overview of technologies, frameworks, and architecture principles I apply across the full development life cycle.
          </p>
        </div>

        {/* SKILLS GRID - Tighter spacing & compact columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="flex items-center space-x-1 text-zinc-400 text-[10px] font-light tracking-wider uppercase">
                      <Layers className="w-3 h-3" />
                      <span>{category.skills.length} Items</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-light text-zinc-950 tracking-tight mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-zinc-500 font-light text-xs leading-relaxed mb-5 min-h-[36px]">
                    {category.description}
                  </p>

                  {/* Individual Skills List */}
                  <div className="space-y-1.5 border-t border-zinc-100 pt-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-zinc-50 transition-colors duration-150"
                      >
                        <span className="text-xs font-light text-zinc-800 tracking-wide truncate max-w-[140px]">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-light text-zinc-500 bg-zinc-100/80 border border-zinc-200/60 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM PHILOSOPHY BAR - Compacted */}
        <div className="mt-10 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <h4 className="text-base font-light tracking-tight text-white">
              Engineering Mindset & Scalability
            </h4>
            <p className="text-zinc-400 font-light text-xs max-w-2xl leading-relaxed">
              Prioritizing clean architecture, strict type safety, modular component structure, and predictable API endpoints over unnecessary complexity.
            </p>
          </div>
          <a
            href="#portfolio"
            className="shrink-0 px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 text-[11px] font-light tracking-widest uppercase transition-all duration-300"
          >
            See Applications
          </a>
        </div>

      </div>
    </section>
  );
}
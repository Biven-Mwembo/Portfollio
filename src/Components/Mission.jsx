import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Sparkles, Compass } from 'lucide-react';

export default function Mission() {
  const corePillars = [
    {
      icon: Code2,
      title: 'Architectural Integrity',
      description: 'Building clean, scalable backend systems with robust type-safety and predictable APIs.',
    },
    {
      icon: Target,
      title: 'User-Centric Systems',
      description: 'Bridging technical complexity with intuitive, high-performance interfaces.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Evolution',
      description: 'Constantly refining software craftsmanship and adapting modern tools to solve real-world problems.',
    },
  ];

  // --- ANIMATION VARIANTS FOR STAGGERED SCROLL ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '24px',
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="mission" className="w-full bg-[#f8f8f8] text-zinc-900 py-24 px-6 sm:px-12 lg:px-20 font-sans border-t border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION BADGE / HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="flex items-center space-x-3 text-zinc-600 mb-8"
        >
          <motion.span variants={lineVariants} className="h-[1px] bg-zinc-800 shrink-0 block" />
          <span className="text-xs sm:text-sm font-light tracking-widest uppercase">Philosophy & Vision</span>
        </motion.div>

        {/* HERO MISSION STATEMENT STATEMENT WITH SCROLL REVEAL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20"
        >
          <motion.div variants={headerVariants} className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-zinc-950 leading-[1.15]">
              To engineer seamless, full-stack digital solutions that transform complex workflows into elegant, intuitive experiences.
            </h2>
          </motion.div>

          <motion.div variants={headerVariants} className="lg:col-span-4 lg:pt-3">
            <p className="text-zinc-600 font-light text-base sm:text-lg leading-relaxed">
              Every system I build, from cloud-hosted backend REST APIs to mobile applications and digital platforms, is grounded in code quality, maintainability, and measurable impact.
            </p>
          </motion.div>
        </motion.div>

        {/* THREE CORE PILLARS GRID WITH STAGGERED MOTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={pillarVariants}
                className="group bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-xs hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500 w-fit mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="text-2xl font-light text-zinc-950 tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-light text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-10 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-light text-zinc-400 tracking-wider uppercase">
                  <span>Pillar 0{idx + 1}</span>
                  <Compass className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-950" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
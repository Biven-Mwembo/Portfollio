import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Clock, Sparkles } from 'lucide-react';
import Brands from './Brands';

export default function Portfolio() {
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 'finsys',
      title: 'FinSys',
      category: 'Financial Management Platform',
      description: 'A full-stack financial management solution built with C# Web API and React, featuring real-time transaction tracking and analytics.',
      tags: ['C#', '.NET Core', 'React', 'TypeScript', 'Azure'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      link: 'https://rouah.netlify.app/',
      isUnderDevelopment: false,
    },
    {
      id: 'microstacks',
      title: 'Microstacks',
      category: 'SaaS Platform & CRM Dashboard',
      description: 'A modern web platform and admin dashboard featuring server actions, CRM components, and dynamic routing.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Azure'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      link: 'https://microstacks.net', 
      isUnderDevelopment: false,
    },
    {
      id: 'dash',
      title: 'Dash',
      category: 'Simple Point of Sale',
      description: 'A streamlined Point of Sale system engineered for real-time order processing, inventory updates, and fast checkouts.',
      tags: ['C#', 'React', 'Supabase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1556742049-0a67414d2328?q=80&w=1000&auto=format&fit=crop',
      link: 'https://kinlight.netlify.app/login', 
      isUnderDevelopment: false,
    },
    {
      id: 'pms',
      title: 'Property Management System',
      category: 'Enterprise Management Tool',
      description: 'A full-stack property management application engineered to handle dynamic leasing tables, booking forms, and tenant records.',
      tags: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      isUnderDevelopment: true,
    },
    {
      id: 'wave',
      title: 'Wave Audio App',
      category: 'Mobile Audio Streamer',
      description: 'A cross-platform React Native audio streaming application featuring custom native modules and offline storage.',
      tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      isUnderDevelopment: true,
    },
  ];

  // Manual scroll control for arrows
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedModalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedModalProject]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleProjectClick = (project) => {
    if (project.isUnderDevelopment) {
      setSelectedModalProject(project);
    } else if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#f8f8f8] text-zinc-900 py-20 px-6 sm:px-12 lg:px-20 font-sans border-t border-zinc-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER & NAV ARROWS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-6 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 text-zinc-600 mb-2">
              <span className="w-6 h-[1px] bg-zinc-800 shrink-0" />
              <span className="text-xs sm:text-sm font-light tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-zinc-950">
              Some of my Work
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end space-x-6 w-full md:w-auto">
            <p className="text-zinc-600 font-light max-w-xs text-xs sm:text-sm leading-relaxed hidden lg:block">
              Swipe or use controls to explore full-stack systems and digital experiences.
            </p>

            {/* Horizontal Carousel Control Buttons */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-90 transition-all duration-300 focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-90 transition-all duration-300 focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* HORIZONTALLY SCROLLABLE CARDS CAROUSEL */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 px-1 -mx-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="snap-start shrink-0 w-[75vw] sm:w-[320px] md:w-[350px] lg:w-[370px] group relative flex flex-col bg-white rounded-xl overflow-hidden border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {project.isUnderDevelopment && (
                  <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-white text-[9px] font-light tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/20 flex items-center space-x-1">
                    <Clock className="w-2.5 h-2.5 text-amber-400" />
                    <span>In Progress</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-light text-zinc-500 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-zinc-950 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 font-light text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-light bg-zinc-100 text-zinc-700 border border-zinc-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <div className="group/btn inline-flex items-center space-x-1.5 text-xs font-light tracking-wide text-zinc-950 hover:text-zinc-600 transition-colors duration-200">
                    <span>{project.isUnderDevelopment ? 'View Status' : 'View Project'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- UNDER DEVELOPMENT MODAL --- */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-200/80 z-10 overflow-hidden font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 mb-5">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span className="text-[11px] font-light tracking-wide uppercase">Under Active Engineering</span>
              </div>

              {/* Modal Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-extralight tracking-tight text-zinc-950">
                  {selectedModalProject.title}
                </h3>
                <p className="text-base font-light text-zinc-800 leading-snug">
                  Project Under Development, will be launched soon.
                </p>
                <p className="text-xs font-light text-zinc-500 leading-relaxed pt-1">
                  We're putting the finishing touches on backend architecture and UI polish. Check back shortly or reach out to get early preview access.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex justify-end">
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-light tracking-wide transition-all duration-300 active:scale-95 focus:outline-none shadow-md"
                >
                  Got it
                </button>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
      <Brands />
    </section>
  );
}
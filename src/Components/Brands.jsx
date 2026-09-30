import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Brands() {
  const scrollContainerRef = useRef(null);

  const brands = [
    {
      id: 'medpages',
      name: 'Medpages International',
      location: 'Cape Town, South Africa',
      role: 'Healthcare Data & Directory Platform',
      description: 'Engineered specialized healthcare data workflows and system integration components.',
      url: 'https://www.medpages.info',
      logoText: 'MEDPAGES',
      accentColor: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'studio-barbershop',
      name: 'The Studio Barbershop',
      location: 'Cape Town, South Africa',
      role: 'Founding & Operations Management',
      description: 'Founded and managed digital booking systems, customer experience, and retail management.',
      url: 'https://studiobarbershop.netlify.app/',
      logoText: 'THE STUDIO',
      accentColor: 'from-zinc-800 to-zinc-950',
    },
    {
      id: '101avenue',
      name: '101Avenue',
      location: 'Cape Town, South Africa',
      role: 'Brand & Digital Systems',
      description: 'Designed modern digital identity elements and web solutions for premier apparel and lifestyle retail.',
      url: 'https://101avenue.com/',
      logoText: '101 AVENUE',
      accentColor: 'from-amber-600 to-neutral-900',
    },
    {
      id: 'swanked',
      name: 'Swanked Cape Town',
      location: 'Cape Town, South Africa',
      role: 'E-Commerce & Digital Identity',
      description: 'Crafted sleek fashion e-commerce interfaces, visual branding, and customer engagement platforms.',
      url: 'https://swanked.co.za/',
      logoText: 'SWANKED',
      accentColor: 'from-emerald-600 to-teal-900',
    },
  ];

  // Carousel manual controls
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // --- MOTION VARIANTS ---
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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

  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="brands" className="w-full bg-[#f8f8f8] text-zinc-900 py-24 px-6 sm:px-12 lg:px-20 font-sans border-t border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER & CONTROLS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0"
        >
          <div>
            <div className="flex items-center space-x-3 text-zinc-600 mb-3">
              <motion.span variants={lineVariants} className="h-[1px] bg-zinc-800 shrink-0 block" />
              <span className="text-xs sm:text-sm font-light tracking-widest uppercase">Collaborations & Leadership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-zinc-950">
              Brands I've Worked With
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end space-x-6 w-full md:w-auto">
            <p className="text-zinc-600 font-light max-w-xs text-xs sm:text-sm leading-relaxed hidden lg:block">
              Companies, businesses, and digital platforms I've founded, engineered for, or collaborated with.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-90 transition-all duration-300 focus:outline-none"
                aria-label="Previous brand"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 active:scale-90 transition-all duration-300 focus:outline-none"
                aria-label="Next brand"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* HORIZONTAL CAROUSEL WITH STAGGERED SCROLL ANIMATION */}
        <motion.div
          ref={scrollContainerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={carouselVariants}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1 -mx-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={cardVariants}
              className="snap-start shrink-0 w-[85vw] sm:w-[380px] md:w-[420px] group flex flex-col justify-between bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-xs hover:shadow-2xl transition-all duration-500 ease-out"
            >
              <div>
                {/* Clickable Brand Logo / Badge Box */}
                <a
                  href={brand.url}
                  target={brand.url !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group/logo relative flex items-center justify-center w-full aspect-[16/9] rounded-2xl bg-zinc-950 text-white overflow-hidden mb-8 border border-zinc-900 shadow-inner"
                >
                  {/* Subtle Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${brand.accentColor} opacity-20 group-hover/logo:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Styled Typographic Logo */}
                  <span className="relative z-10 text-2xl sm:text-3xl font-extralight tracking-[0.25em] text-white uppercase group-hover/logo:scale-105 transition-transform duration-500">
                    {brand.logoText}
                  </span>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* Brand Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-light text-zinc-500 uppercase tracking-wider">
                    <span>{brand.role}</span>
                  </div>

                  <h3 className="text-2xl font-light text-zinc-950 tracking-tight">
                    {brand.name}
                  </h3>

                  <p className="text-xs text-zinc-600 font-light tracking-wide">
                    {brand.location}
                  </p>

                  <p className="text-sm text-zinc-600 font-light leading-relaxed pt-3">
                    {brand.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={brand.url}
                  target={brand.url !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-light tracking-widest uppercase text-zinc-950 hover:text-zinc-600 transition-colors duration-200"
                >
                  <span>Explore Brand</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
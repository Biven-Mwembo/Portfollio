import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// 1. Import the image file directly
import profileImg from '../images/profile_2.jpeg';

export default function Hero() {
  const fullName = "Ndjadi Mwembo";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Reference for scroll-driven parallax
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Dynamic transforms based on scroll position
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // --- TYPEWRITER EFFECT FOR THE NAME ---
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 110);

    return () => clearInterval(timer);
  }, []);

  // --- ANIMATION VARIANTS FOR INITIAL LOAD ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '24px',
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={targetRef}
      id="hero"
      className="relative w-full min-h-screen bg-[#f8f8f8] text-zinc-900 flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans select-none"
    >
      {/* Scroll-Driven Parallax Light Glow */}
      <motion.div
        style={{ scale: glowScale, y: glowY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-white/60 rounded-full blur-3xl pointer-events-none -z-0"
      />

      {/* Main Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto"
      >
        {/* LEFT COLUMN: STATS, TYPING NAME, TAGLINE, CTA BUTTON WITH PARALLAX */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="lg:col-span-7 flex flex-col justify-between space-y-10 lg:space-y-14 py-6"
        >
          {/* Step 1: Metric Stats */}
          <motion.div
            variants={statVariants}
            className="flex items-center space-x-12 sm:space-x-16"
          >
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
                10+
              </span>
              <span className="text-xs sm:text-sm font-light text-zinc-500 mt-1 tracking-wide">
                Production Deployments
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950">
                100%
              </span>
              <span className="text-xs sm:text-sm font-light text-zinc-500 mt-1 tracking-wide">
                Client Satisfaction
              </span>
            </div>
          </motion.div>

          {/* Step 2 & 3: Typo/Typewriter Heading + Full-Stack Developer Subtitle */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extralight tracking-tighter leading-none text-zinc-950 min-h-[1.1em] flex items-center">
              <span>{typedText}</span>
              {/* Blinking Cursor removes once typing completes */}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block w-[3px] sm:w-[5px] h-[0.8em] bg-zinc-950 ml-1 sm:ml-2 rounded-full"
                />
              )}
            </h1>

            <div className="flex items-center space-x-3 text-zinc-700 pt-2">
              <motion.span
                variants={lineVariants}
                className="h-[1px] bg-zinc-800 shrink-0 block"
              />
              <motion.p
                variants={textVariants}
                className="text-base sm:text-xl font-light tracking-tight text-zinc-800"
              >
                Full-Stack Developer
              </motion.p>
            </div>
          </div>

          {/* Step 4: "More about me" CTA Button */}
          <motion.div variants={buttonVariants} className="pt-4 lg:pt-8">
            <Link
              to="/about"
              className="group inline-flex items-center space-x-3 bg-zinc-950 text-white hover:bg-zinc-800 px-7 py-3.5 rounded-full text-sm font-light tracking-wide transition-all duration-300 ease-out active:scale-95 shadow-md hover:shadow-lg focus:outline-none"
            >
              <span>More about me</span>
              <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: PORTRAIT IMAGE WITH SCROLL PARALLAX */}
        <motion.div
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end items-end h-full"
        >
          <motion.div
            variants={imageVariants}
            className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] sm:aspect-[3/4] flex items-end overflow-hidden"
          >
            {/* 2. Using the imported image variable */}
            <motion.img
              src={profileImg}
              alt="Ndjadi Mwembo"
              className="w-full h-full object-cover object-center"
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8f8f8] via-[#f8f8f8]/60 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

// Replace with your actual path where you saved nm_logo-preview.png
import logoImg from '../assets/nm_logo-preview.png';

// Custom lightweight SVG components for social brand icons
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Brands', href: '/brands' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Biven-Mwembo', icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ndjadi-mwembo-7b4461248?utm_source=share_via&utm_content=profile&utm_medium=member_ios', icon: LinkedinIcon },
    { label: 'Email', href: 'mailto:bivenmwembo55@gmail.com', icon: Mail },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="w-full bg-zinc-950 text-white border-t border-zinc-800/80 pt-20 pb-12 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
          className="space-y-16"
        >
          {/* TOP SECTION: BRAND & NAVIGATION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80 text-center md:text-left">
            
            {/* Brand Intro with Centered White Logo on Mobile */}
            <div className="md:col-span-6 flex flex-col items-center md:items-start space-y-4">
              <a href="#" onClick={scrollToTop} className="inline-block focus:outline-none">
                <div className="h-16 sm:h-20 w-56 sm:w-64 flex items-center justify-center md:justify-start relative overflow-visible">
                  <img
                    src={logoImg}
                    alt="Ndjadi Mwembo Logo"
                    className="h-full w-auto object-contain shrink-0 origin-center md:origin-left scale-[2.0] sm:scale-[1.6] translate-x-0 md:-translate-x-3 brightness-0 invert transition-transform duration-300 hover:scale-[2.1] sm:hover:scale-[1.65]"
                  />
                </div>
              </a>
              <p className="text-sm font-light text-zinc-400 max-w-md leading-relaxed pt-2">
                Full-stack software developer specialized in engineering modern web architectures, scalable backend systems, and thoughtful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-xs font-light tracking-widest uppercase text-zinc-500">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social / Connect Links */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-xs font-light tracking-widest uppercase text-zinc-500">
                Connect
              </h4>
              <ul className="space-y-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-light text-zinc-300 hover:text-white transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 text-zinc-400" />
                        <span>{social.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* BOTTOM SECTION: COPYRIGHT & BACK TO TOP */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-light text-zinc-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Ndjadi Mwembo. All rights reserved.</p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors duration-200 group focus:outline-none"
              aria-label="Back to top"
            >
              <span className="uppercase tracking-widest text-[10px]">Back to top</span>
              <div className="p-2 rounded-full border border-zinc-700 group-hover:border-white group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
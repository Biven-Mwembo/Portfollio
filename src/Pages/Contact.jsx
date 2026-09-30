import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  Globe,
  AlertCircle
} from 'lucide-react';

// Custom inline SVG icons for GitHub and LinkedIn to bypass lucide-react export issues
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // EmailJS Parameters — Replace placeholders with your EmailJS credentials
    const SERVICE_ID = 'service_8us8d98';
    const TEMPLATE_ID = 'template_5pzlhwq';
    const PUBLIC_KEY = 'YE5PqTdu_x3f4wF5k';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatus('success');
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 6000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
        }
      );
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'bivenmwembo55@gmail.com',
      href: 'mailto:bivenmwembo55@gmail.com',
      actionText: 'Send Direct Email'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, ON, Canada',
      href: null,
      actionText: 'Open to Remote & Hybrid Work'
    },
    {
      icon: Globe,
      label: 'Languages',
      value: 'English & French (Bilingual)',
      href: null,
      actionText: 'Fluent Communication'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/Biven-Mwembo',
      handle: 'github.com/Biven-Mwembo'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/ndjadi-mwembo-7b4461248?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      handle: 'linkedin.com/in/ndjadi-mwembo'
    }
  ];

  return (
    <section id="contact" className="relative w-full bg-[#f8f8f8] text-zinc-900 py-16 px-4 sm:px-10 lg:px-16 font-sans border-t border-zinc-200/80">
      
      {/* Styles for Pulsing Status Dot */}
      <style>{`
        @keyframes pulse-emerald {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .animate-pulse-emerald {
          animation: pulse-emerald 2s infinite;
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
            <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-zinc-950">
            Let's Build Something Together
          </h2>
          <p className="text-sm font-light text-zinc-600 leading-relaxed max-w-2xl">
            Whether you have a project in mind, a backend architecture opportunity, or just want to connect—feel free to drop a message.
          </p>
        </motion.div>

        {/* 2. MAIN GRID: CONTACT INFO & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeUpVariant} className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-emerald shrink-0" />
              <div>
                <span className="text-xs font-medium text-zinc-950 block">Available for Opportunities</span>
                <span className="text-[11px] font-light text-zinc-500">Open for full-stack & backend engineering roles</span>
              </div>
            </motion.div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {contactDetails.map((detail, idx) => {
                const IconComponent = detail.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={fadeUpVariant}
                    className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-1 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-2 text-zinc-500">
                      <IconComponent className="w-4 h-4 text-zinc-700" />
                      <span className="text-[10px] uppercase tracking-wider font-medium text-zinc-500">{detail.label}</span>
                    </div>
                    {detail.href ? (
                      <a 
                        href={detail.href} 
                        className="text-sm font-normal text-zinc-950 hover:text-zinc-600 transition-colors inline-block"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-normal text-zinc-950">{detail.value}</p>
                    )}
                    <span className="text-[11px] font-light text-zinc-500 block pt-1">
                      {detail.actionText}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Social & Professional Links */}
            <motion.div variants={fadeUpVariant} className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-normal text-zinc-950 uppercase tracking-wider flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-700" />
                <span>Connect Elsewhere</span>
              </h4>
              <div className="space-y-2">
                {socialLinks.map((social, sIdx) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 text-zinc-900 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-2.5">
                        <SocialIcon className="text-zinc-700 group-hover:text-zinc-950" />
                        <span className="text-xs font-medium">{social.name}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-zinc-400 group-hover:text-zinc-950 transition-colors">
                        <span className="text-[11px] font-light">{social.handle}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: EmailJS Direct Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUpVariant}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
              
              <div className="border-b border-zinc-100 pb-4 space-y-1">
                <h3 className="text-lg font-light tracking-tight text-zinc-950">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-light text-zinc-500">
                  Fill out the details below and I'll receive an email notification immediately.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-2 py-12"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-medium">Message Delivered!</h4>
                  <p className="text-xs font-light text-emerald-700 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been sent directly to my inbox and I will reply shortly.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>Failed to send message. Please verify your EmailJS keys or email me directly.</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="user_name" className="text-xs font-medium text-zinc-700 block">
                        Your Name <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        required
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="e.g., Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-light text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="user_email" className="text-xs font-medium text-zinc-700 block">
                        Email Address <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-light text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-zinc-700 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity / Technical Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-light text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-zinc-700 block">
                      Message <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of what you'd like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-light text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-light hover:bg-zinc-800 transition-colors inline-flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
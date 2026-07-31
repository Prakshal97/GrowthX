import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Filter, ChevronRight, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'wealthmine',
      client: 'WealthMine',
      industry: 'FinTech',
      title: 'Corporate Action Intelligence Platform',
      category: 'FinTech',
      image: '/images/wealthmine.png',
      description: 'Developed an AI-powered platform that automatically monitors NSE & BSE corporate announcements, classifies documents, identifies preferential issue announcements, extracts critical business information, and assists analysts in making faster investment decisions.',
      technologies: ['Python', 'Fine-tuned LLMs', 'NSE & BSE Connectors', 'NLP Extraction', 'React', 'Cloud Infrastructure'],
      outcome: '10x faster analyst triage time, 99.1% document extraction accuracy.',
      highlights: [
        'Real-time automated BSE & NSE corporate filing ingestion',
        'AI classification of preferential issues & acquisition notices',
        'Structured key metric extraction for buy-side analyst dashboards'
      ]
    },
    {
      id: 'dr-rashel',
      client: 'Dr. Rashel',
      industry: 'Beauty & Skincare',
      title: 'Interactive Hydration Challenge Game',
      category: 'Beauty',
      image: '/images/dr_rashel.png',
      description: 'Designed and developed an interactive AI-powered touchscreen game for exhibitions that increased visitor engagement through gamification and immersive digital experiences.',
      technologies: ['Interactive Kiosk Engine', 'Computer Vision', 'Gamification UI', 'Touchscreen SDK', 'Analytics Dashboard'],
      outcome: '400%+ exhibition booth footfall surge & real-time digital lead capture.',
      highlights: [
        'Gamified skincare assessment interactive touchscreen UI',
        'Instant personalized skincare product recommendation logic',
        'Exhibition analytics console for real-time crowd metrics'
      ]
    },
    {
      id: 'elite-adventures',
      client: 'Elite Adventures',
      industry: 'Exhibition & Event Solutions',
      title: 'Digital Transformation & AI Outreach Suite',
      category: 'Events',
      image: '/images/elite_adventures.png',
      description: 'Helping Elite Adventures digitally transform their business through modern software, business automation, AI outreach platforms, and automated email marketing systems.',
      technologies: ['Corporate Web Platform', 'AI Outreach Engine', 'Automated Email Systems', 'Workflow Automation', 'CRM Integration'],
      outcome: '3.5x lead conversion rate increase & 85% reduction in manual inquiry handling.',
      highlights: [
        'Premium enterprise corporate web presence',
        'Autonomous AI outbound lead generation and email workflow',
        'Custom event booking and inquiry dispatch automation'
      ]
    },
    {
      id: 'healthcare',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      title: 'Digital Solutions for 8+ Private Clinics',
      category: 'Healthcare',
      image: '/images/healthcare.png',
      description: 'Worked with 8+ doctors and private clinics to deliver full digital marketing, website development, social media management, lead generation systems, and branding.',
      technologies: ['Healthcare Portal', 'SEO Indexing Engine', 'Lead Capture Automation', 'Social Media Suite', 'Brand Guidelines'],
      outcome: '220% increase in online patient appointments across 8+ medical clinics.',
      highlights: [
        'Custom web platform built for 8+ specialty healthcare clinics',
        'Targeted local SEO dominance and patient lead capture',
        'Cohesive digital branding and automated patient follow-ups'
      ]
    }
  ];

  const categories = ['All', 'FinTech', 'Beauty', 'Events', 'Healthcare'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 bg-brand-section relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 subtle-grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Client Portfolio & Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            Real Impact Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-muted"
          >
            How our technology division delivers measurable competitive advantages to modern enterprises.
          </motion.p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-xs font-semibold text-white bg-brand-orange px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-dark px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-gray-200">
                      {project.industry}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                        {project.client}
                      </span>
                      <Award className="w-4 h-4 text-brand-green" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-orange transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-medium bg-orange-50 text-brand-orange px-2 py-1 rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Outcome Pill */}
                <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-green">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="truncate">{project.outcome}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-brand-orange transition-all flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />

    </section>
  );
}

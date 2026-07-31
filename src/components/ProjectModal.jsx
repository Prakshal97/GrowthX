import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Award, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image Bar */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-brand-orange transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.industry}
                </span>
                <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">
                  Client: {project.client}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold">{project.title}</h3>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-orange mb-2">Project Summary</h4>
              <p className="text-brand-dark text-base leading-relaxed">{project.description}</p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Technologies Employed</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-orange-50 text-brand-orange text-xs font-semibold border border-orange-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-3 text-brand-green">
                <ShieldCheck className="w-6 h-6 flex-shrink-0" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block">Measured Impact</span>
                  <span className="text-sm sm:text-base font-bold text-slate-800">{project.outcome}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-50 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-brand-dark text-white font-medium text-sm hover:bg-brand-orange transition-colors"
            >
              Close Showcase
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

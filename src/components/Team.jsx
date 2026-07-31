import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, Sparkles, Share2 } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Prakshal Jain',
      role: 'Founder & CEO',
      bio: 'Leading vision and AI product architecture across GrowthOS and Sociokraft.',
      initials: 'PJ',
    },
    {
      name: 'GrowthX Engineering',
      role: 'AI & Systems Engineering',
      bio: 'Multi-agent frameworks, fine-tuned LLMs, and enterprise platform infrastructure.',
      initials: 'GX',
    },
    {
      name: 'Sociokraft Design & Dev',
      role: 'Digital Solutions Team',
      bio: 'Crafting high-converting web applications, brand identities, and automation tools.',
      initials: 'SK',
    }
  ];

  return (
    <section className="py-24 bg-brand-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Leadership & Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            The Minds Behind GrowthX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-brand-muted"
          >
            Engineers, researchers, and strategists obsessed with redefining enterprise software.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-orange to-amber-500 text-white font-heading font-extrabold text-xl flex items-center justify-center mb-6 shadow-md shadow-brand-orange/20 group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>

                <h3 className="text-xl font-heading font-bold text-brand-dark">{member.name}</h3>
                <span className="text-xs font-semibold text-brand-orange block mb-3">{member.role}</span>
                <p className="text-xs text-brand-muted leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-brand-orange hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Connect Profile</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

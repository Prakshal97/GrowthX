import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Maximize2, Cloud, ShieldCheck, Lightbulb, Users, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export default function WhyGrowthX() {
  const pillars = [
    {
      title: 'AI First',
      desc: 'Built from the ground up around autonomous intelligent agents rather than legacy database tables.',
      icon: Bot,
      color: 'text-brand-orange bg-orange-50'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Designed to handle exponential data flows and enterprise operational volume without performance drop.',
      icon: Maximize2,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Cloud Native',
      desc: 'Microservices architecture deployed across globally distributed edge nodes with high availability.',
      icon: Cloud,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Enterprise Ready',
      desc: 'Bank-grade encryption, role-based access control, SOC2 alignment, and strict data governance.',
      icon: ShieldCheck,
      color: 'text-brand-green bg-emerald-50'
    },
    {
      title: 'Innovation Driven',
      desc: 'Continuous R&D integrating cutting-edge LLMs, multi-agent frameworks, and knowledge graphs.',
      icon: Lightbulb,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Customer Focused',
      desc: 'Deep real-world testing alongside active business partners across FinTech, Healthcare, and Retail.',
      icon: Users,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      title: 'Future Ready',
      desc: 'Modular software framework built to seamlessly integrate next-generation AI model breakthroughs.',
      icon: Compass,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      title: 'Business Automation',
      desc: 'Eliminates repetitive manual tasks, allowing human teams to focus on strategic high-leverage goals.',
      icon: Cpu,
      color: 'text-teal-600 bg-teal-50'
    }
  ];

  return (
    <section id="why-us" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            The GrowthX Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            Why Industry Leaders Choose GrowthX
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-muted"
          >
            An unyielding commitment to software excellence, intelligent automation, and measurable enterprise value.
          </motion.p>
        </div>

        {/* 8 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-semibold text-brand-green">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>GrowthX Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Send, Megaphone, DollarSign, Building2, Globe2, CheckCircle2, Clock } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      quarter: 'Q1 2026',
      title: 'GrowthOS MVP',
      desc: 'Internal release of core AI CEO agent coordinator & multi-agent pipeline framework.',
      icon: Rocket,
      status: 'Current Phase',
      completed: true,
    },
    {
      quarter: 'Q2 2026',
      title: 'AI Outreach Platform',
      desc: 'Sociokraft rollout of autonomous outbound lead discovery and email marketing workflows.',
      icon: Send,
      status: 'In Progress',
      completed: true,
    },
    {
      quarter: 'Q2 2026',
      title: 'Marketing Intelligence',
      desc: 'Autonomous multi-channel ad spend rebalancing & AI creative asset generator module.',
      icon: Megaphone,
      status: 'Upcoming',
      completed: false,
    },
    {
      quarter: 'Q3 2026',
      title: 'Finance Intelligence',
      desc: 'BSE/NSE corporate filing auto-reconciliation and cashflow prediction simulations.',
      icon: DollarSign,
      status: 'Upcoming',
      completed: false,
    },
    {
      quarter: 'Q4 2026',
      title: 'Enterprise Platform',
      desc: 'SOC2-certified multi-tenant deployment engine for Fortune 500 & scaleup SMEs.',
      icon: Building2,
      status: 'Upcoming',
      completed: false,
    },
    {
      quarter: '2027+',
      title: 'Global Expansion',
      desc: 'International enterprise partner program and multi-region cloud edge nodes.',
      icon: Globe2,
      status: 'Vision',
      completed: false,
    },
  ];

  return (
    <section id="roadmap" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Strategic Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            2026 Strategic Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-muted"
          >
            Our disciplined execution plan for scaling GrowthOS and Sociokraft solutions globally.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gray-200" />

          <div className="space-y-12">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center text-brand-orange shadow-md z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="text-xs font-mono font-bold text-brand-orange bg-orange-50 px-2.5 py-1 rounded">
                          {m.quarter}
                        </span>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                          m.completed ? 'bg-emerald-50 text-brand-green' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {m.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{m.title}</h3>
                      <p className="text-xs text-brand-muted leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

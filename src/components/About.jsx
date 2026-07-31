import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, BrainCircuit, Shield, TrendingUp, HeartHandshake, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Pushing the boundaries of applied AI and enterprise software engineering.',
      color: 'from-orange-500/10 to-amber-500/5',
      accent: 'text-brand-orange',
    },
    {
      icon: BrainCircuit,
      title: 'Intelligence',
      desc: 'Designing systems that predict outcomes, learn continuously, and decide smartly.',
      color: 'from-blue-500/10 to-indigo-500/5',
      accent: 'text-blue-600',
    },
    {
      icon: Shield,
      title: 'Trust',
      desc: 'Building reliable, enterprise-grade security and transparent AI decisions.',
      color: 'from-emerald-500/10 to-teal-500/5',
      accent: 'text-brand-green',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      desc: 'Focusing relentlessly on sustainable acceleration for every client business.',
      color: 'from-purple-500/10 to-pink-500/5',
      accent: 'text-purple-600',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Success',
      desc: 'Validating real challenges alongside healthcare, fintech, and retail partners.',
      color: 'from-red-500/10 to-rose-500/5',
      accent: 'text-rose-600',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      desc: 'Iterating fast by translating operational client insights back into product R&D.',
      color: 'from-yellow-500/10 to-amber-500/5',
      accent: 'text-amber-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-section relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-grid-bg opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            About GrowthX
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-bold text-brand-dark tracking-tight"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed"
          >
            GrowthX builds intelligent business technologies that combine artificial intelligence, automation, and modern software engineering to solve real-world business problems.
          </motion.p>
        </div>

        {/* Overview Box & Mission/Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100/80 text-brand-orange flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Integrated AI Ecosystem
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Rather than creating disconnected software, we build an integrated ecosystem of AI-powered products and services that help businesses grow smarter.
              </p>
              <p className="text-brand-muted leading-relaxed">
                By bridging flagship AI product research (GrowthOS) with real-world digital client solutions (Sociokraft), GrowthX continuously validates and refines enterprise software that works effortlessly.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-6">
              <div>
                <span className="block text-2xl font-heading font-extrabold text-brand-dark">2+</span>
                <span className="text-xs text-brand-muted uppercase font-semibold">Divisions</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <span className="block text-2xl font-heading font-extrabold text-brand-orange">100%</span>
                <span className="text-xs text-brand-muted uppercase font-semibold">AI Integrated</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <span className="block text-2xl font-heading font-extrabold text-brand-green">Enterprise</span>
                <span className="text-xs text-brand-muted uppercase font-semibold">Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm relative overflow-hidden group hover:border-brand-orange/40 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">Our Mission</span>
                  <h4 className="text-xl font-heading font-bold text-brand-dark mt-1 mb-2">
                    Empower Business Intelligence
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Empower every business with intelligent AI systems capable of making faster and smarter decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm relative overflow-hidden group hover:border-brand-green/40 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Our Vision</span>
                  <h4 className="text-xl font-heading font-bold text-brand-dark mt-1 mb-2">
                    Lead the Global AI Ecosystem
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Build the world's leading AI ecosystem for modern businesses, defining how enterprise automation operates in the next decade.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-brand-dark">Our Core Values</h3>
            <p className="text-sm text-brand-muted mt-1">The principles guiding every line of code and customer interaction</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center ${v.accent} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-brand-dark mb-2">{v.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

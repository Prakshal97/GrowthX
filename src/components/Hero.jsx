import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Cpu, Layers, Zap, CheckCircle2, ShieldCheck, TrendingUp, Network, Bot } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  const words = ["Businesses", "Operations", "Enterprise AI", "Automations"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Background Interactive AI Canvas */}
      <HeroCanvas />

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-orange/15 to-amber-300/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-brand-green/10 to-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand-orange/20 shadow-sm mb-8 hover:border-brand-orange/40 transition-all cursor-default"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-brand-orange animate-ping" />
          <span className="text-xs font-semibold text-brand-dark tracking-wide uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            AI-First Technology Ecosystem
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-brand-dark tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Building the Future of <br className="hidden sm:inline" />
          <span className="relative inline-block mt-1">
            <span className="orange-gradient-text">
              AI-Powered {words[index].substring(0, subIndex)}
            </span>
            <span className="animate-blink border-r-4 border-brand-orange ml-1">&nbsp;</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto font-normal leading-relaxed"
        >
          GrowthX is an AI-first technology company building intelligent software products and digital solutions that empower businesses through AI, automation, and data-driven decision making.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-orange-600 text-white font-semibold text-base shadow-xl shadow-brand-orange/25 hover:shadow-2xl hover:shadow-brand-orange/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Bot className="w-5 h-5 text-white/90 group-hover:rotate-12 transition-transform" />
            <span>Explore GrowthOS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#sociokraft"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-card hover:bg-white text-brand-dark font-semibold text-base border border-gray-300 hover:border-brand-orange/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Layers className="w-5 h-5 text-brand-orange" />
            <span>Explore Sociokraft</span>
          </a>
        </motion.div>

        {/* Floating Interactive Product Preview Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto relative rounded-2xl glass-panel p-4 sm:p-6 shadow-2xl border border-gray-200/90 text-left overflow-hidden group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />

          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-gray-200/80 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-mono text-gray-500 font-medium flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                GrowthOS core-engine v1.0.4 [AI CEO Orchestration]
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-medium text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              AI Ecosystem Live
            </div>
          </div>

          {/* Grid Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: AI CEO Orchestration */}
            <div className="p-4 rounded-xl bg-white/90 border border-gray-200/80 hover:border-brand-orange/30 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-orange-100/60 text-brand-orange px-2 py-0.5 rounded">
                  Coordinator
                </span>
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-sm">AI CEO Agent</h4>
              <p className="text-xs text-gray-500 mt-1">Autonomous decision sync across Marketing, Sales & Finance.</p>
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                <span>Active Workflows</span>
                <span className="font-semibold text-brand-green">100% Autonomous</span>
              </div>
            </div>

            {/* Card 2: Predictive Intelligence */}
            <div className="p-4 rounded-xl bg-white/90 border border-gray-200/80 hover:border-brand-orange/30 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-emerald-100/60 text-brand-green px-2 py-0.5 rounded">
                  Predictive
                </span>
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-sm">Revenue Simulation</h4>
              <p className="text-xs text-gray-500 mt-1">Real-time forecasting with LLM knowledge graphs.</p>
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                <span>Forecast Accuracy</span>
                <span className="font-semibold text-brand-dark">99.4%</span>
              </div>
            </div>

            {/* Card 3: Sociokraft Validations */}
            <div className="p-4 rounded-xl bg-white/90 border border-gray-200/80 hover:border-brand-orange/30 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-blue-100/60 text-blue-600 px-2 py-0.5 rounded">
                  Sociokraft
                </span>
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-sm">Real-World Insights</h4>
              <p className="text-xs text-gray-500 mt-1">Direct feedback from FinTech, Healthcare & Skincare clients.</p>
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                <span>Enterprise Deployments</span>
                <span className="font-semibold text-brand-orange">Active</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-gray-500 uppercase tracking-widest"
        >
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green" /> Enterprise Grade
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-brand-orange" /> Autonomous Multi-Agents
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" /> Proven Client ROI
          </span>
        </motion.div>

      </div>
    </section>
  );
}

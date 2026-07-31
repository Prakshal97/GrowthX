import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Cpu, TrendingUp, DollarSign, Package, Settings, BarChart3, LineChart, 
  Sparkles, Layers, ArrowRight, CheckCircle2, ShieldAlert, Globe, Code, Zap, 
  Megaphone, Search, Mail, Users, ChevronRight, Play, Terminal
} from 'lucide-react';

export default function Products() {
  const [activeAgent, setActiveAgent] = useState('ceo');

  const agents = [
    {
      id: 'ceo',
      name: 'AI CEO Coordinator',
      role: 'Master Orchestrator',
      icon: Bot,
      color: 'bg-brand-orange text-white',
      badge: 'Core Engine',
      desc: 'Orchestrates cross-departmental AI agents, evaluates strategic trade-offs, predicts quarterly targets, and automates high-level execution.',
      capabilities: ['Cross-agent task delegation', 'Automated decision recommendations', 'Strategic risk management', 'Real-time KPI synthesis']
    },
    {
      id: 'marketing',
      name: 'Marketing Intelligence',
      role: 'Growth & Acquisition',
      icon: Megaphone,
      color: 'bg-blue-500 text-white',
      badge: 'Autonomous',
      desc: 'Monitors user acquisition channels, optimizes ad budgets in real-time, generates dynamic campaign creative, and tracks CAC/ROAS.',
      capabilities: ['Real-time ad spend rebalancing', 'AI copy & banner generation', 'Multi-channel attribution', 'Competitor monitoring']
    },
    {
      id: 'sales',
      name: 'Sales Intelligence',
      role: 'Pipeline Velocity',
      icon: TrendingUp,
      color: 'bg-emerald-500 text-white',
      badge: 'Active',
      desc: 'Scores inbound leads autonomously, executes personalized multi-touch follow-ups, and predicts deal closure probabilities.',
      capabilities: ['Predictive lead scoring', 'Autonomous CRM updates', 'Outreach email sequences', 'Objection handling playbook']
    },
    {
      id: 'finance',
      name: 'Finance Intelligence',
      role: 'Cashflow & Audit',
      icon: DollarSign,
      color: 'bg-purple-500 text-white',
      badge: 'Predictive',
      desc: 'Tracks burn rate, automates invoice reconciliation, forecasts revenue, and detects financial anomalies automatically.',
      capabilities: ['Automated bookkeeping & sync', 'Predictive cashflow modeling', 'Vendor expense audit', 'Tax & compliance alerts']
    },
    {
      id: 'inventory',
      name: 'Inventory Intelligence',
      role: 'Supply Chain',
      icon: Package,
      color: 'bg-amber-500 text-white',
      badge: 'Real-Time',
      desc: 'Prevents stockouts with demand forecasting models, manages supplier reordering, and optimizes warehouse stock placement.',
      capabilities: ['Demand forecasting ML', 'Automated reorder triggers', 'Supplier performance tracking', 'Stock balance alerts']
    },
    {
      id: 'operations',
      name: 'Operations Intelligence',
      role: 'Process Efficiency',
      icon: Settings,
      color: 'bg-teal-500 text-white',
      badge: 'Automation',
      desc: 'Eliminates workflow bottlenecks, automates recurring back-office procedures, and optimizes team allocation.',
      capabilities: ['SOP workflow automation', 'Task routing & escalation', 'Employee velocity analytics', 'System integration sync']
    },
    {
      id: 'analytics',
      name: 'Simulations & BI',
      role: 'Scenario Engine',
      icon: LineChart,
      color: 'bg-indigo-500 text-white',
      badge: 'Simulations',
      desc: 'Runs "What-If" business simulations prior to major hires, price adjustments, or product launches to eliminate guesswork.',
      capabilities: ['Monte Carlo scenario modeling', 'Pricing elasticity test', 'Headcount scaling simulator', 'Executive summaries']
    }
  ];

  const sociokraftServices = [
    { title: 'Website Development', desc: 'Modern, ultra-fast web apps built with Next.js, Vite & React.', icon: Globe },
    { title: 'Custom Software Development', desc: 'Scalable cloud architecture, microservices & enterprise APIs.', icon: Code },
    { title: 'AI Solutions', desc: 'Custom LLM integrations, fine-tuning, RAG & knowledge graphs.', icon: Zap },
    { title: 'Business Automation', desc: 'Automated workflow pipelines reducing manual work by up to 80%.', icon: Settings },
    { title: 'Branding & UI/UX', desc: 'World-class design systems, visual identity & interactive mockups.', icon: Sparkles },
    { title: 'SEO & Content', desc: 'Data-driven search engine dominance and technical indexing.', icon: Search },
    { title: 'Digital Marketing', desc: 'Performance marketing campaigns designed for maximum ROI.', icon: Megaphone },
    { title: 'Email Marketing & Outreach', desc: 'Autonomous AI lead outreach systems with high deliverability.', icon: Mail },
    { title: 'Business Consulting', desc: 'Strategic technology advisory and AI transition roadmaps.', icon: Users },
  ];

  return (
    <section id="products" className="py-28 bg-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Product Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            Engineered to Run Smart Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-brand-muted"
          >
            An interconnected product structure combining our flagship autonomous operating system with client-tested digital solutions.
          </motion.p>
        </div>

        {/* ================= FLAGSHIP 1: GROWTHOS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Banner Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-orange to-orange-500 flex items-center justify-center shadow-lg shadow-brand-orange/30">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                    GrowthOS
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/20 text-brand-orange border border-brand-orange/40">
                    Flagship AI OS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">The Autonomous AI Business Operating System</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 text-amber-400 border border-amber-400/30 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Coming Soon
              </span>
            </div>
          </div>

          {/* Intro Description */}
          <div className="max-w-3xl mb-12">
            <h4 className="text-xl sm:text-2xl font-heading font-semibold text-slate-100 mb-3">
              Beyond dashboards. GrowthOS understands your business and acts.
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Instead of displaying static dashboards, GrowthOS connects Marketing, Sales, Finance, Inventory, Operations, and Analytics through specialized AI agents coordinated by an AI CEO. It predicts outcomes, recommends decisions, and automates end-to-end workflows.
            </p>
          </div>

          {/* Interactive Agent Architecture Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Agent Selector Column */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Select Specialized Agent:
              </span>
              {agents.map((ag) => {
                const Icon = ag.icon;
                const isSelected = activeAgent === ag.id;
                return (
                  <button
                    key={ag.id}
                    onClick={() => setActiveAgent(ag.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-slate-800/90 border-brand-orange shadow-md text-white'
                        : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? ag.color : 'bg-slate-800 text-slate-300'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm">{ag.name}</div>
                        <div className="text-[11px] opacity-75">{ag.role}</div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-brand-orange' : 'opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Agent Detail Display Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {(() => {
                  const ag = agents.find((a) => a.id === activeAgent) || agents[0];
                  const Icon = ag.icon;
                  return (
                    <motion.div
                      key={ag.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-xl relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ag.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-lg text-white">{ag.name}</h4>
                            <span className="text-xs text-brand-orange font-mono">{ag.role}</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                          {ag.badge}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {ag.desc}
                      </p>

                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                          Autonomous Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {ag.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                              <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mock Console Pulse */}
                      <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-brand-orange" />
                          Agent Status: Active & Syncing
                        </span>
                        <span className="text-brand-green font-semibold">Latency &lt; 12ms</span>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

          </div>

        </motion.div>

        {/* ================= DIVISION 2: SOCIOKRAFT ================= */}
        <div id="sociokraft" className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-brand-section p-8 sm:p-12 border border-gray-200/80 shadow-sm relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-white flex items-center justify-center shadow-md">
                  <Layers className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark tracking-tight">
                    Sociokraft
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted">Technology & Digital Solutions Division</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-brand-orange text-white font-medium text-xs sm:text-sm hover:bg-brand-orange-hover shadow-md transition-all flex items-center gap-2"
                >
                  <span>Inquire Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Division Concept Note */}
            <div className="max-w-3xl mb-12">
              <h4 className="text-xl sm:text-2xl font-heading font-semibold text-brand-dark mb-3">
                Real-world business solutions shaping GrowthOS.
              </h4>
              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                Sociokraft helps startups, SMEs, and enterprise clients build modern digital experiences. Through these real-world client collaborations, we validate operational bottlenecks and feed those core learnings back into building GrowthOS.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sociokraftServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h5 className="font-heading font-bold text-brand-dark text-base mb-2 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h5>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

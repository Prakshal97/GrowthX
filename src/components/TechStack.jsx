import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Cpu, BrainCircuit, Database, Network, Zap, BarChart3, Cloud, 
  ArrowRight, Check, Terminal, Layers
} from 'lucide-react';

export default function TechStack() {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      subtitle: 'Core Foundation',
      icon: Bot,
      desc: 'Formulates domain reasoning algorithms to automate complex business workflows.',
      code: `// AI Core Reasoning Loop
const decisionEngine = new GrowthAI({
  domain: "enterprise_ops",
  autonomyLevel: "high"
});`
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      subtitle: 'Pattern Recognition',
      icon: BrainCircuit,
      desc: 'Predicts trends, classifies structured & unstructured documents, and detects anomalies.',
      code: `// Predictive Trend Classifier
const forecast = await mlModel.predict({
  historicalMetrics: quarterlyData,
  confidenceTarget: 0.98
});`
    },
    {
      id: 'llm',
      name: 'Large Language Models',
      subtitle: 'Natural Language Processing',
      icon: Cpu,
      desc: 'Fine-tuned domain models for corporate announcements, contracts, and customer sentiment.',
      code: `// Corporate Document Extraction
const analysis = await llmEngine.extractFiling({
  documentType: "BSE_ANN_PREFERENTIAL_ISSUE"
});`
    },
    {
      id: 'kg',
      name: 'Knowledge Graphs',
      subtitle: 'Entity Relationships',
      icon: Database,
      desc: 'Maps interconnected business entities across inventory, customers, vendors, and finance.',
      code: `// Cross-Department Knowledge Graph
graph.connect(CustomerEntity, InvoiceEntity, {
  relationship: "AUTOPAY_VERIFIED"
});`
    },
    {
      id: 'mas',
      name: 'Multi-Agent Systems',
      subtitle: 'Swarm Orchestration',
      icon: Network,
      desc: 'Specialized AI agents coordinated by an AI CEO agent to solve multi-step challenges.',
      code: `// AI CEO Coordinator
const swarm = new AgentSwarm([
  MarketingAgent, SalesAgent, FinanceAgent
]);
await swarm.coordinateGoal("Q3_REVENUE_EXPANSION");`
    },
    {
      id: 'auto',
      name: 'Automation',
      subtitle: 'Workflow Execution',
      icon: Zap,
      desc: 'Triggers zero-human-intervention API webhooks, CRM updates, and transaction posting.',
      code: `// Autonomous Workflow Dispatch
webhook.dispatch({
  action: "EXECUTE_REORDER_SUPPLIER",
  payload: confirmedOrder
});`
    },
    {
      id: 'bi',
      name: 'Business Intelligence',
      subtitle: 'Real-Time Insights',
      icon: BarChart3,
      desc: 'Transforms raw operational streams into actionable executive decision simulations.',
      code: `// Executive Simulation Stream
const report = BI.renderSimulation({
  scenario: "PROPOSED_PRICE_INCREASE_5%"
});`
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      subtitle: 'Enterprise Scale',
      icon: Cloud,
      desc: 'High-availability Kubernetes clusters, global CDN edge caching, and SOC2 compliance.',
      code: `// Cloud Edge Deployment
export default defineEdgeConfig({
  region: "global_multi_zone",
  encryption: "AES_256_GCM"
});`
    }
  ];

  return (
    <section id="technology" className="py-28 bg-brand-section relative overflow-hidden">
      
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
            Technology Timeline & Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-dark tracking-tight"
          >
            Our Intelligent Architecture Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-brand-muted"
          >
            From core AI algorithms to cloud-native execution—how GrowthX powers modern business intelligence.
          </motion.p>
        </div>

        {/* Pipeline Horizontal Flow Tracker (Desktop) */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[900px] px-4">
            {pipeline.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 scale-110'
                          : 'bg-white text-gray-600 hover:text-brand-orange border border-gray-200 hover:border-brand-orange/40'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-heading font-bold mt-2 transition-colors ${isActive ? 'text-brand-orange' : 'text-gray-500'}`}>
                      {item.name.split(' ')[0]}
                    </span>
                  </button>
                  {idx < pipeline.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 bg-gray-200 relative">
                      <div
                        className={`h-full bg-brand-orange transition-all duration-500 ${
                          idx < activeStep ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Step Visual Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          {(() => {
            const current = pipeline[activeStep];
            const Icon = current.icon;
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Description */}
                <div className="md:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-orange uppercase">Pipeline Layer 0{activeStep + 1}</span>
                      <h3 className="text-xl font-heading font-bold text-white">{current.name}</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-brand-green">
                      <Check className="w-4 h-4" /> Production Grade
                    </span>
                    <span>•</span>
                    <span>Step {activeStep + 1} of 8</span>
                  </div>
                </div>

                {/* Right Code Visualizer */}
                <div className="md:col-span-6 rounded-2xl bg-slate-950 p-4 border border-slate-800 text-left font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-orange" />
                      growthx-{current.id}.ts
                    </span>
                    <span className="text-brand-green">OK</span>
                  </div>
                  <pre className="overflow-x-auto text-slate-300 leading-relaxed">
                    <code>{current.code}</code>
                  </pre>
                </div>

              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}

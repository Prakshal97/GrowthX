import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, Bot, Layers, MessageSquare, Mail, Building, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Sociokraft Digital Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    
    // Trigger confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F97316', '#10B981', '#1F2937']
    });
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-orange/10 via-brand-green/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3.5 py-1.5 rounded-full inline-block"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-heading font-extrabold text-brand-dark tracking-tight leading-tight"
            >
              Let's Build <br />
              <span className="orange-gradient-text">Together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-brand-muted leading-relaxed"
            >
              Whether you want early access to GrowthOS, need custom AI & digital solutions through Sociokraft, or wish to explore investment opportunities, our leadership team is ready to connect.
            </motion.p>

            {/* Direct Contact Cards */}
            <div className="pt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-brand-section border border-gray-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-brand-dark">GrowthOS Strategic Access</h4>
                  <p className="text-xs text-brand-muted">Join the beta launch list for enterprise AI OS</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-section border border-gray-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-brand-dark">Sociokraft Solutions</h4>
                  <p className="text-xs text-brand-muted">Custom web, AI outreach & software engineering</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-2xl relative overflow-hidden"
            >
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark">Message Sent Successfully!</h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto">
                    Thank you, {formData.name}. A representative from GrowthX will reach out to {formData.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', interest: 'Sociokraft Digital Solutions', message: '' }); }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-slate-100 text-brand-dark text-xs font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Prakshal Jain"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:outline-none text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company & Topic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Area of Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:outline-none text-sm transition-all text-gray-700 font-medium"
                      >
                        <option value="Sociokraft Digital Solutions">Sociokraft Digital Solutions</option>
                        <option value="GrowthOS Early Access">GrowthOS Early Access</option>
                        <option value="AI Consulting & Outreach">AI Consulting & Outreach</option>
                        <option value="Enterprise Investor Partnership">Enterprise Investor Partnership</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project goals or business operational challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 focus:border-brand-orange focus:bg-white focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange to-orange-600 text-white font-heading font-bold text-base shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Let's Build Together</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

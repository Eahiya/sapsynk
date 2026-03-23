import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react';
import AIChatWidget from './AIChatWidget';

export default function Contact() {
  const [formMode, setFormMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-white/5 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center bottom, rgba(139,92,246,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-[family-name:var(--font-mono)] tracking-[0.3em] uppercase text-[#F5F0E8]/30 mb-3">
            Let's Talk
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-[#F5F0E8]"
          >
            Qualify your business{' '}
            <span className="text-[#00FFF0]">with AI</span>
          </motion.h2>
          <p className="text-[#F5F0E8]/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Chat with Synk to help us understand your needs — or drop a message directly. Either way, we respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* LEFT: AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-[#00FFF0]" />
              <span className="text-sm font-[family-name:var(--font-mono)] text-[#00FFF0]">AI Qualification</span>
            </div>
            <AIChatWidget />
          </motion.div>

          {/* RIGHT: Form or info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 mb-0">
              <Mail className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-sm font-[family-name:var(--font-mono)] text-[#8B5CF6]">Direct Message</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-[#22C55E]/20 p-8 text-center flex-1 flex flex-col items-center justify-center"
                style={{ background: 'rgba(34,197,94,0.05)' }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#F5F0E8] mb-2">
                  Message Received!
                </h3>
                <p className="text-[#F5F0E8]/50 text-sm">We'll reach out within 24 hours.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8 flex-1"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F0E8]
                               placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#00FFF0]/30 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F0E8]
                               placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#00FFF0]/30 transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company name"
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F0E8]
                             placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#00FFF0]/30 transition-all"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your automation needs..."
                  required
                  className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F5F0E8]
                             placeholder:text-[#F5F0E8]/30 focus:outline-none focus:border-[#00FFF0]/30 transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-[#080808] bg-[#00FFF0]"
                  style={{ boxShadow: '0 0 20px rgba(0,255,240,0.2)' }}
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}

            {/* Contact info */}
            <div className="p-4 rounded-xl border border-white/5 flex items-center gap-4"
                 style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="live-dot" />
              <p className="text-xs text-[#F5F0E8]/40 font-[family-name:var(--font-mono)]">
                Response time: <span className="text-[#22C55E]">&lt; 24 hours</span> · Available globally
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

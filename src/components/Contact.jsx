import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Instagram, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { saveContactMessage } from '../services/contactService';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);

    try {
      await saveContactMessage(formState);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF2A2A', '#ffffff', '#ff6b6b'],
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message || 'Something went wrong while sending your message. Please try again or reach out directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-[#050505] flex items-center overflow-hidden border-t border-white/5">
      {/* Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-40">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          CONTACT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-[#FF2A2A]">Meaningful</span>
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-2xl">
            Have a project, full-time role, or collaborative opportunity in mind? Feel free to reach out directly.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Live Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/[0.02] text-xs text-gray-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A] animate-pulse shadow-[0_0_10px_#FF2A2A]" />
              <span className="font-semibold text-white">{PERSONAL_INFO.status}</span>
            </div>

            {/* Availability pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-gray-400">Available For:</span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.availability.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex items-center space-x-4 hover:border-[#FF2A2A]/50 transition-all group"
              >
                <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-[#FF2A2A] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                    Direct Email
                  </div>
                  <div className="text-xs text-gray-400 font-light">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex items-center space-x-4 hover:border-[#FF2A2A]/50 transition-all group"
              >
                <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-[#FF2A2A] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                    Phone / WhatsApp
                  </div>
                  <div className="text-xs text-gray-400 font-light">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-white/10 bg-[#0c0c0c] flex items-center space-x-4">
                <div className="p-3 rounded-lg border border-white/10 bg-white/5 text-[#FF2A2A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Location</div>
                  <div className="text-xs text-gray-400 font-light">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/15 bg-[#0c0c0c] text-gray-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/15 bg-[#0c0c0c] text-gray-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/15 bg-[#0c0c0c] text-gray-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#0c0c0c] shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FF2A2A]/20 border border-[#FF2A2A] text-[#FF2A2A] flex items-center justify-center mx-auto shadow-[0_0_20px_#FF2A2A]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, Shiyab will respond to your email as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs flex items-start space-x-3 animate-fade-in">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FF2A2A]" />
                      <span className="leading-relaxed">{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300">Your Name</label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/60 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2A2A] disabled:opacity-60 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-300">Email Address</label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/60 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2A2A] disabled:opacity-60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Subject</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/60 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2A2A] disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Message</label>
                    <textarea
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project or role requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/60 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2A2A] disabled:opacity-60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] hover:bg-[#ff3b3b] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

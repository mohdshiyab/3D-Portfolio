import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Quote, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, TESTIMONIAL } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import MaskedReveal from './common/MaskedReveal';
import DataEngineeringWidget from './common/DataEngineeringWidget';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          CAREER
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
              Trajectory & Credentials
            </div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">[ 06 // CAREER TRAJECTORY ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-x-3">
            <MaskedReveal>Work Experience &</MaskedReveal>
            <MaskedReveal delay={0.08}>
              <span className="text-[#FF2A2A] drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]">Education</span>
            </MaskedReveal>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
            Demonstrated engineering experience shipping features for international clients, agile internship teams, and accredited programs.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Experience & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 pb-2">
              <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#FF2A2A]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard
                    maxTilt={5}
                    scale={1.01}
                    glare={true}
                    glareOpacity={0.08}
                    className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0c0c0c] hover:border-[#FF2A2A]/50 transition-colors space-y-4 group cursor-default shadow-sm dark:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1" style={{ transform: 'translateZ(14px)' }}>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white group-hover:text-[#FF2A2A] transition-colors">
                          {item.role}
                        </h4>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center space-x-2 pt-0.5">
                          <span>{item.company}</span>
                          <span>·</span>
                          <span className="text-gray-500 dark:text-gray-400 flex items-center space-x-1 font-normal">
                            <MapPin className="w-3 h-3 text-[#FF2A2A]" />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded border self-start sm:self-auto flex items-center gap-1.5 ${
                        item.duration.includes('Present')
                          ? 'text-[#FF2A2A] bg-[#FF2A2A]/10 border-[#FF2A2A]/30 font-semibold'
                          : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 border-black/10 dark:border-white/10'
                      }`}>
                        {item.duration.includes('Present') && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-pulse" />
                        )}
                        <span>{item.duration}</span>
                      </span>
                    </div>

                    <ul className="space-y-2 pt-1" style={{ transform: 'translateZ(18px)' }}>
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2.5 text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Testimonial Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-2">
                <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#FF2A2A]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, borderColor: 'rgba(255, 42, 42, 0.4)' }}
                    className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0c0c0c] transition-all space-y-1 cursor-default shadow-sm dark:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#FF2A2A] font-semibold">{edu.status}</span>
                      <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{edu.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-950 dark:text-white pt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-light">
                      {edu.institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote Card with Tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.12}
                className="p-6 rounded-2xl border border-black/10 dark:border-white/15 bg-gray-50/80 dark:bg-gradient-to-br dark:from-[#121212] dark:to-[#0a0a0a] space-y-4 relative shadow-md dark:shadow-xl hover:border-[#FF2A2A]/40 transition-colors cursor-default"
              >
                <Quote className="w-8 h-8 text-[#FF2A2A]/30 dark:text-[#FF2A2A]/40 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-light italic leading-relaxed pt-2" style={{ transform: 'translateZ(15px)' }}>
                  "{TESTIMONIAL.quote}"
                </p>
                <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between" style={{ transform: 'translateZ(18px)' }}>
                  <div>
                    <div className="text-xs font-bold text-gray-950 dark:text-white">{TESTIMONIAL.author}</div>
                    <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{TESTIMONIAL.organization}</div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                    Client Feedback
                  </span>
                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>

        {/* Interactive Production Pipeline Simulation (Stellapps Data Engineering) */}
        <div className="space-y-4 pt-6 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white">
                Live Data Pipeline Simulation <span className="text-[#FF2A2A]">· Stellapps Technologies</span>
              </h3>
            </div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">[ 06.B // PIPELINE TELEMETRY ]</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-light max-w-3xl">
            Simulate the high-volume PostgreSQL data ingestion, Pentaho PDI transformation workflows, and automated cron execution developed during Shiyab's active Data Engineering internship.
          </p>

          <DataEngineeringWidget />
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6 pt-6 border-t border-black/10 dark:border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#FF2A2A]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-950 dark:text-white">Verified Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.1}
                  className="w-full p-4 rounded-xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0a0a0a] transition-all space-y-2 group cursor-default shadow-sm hover:border-[#FF2A2A]/40 flex flex-col justify-between"
                >
                  <div className="space-y-2" style={{ transform: 'translateZ(14px)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF2A2A]/10 text-[#FF2A2A] font-semibold border border-[#FF2A2A]/20 dark:bg-white/5 dark:border-white/10">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-gray-950 dark:text-white group-hover:text-[#FF2A2A] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-light" style={{ transform: 'translateZ(10px)' }}>
                    {cert.issuer}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

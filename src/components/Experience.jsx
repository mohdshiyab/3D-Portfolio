import React from 'react';
import { Briefcase, GraduationCap, Award, Quote, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, TESTIMONIAL } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Trajectory & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-[#FF2A2A]">Education</span>
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Demonstrated engineering experience shipping features for international clients, agile internship teams, and accredited programs.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </div>

        {/* Experience & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 pb-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FF2A2A]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] hover:border-[#FF2A2A]/40 transition-all space-y-4 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                        {item.role}
                      </h4>
                      <div className="text-xs font-semibold text-gray-300 flex items-center space-x-2">
                        <span>{item.company}</span>
                        <span>·</span>
                        <span className="text-gray-400 flex items-center space-x-1 font-normal">
                          <MapPin className="w-3 h-3 text-[#FF2A2A]" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/10 self-start sm:self-auto">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5 text-xs text-gray-300 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Testimonial Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FF2A2A]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/10 bg-[#0c0c0c] hover:border-[#FF2A2A]/40 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#FF2A2A] font-semibold">{edu.status}</span>
                      <span className="text-[11px] font-mono text-gray-400">{edu.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white pt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="p-6 rounded-2xl border border-white/15 bg-gradient-to-br from-[#121212] to-[#0a0a0a] space-y-4 relative shadow-xl">
              <Quote className="w-8 h-8 text-[#FF2A2A]/40 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-gray-200 font-light italic leading-relaxed pt-2">
                "{TESTIMONIAL.quote}"
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{TESTIMONIAL.author}</div>
                  <div className="text-[11px] font-mono text-gray-400">{TESTIMONIAL.organization}</div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                  Client Feedback
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Certifications Grid */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FF2A2A]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-[#FF2A2A]/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#FF2A2A] font-semibold border border-white/10">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">{cert.date}</span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-[#FF2A2A] transition-colors leading-snug">
                  {cert.title}
                </h4>
                <div className="text-[11px] text-gray-400 font-light">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

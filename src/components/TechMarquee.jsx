import React from 'react';
import { Database, Layout, Server, Brain, Cloud, Terminal, Sparkles, Cpu, Layers, GitBranch } from 'lucide-react';

const TECH_ITEMS = [
  { name: 'PostgreSQL', icon: Database, color: '#336791' },
  { name: 'React.js', icon: Layout, color: '#61DAFB' },
  { name: 'Next.js 14', icon: Layers, color: '#FFFFFF' },
  { name: 'Google Gemini AI', icon: Sparkles, color: '#FF2A2A' },
  { name: 'Pentaho (PDI)', icon: Cpu, color: '#00A887' },
  { name: 'Node.js', icon: Server, color: '#68A063' },
  { name: 'Linux & Bash', icon: Terminal, color: '#FCC624' },
  { name: 'Docker', icon: Cloud, color: '#2496ED' },
  { name: 'WebRTC Telemedicine', icon: Brain, color: '#FF2A2A' },
  { name: 'Tailwind CSS', icon: Layout, color: '#38BDF8' },
  { name: 'MongoDB', icon: Database, color: '#47A248' },
  { name: 'Git & GitHub', icon: GitBranch, color: '#F05032' },
  { name: 'ETL Pipelines', icon: Cpu, color: '#FF2A2A' },
];

export default function TechMarquee() {
  const repeatedItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="relative w-full py-6 overflow-hidden bg-[#070707] border-y border-white/5 select-none z-20">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* GPU Accelerated CSS Marquee Track */}
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF2A2A]/50 hover:bg-[#FF2A2A]/10 transition-colors duration-300 group cursor-default shrink-0"
            >
              <Icon className="w-4 h-4 text-[#FF2A2A] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-mono font-semibold tracking-wider text-gray-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

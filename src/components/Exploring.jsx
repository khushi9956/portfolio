import React from 'react';
import { Layers, Cpu, Brain, Flame, Sparkles } from 'lucide-react';

const exploringItems = [
  {
    title: 'Full-Stack Development',
    description: 'Advanced architecture, state management, REST APIs, and modern front-end / back-end integration.',
    icon: Layers,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400',
  },
  {
    title: 'AI-Powered Applications',
    description: 'Integrating generative AI capabilities, smart model APIs, and intelligent automated features into web software.',
    icon: Cpu,
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400',
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Classification algorithms, NLP basics, computer vision preprocessing, and statistical data modeling in Python.',
    icon: Brain,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    title: 'Modern Web Technologies',
    description: 'React ecosystems, Next.js, responsive Tailwind design, performant UX micro-interactions, and web performance.',
    icon: Flame,
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  },
];

export default function Exploring() {
  return (
    <section className="py-16 relative bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HORIZONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Currently <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Exploring</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Continuously expanding technical capabilities and discovering new horizons in modern software engineering and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploringItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/90 border border-slate-800/90 p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

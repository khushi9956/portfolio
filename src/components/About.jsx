import React from 'react';
import { Layers, Cpu, Code2, Trophy, GraduationCap, Sparkles } from 'lucide-react';

const focusCards = [
  {
    title: 'Focus',
    subtitle: 'Full-stack web development',
    description: 'Building modern, responsive web applications using React, JavaScript, Python, Django, and RESTful APIs.',
    icon: Layers,
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400',
  },
  {
    title: 'Exploring',
    subtitle: 'AI & Machine Learning',
    description: 'Investigating machine learning fundamentals, model integration, and AI-driven features in software products.',
    icon: Cpu,
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400',
  },
  {
    title: 'Languages',
    subtitle: 'Python, Java, JavaScript',
    description: 'Proficient in Python, Java, JavaScript, along with core knowledge of C and C++ programming.',
    icon: Code2,
    color: 'from-indigo-500/20 to-sky-500/20 border-indigo-500/30 text-indigo-400',
  },
  {
    title: 'Active in',
    subtitle: 'Hackathons & Competitions',
    description: 'Secured 3rd position in Web Rachaita hackathon; passionate about collaborative problem-solving and innovation.',
    icon: Trophy,
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Khushi Shukla</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I am a final-year Bachelor of Computer Applications (BCA) student at Dr. Virendra Swarup Institute Of Computer Studies. 
            My primary interest lies in software development, full-stack web development, and AI-powered applications. 
            I focus on creating intuitive user experiences, writing structured code, and implementing practical technological solutions to solve real-world problems.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                  {card.title}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {card.subtitle}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

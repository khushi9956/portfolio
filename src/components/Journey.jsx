import React from 'react';
import { Compass, Sparkles, Flag, Code, Brain, Trophy, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'BCA — Final Year',
    description: 'Enrolled in Bachelor of Computer Applications at Dr. Virendra Swarup Institute Of Computer Studies, laying strong technical foundations.',
    icon: Compass,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    step: '02',
    title: 'Building Web & Full-Stack Projects',
    description: 'Hands-on creation of responsive web platforms like The Crochet Charm (Frontend & Django backend versions) using HTML, CSS, JS, Python, and SQL.',
    icon: Code,
    color: 'from-indigo-500 to-violet-500',
  },
  {
    step: '03',
    title: 'Exploring AI & Machine Learning',
    description: 'Immersing in machine learning principles and model classification through hands-on development of Spam Email Classifier and Digit Recognizer.',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
  },
  {
    step: '04',
    title: 'Participating in Hackathons & Competitions',
    description: 'Actively taking part in competitive hackathons such as Web Rachaita (Secured 3rd position for Health & Wellness project).',
    icon: Trophy,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    step: '05',
    title: 'Building Practical Technology Solutions',
    description: 'Crafting user-centric utilities and tools like Rent Calculator to solve everyday shared-expense management challenges.',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    step: '06',
    title: 'Preparing for Software Development Opportunities',
    description: 'Refining full-stack skillsets, enhancing technical portfolio, and actively seeking software engineer and web developer roles.',
    icon: Rocket,
    color: 'from-sky-500 to-blue-500',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>TIMELINE & PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-800 group-hover:text-indigo-500/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-1">
                  Step {item.step}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
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

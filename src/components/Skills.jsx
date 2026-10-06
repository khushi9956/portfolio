import React from 'react';
import { Layout, Server, Code, Database, Wrench, Brain, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'Responsive Design', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-indigo-500 to-violet-500',
    skills: ['Python', 'Django', 'Flask', 'REST APIs', 'Server Logic', 'CRUD Architecture'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-emerald-500 to-teal-500',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  },
  {
    title: 'Database Systems',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    skills: ['SQL', 'Relational Schemas', 'Query Optimization', 'Database Management'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: ['Git', 'GitHub', 'VS Code', 'MS Excel', 'Tableau', 'Canva'],
  },
  {
    title: 'AI / Machine Learning',
    icon: Brain,
    color: 'from-rose-500 to-red-500',
    skills: [
      'Machine Learning Fundamentals',
      'AI-powered Applications',
      'Basic Model Integration',
      'Classification Algorithms',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 backdrop-blur-xl hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all"
                    >
                      <CheckCircle className="w-3 h-3 text-indigo-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

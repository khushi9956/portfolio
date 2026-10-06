import React from 'react';
import { Trophy, Award, Users, Lightbulb, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Web Rachaita Hackathon — 3rd Position',
    event: 'Allen House Institute Competition',
    description: 'Collaborated as part of a development team to design and build a Health & Wellness website under competitive time constraints, securing 3rd position overall.',
    highlights: ['Health & Wellness Web Application', 'Team Collaboration', 'Secured 3rd Position Rank'],
    icon: Trophy,
    gradient: 'from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-400',
  },
  {
    title: 'Hackathons & Innovation Competitions',
    event: 'Academic & Technical Competitions',
    description: 'Active participant in competitive hackathons and technical problem-solving events, building practical web applications and demonstrating creative teamwork.',
    highlights: ['Rapid Prototyping', 'Problem Solving', 'Technical Presentation'],
    icon: Medal,
    gradient: 'from-indigo-500/20 to-violet-500/10 border-indigo-500/40 text-indigo-400',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & <span className="bg-gradient-to-r from-amber-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Competitions</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.gradient} border shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {item.event}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 rounded-md bg-slate-950 text-xs font-medium text-slate-300 border border-slate-800"
                    >
                      {h}
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

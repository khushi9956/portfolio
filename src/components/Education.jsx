import React from 'react';
import { GraduationCap, Calendar, MapPin, Building, Sparkles } from 'lucide-react';

const educationList = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Final Year',
    institution: 'Dr. Virendra Swarup Institute Of Computer Studies',
    period: '2024 – 2027',
    description: 'Pursuing core computer application concepts, software engineering, database management systems, data structures, and web technologies.',
    highlight: 'Current Education',
  },
  {
    degree: '12th Grade (Intermediate)',
    status: 'UP Board',
    institution: 'Dr. Virendra Swarup Education Centre',
    period: '2023 – 2024',
    description: 'Completed senior secondary education under UP Board with focus on academic excellence.',
    highlight: 'Senior Secondary',
  },
  {
    degree: '10th Grade (High School)',
    status: 'UP Board',
    institution: 'Dr. Virendra Swarup Education Centre',
    period: '2021 – 2022',
    description: 'Completed secondary education under UP Board laying strong foundational skills in mathematics and science.',
    highlight: 'High School',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educational <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                      {edu.highlight}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                    <Building className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

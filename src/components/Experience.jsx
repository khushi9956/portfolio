import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'AI Intern',
    company: 'Codec Technology',
    period: 'July 2025 – Aug 2025',
    points: [
      'Developed Digit Recognizer and Spam Email Classifier machine learning projects.',
      'Gained hands-on practical experience in Python programming and AI model implementation.',
      'Analyzed data preprocessing and classification techniques for intelligent features.',
    ],
    badge: 'Technical Internship',
  },
  {
    role: 'Client Outreach Executive Intern',
    company: 'Scult India',
    period: 'Sep 2025 – Dec 2025',
    points: [
      'Managed client communication workflows and targeted lead generation.',
      'Supported business development initiatives and brand outreach strategies.',
      'Strengthened professional communication, client relations, and team coordination.',
    ],
    badge: 'Business Internship',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-1">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

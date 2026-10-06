import React from 'react';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Web Development Training',
    organization: 'skDeft',
    description: 'Comprehensive training in core web technologies including HTML, CSS, JavaScript, responsive layouts, and modern front-end fundamentals.',
    tag: 'Web Technology Training',
    gradient: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400',
  },
  {
    title: 'Django Training',
    subtitle: 'Django & Flask Training',
    organization: 'skDeft',
    description: 'Specialized training covering Django and Flask Python frameworks, back-end routing, template rendering, and RESTful web development concepts.',
    tag: 'Backend Training',
    gradient: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    title: 'Adobe Certificate in Graphic Designing',
    organization: 'Adobe',
    description: 'Training in graphic design fundamentals, visual hierarchy, branding aesthetics, and digital design tools.',
    tag: 'Design Certification',
    gradient: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Training</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                    {cert.tag}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>
                {cert.subtitle && (
                  <p className="text-xs font-medium text-slate-400 mb-2">
                    ({cert.subtitle})
                  </p>
                )}

                <p className="text-xs font-semibold text-indigo-400 mb-3">
                  Issued by: {cert.organization}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Credential</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

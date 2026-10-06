import React from 'react';
import { ExternalLink, FolderCode, Sparkles, ShoppingBag, Brain, FileSpreadsheet, Binary, CheckCircle2, ArrowUpRight, Store, Star } from 'lucide-react';
import { GithubIcon } from './Icons';

const otherProjects = [
  {
    title: 'The Crochet Charm — Django',
    category: 'Full-Stack Development',
    description: 'Django-based version of the crochet business website incorporating dynamic view templates, backend database integration, and structured URL routing.',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    github: 'https://github.com/khushi9956',
    icon: FolderCode,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-indigo-500/20 border-emerald-500/30',
  },
  {
    title: 'Spam Email Classifier',
    category: 'Machine Learning',
    description: 'Machine-learning project for spam email classification. Implemented text feature extraction and classifier models to categorize emails accurately. Developed during AI Internship at Codec Technology.',
    tech: ['Python', 'Machine Learning', 'Classification', 'NLP Fundamentals'],
    github: 'https://github.com/khushi9956',
    icon: Brain,
    gradient: 'from-violet-500/20 via-purple-500/10 to-indigo-500/20 border-violet-500/30',
  },
  {
    title: 'Digit Recognizer',
    category: 'Machine Learning',
    description: 'Machine-learning project for handwritten digit recognition. Processes pixel image input to predict digit values accurately using classification techniques. Developed during AI Internship at Codec Technology.',
    tech: ['Python', 'Machine Learning', 'Computer Vision', 'Data Preprocessing'],
    github: 'https://github.com/khushi9956',
    icon: Binary,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-sky-500/20 border-blue-500/30',
  },
  {
    title: 'Rent Calculator',
    category: 'Web Utility App',
    description: 'Practical application designed to simplify calculating and equally dividing shared expenses, rent, utilities, and communal costs among individuals.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Logic Math'],
    github: 'https://github.com/khushi9956',
    icon: FileSpreadsheet,
    gradient: 'from-amber-500/20 via-orange-500/10 to-indigo-500/20 border-amber-500/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>PORTFOLIO WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-pink-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Real-world applications, web engineering projects, and machine learning models I have created.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP FEATURED PROJECT: THE CROCHET CHARM                             */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="relative group rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-pink-500/40 transition-all duration-500 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl hover:shadow-pink-500/10 overflow-hidden">
            
            {/* Top Badge Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-indigo-500/15 border border-pink-500/30 text-pink-300 text-xs font-semibold tracking-wide">
                <Store className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Real-world project — built for my own handmade crochet business.</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>Main Highlighted Venture</span>
              </div>
            </div>

            {/* Grid Layout: Visual on Left, Details on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Mockup Container */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 group-hover:border-pink-500/50 transition-all duration-500 shadow-xl">
                  <img
                    src="/crochet-charm-preview.png"
                    alt="The Crochet Charm — Real Homepage Storefront Screenshot"
                    className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  <div className="p-3 rounded-b-2xl bg-slate-950/95 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-pink-400" />
                      The Crochet Charm — Official Storefront Homepage
                    </span>
                    <span className="text-pink-300 font-semibold text-[11px] px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/20">Real Homepage</span>
                  </div>
                </div>
              </div>

              {/* Project Case Study Details */}
              <div className="lg:col-span-6 flex flex-col items-start">
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 group-hover:text-pink-300 transition-colors">
                  The Crochet Charm
                </h3>

                {/* Key Narrative Quote */}
                <blockquote className="text-base sm:text-lg font-semibold italic text-gradient-accent mb-4 border-l-2 border-pink-500 pl-3">
                  "From a handmade business idea to a complete digital storefront."
                </blockquote>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  The Crochet Charm is my personal handmade crochet business. I conceptualized, designed, and built its website as a real-world web engineering project to showcase handcrafted items, organize custom order inquiries, and establish a professional online brand identity.
                </p>

                {/* Key Features List */}
                <div className="w-full mb-6">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                    Key Project Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>Handmade Product Catalog</span>
                    </li>
                    <li className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>Responsive Mobile Browsing</span>
                    </li>
                    <li className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>Custom Design Layout</span>
                    </li>
                    <li className="flex items-center gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>Frontend & Django Versions</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 w-full">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Python', 'Django', 'SQL', 'Responsive Design'].map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-slate-950 text-xs font-semibold text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <a
                    href="https://github.com/khushi9956/The-Crochet-Charm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-pink-600/20 transition-all hover:scale-105"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/khushi9956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
                  >
                    <span>View All Repositories</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* OTHER PROJECTS GRID                                                      */}
        {/* ========================================================================= */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FolderCode className="w-5 h-5 text-indigo-400" />
            <span>Additional Projects & Machine Learning Work</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                        {project.category}
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${project.gradient} border text-indigo-300`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800/80">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-950 text-[10px] font-medium text-slate-400 border border-slate-800/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

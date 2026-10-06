import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-blue-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
              <span>FINAL-YEAR BCA DEVELOPER</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12] mb-6">
              Turning ideas into{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-400 bg-clip-text text-transparent">
                intelligent, impactful
              </span>{' '}
              web experiences.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              I'm a final-year BCA student who builds practical web applications and explores AI-powered solutions that make software more useful and impactful.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-semibold transition-all hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href="/Khushi_Shukla_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Khushi_Shukla_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-200 border border-indigo-500/30 text-sm font-semibold transition-all hover:border-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Connect:</span>
                <a
                  href="https://github.com/khushi9956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khushi-shukl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:khushishukl185@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80 transition-all hover:scale-105"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Available for Full-Stack & AI Roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Profile Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-500" />
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/90 p-3.5 shadow-2xl backdrop-blur-xl">
                
                {/* Profile Image - Preserving raw original photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src="/khushi-profile.jpg"
                    alt="Khushi Shukla — Full-Stack Developer & AI Enthusiast"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info Card Overlay at Bottom of Image */}
                <div className="mt-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Khushi Shukla</h3>
                    <p className="text-xs text-indigo-300 font-medium">Full-Stack Developer & AI Enthusiast</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                    Final Year BCA
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

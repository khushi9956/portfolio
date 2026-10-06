import React, { useState, useEffect } from 'react';

export default function LandingIntro({ onComplete }) {
  const [stage, setStage] = useState('active'); // 'active' -> 'fading' -> 'done'

  useEffect(() => {
    // Lock body scroll during intro overlay
    document.body.style.overflow = 'hidden';

    // Sequence timing: 2.3s active, 0.7s fading -> total 3.0s
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 2300);

    const doneTimer = setTimeout(() => {
      setStage('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (stage === 'done') return;
    setStage('fading');
    setTimeout(() => {
      setStage('done');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 300);
  };

  if (stage === 'done') return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07080d] select-none cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
        stage === 'fading' ? 'opacity-0 scale-105 filter blur-md pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Click anywhere to skip intro"
    >
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/35 rounded-full blur-[140px] animate-intro-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violet-500/40 rounded-full blur-[100px] animate-intro-glow-expand pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Ambient Radial Gradient Layer */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        
        {/* Top Decorative Line / Badge */}
        <div className="flex items-center gap-3 mb-6 opacity-0 animate-intro-fade-down delay-200">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-indigo-500" />
          <span className="text-[12px] uppercase tracking-[0.35em] font-bold text-indigo-400">
            PORTFOLIO EXPERIENCE
          </span>
          <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-indigo-500" />
        </div>

        {/* Main Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-100 tracking-[0.18em] leading-none uppercase mb-4 opacity-0 animate-intro-title delay-300">
          <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
            KHUSHI
          </span>{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-sky-300 bg-clip-text text-transparent font-extrabold">
            SHUKLA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase opacity-0 animate-intro-fade-up delay-600">
          Full-Stack Developer & AI Enthusiast
        </p>

        {/* Progress Bar Indicator */}
        <div className="mt-10 w-44 h-[3px] bg-slate-800/80 rounded-full overflow-hidden opacity-0 animate-intro-fade-up delay-700">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 rounded-full animate-intro-progress" />
        </div>

      </div>

      {/* Skip Prompt */}
      <div className="absolute bottom-6 text-[11px] uppercase tracking-widest text-slate-400 font-medium opacity-80">
        Click anywhere to skip
      </div>
    </div>
  );
}

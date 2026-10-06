import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's build something <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">meaningful.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-lg">
            Have a project in mind, an open software opportunity, or just want to connect? Reach out anytime!
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="flex flex-col gap-4">
                
                {/* Email */}
                <a
                  href="mailto:khushishukl185@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl hover:border-indigo-500/40 transition-all"
                >
                  <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">Email Me</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      khushishukl185@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+916387296785"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl hover:border-indigo-500/40 transition-all"
                >
                  <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">Phone</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      +91 6387296785
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/khushi9956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl hover:border-indigo-500/40 transition-all"
                >
                  <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">GitHub</span>
                    <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      github.com/khushi9956
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/khushi-shukl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl hover:border-indigo-500/40 transition-all"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">LinkedIn</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      linkedin.com/in/khushi-shukl
                    </span>
                  </div>
                </a>

              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-indigo-300">Fast Response Guarantee:</span> Direct emails receive responses within 24 hours.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the fields below to send a message draft directly to Khushi.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                    Thank you for reaching out, <span className="font-semibold text-emerald-300">{formData.name}</span>! You can click below to dispatch your message via your default mail app or write directly to <span className="underline">khushishukl185@gmail.com</span>.
                  </p>
                  <a
                    href={`mailto:khushishukl185@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="text-xs text-slate-400 underline mt-2 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'What kind of roles am I looking for?',
    answer: 'I am looking for entry-level / junior software engineering roles, including Full-Stack Web Developer, Frontend Developer, Backend Developer, or Associate Software Engineer positions where I can apply my skills in React, Python, Django, SQL, and AI integration to build impactful web applications.',
  },
  {
    question: 'What technologies do I work with?',
    answer: 'My core stack includes HTML, CSS, JavaScript, React, and Next.js for front-end development; Python, Django, Flask, and REST APIs for back-end development; SQL for databases; and tools like Git, GitHub, VS Code, MS Excel, Tableau, and Canva.',
  },
  {
    question: 'Do I work with AI?',
    answer: 'Yes! I explore AI and machine learning fundamentals, including basic model integration, classification algorithms, and building AI-powered applications such as Spam Email Classifiers and Digit Recognizer models developed during my AI internship at Codec Technology.',
  },
  {
    question: 'What kind of projects have I built?',
    answer: 'I have built responsive web platforms like The Crochet Charm (both pure front-end and full-stack Django versions), machine-learning projects (Spam Email Classifier, Digit Recognizer), shared expense utility tools (Rent Calculator), and a 3rd-position award-winning Health & Wellness website (Web Rachaita hackathon).',
  },
  {
    question: 'How can someone contact me?',
    answer: 'You can reach out directly via email at khushishukl185@gmail.com, connect on LinkedIn at linkedin.com/in/khushi-shukl, view my code on GitHub at github.com/khushi9956, or use the interactive contact form on this website.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>QUICK ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 overflow-hidden backdrop-blur-xl transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white hover:text-indigo-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600/20 text-indigo-400 border-indigo-500/30' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

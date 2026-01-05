
import React from 'react';
import CreationComposer from './CreationComposer';

const HERO_SUGGESTIONS = [
  { label: "Remove background", desc: "Instantly isolate your subject with AI edge refinement" },
  { label: "YouTube Thumbnail", desc: "Optimize framing and contrast for high click-through rates" },
  { label: "Instagram Post", desc: "Square crop and enhance for mobile social feeds" },
  { label: "Brand Presets", desc: "Apply consistent styles, colors, and shadows instantly" }
];

const Hero: React.FC = () => {
  return (
    <header className="relative pt-20 pb-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-square bg-indigo-100 rounded-full blur-[120px] opacity-40 -z-10" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-50 -z-10" />

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-100 shadow-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Always Connected Productivity</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900 max-w-5xl mx-auto">
          From Pixels to <span className="gradient-text">Productivity</span> in One Click.
        </h1>
        
        {/* New Creation Composer */}
        <div className="mb-16">
          <CreationComposer />
          
          {/* Quick Action Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {HERO_SUGGESTIONS.map((s) => (
              <button 
                key={s.label}
                title={s.desc}
                className="px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-full text-[11px] font-bold text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-all"
              >
                {s.label}
              </button>
            ))}
            <div 
              className="px-3 py-1.5 flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tighter"
              title="Global command palette for rapid actions"
            >
              <span className="px-1.5 py-0.5 border border-slate-200 rounded">⌘</span>
              <span className="px-1.5 py-0.5 border border-slate-200 rounded">K</span>
              <span className="ml-1">to activate</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative glass-card rounded-[2.5rem] p-4 shadow-2xl overflow-hidden border border-white/40">
            <div className="bg-slate-900 rounded-[2rem] aspect-[21/9] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/pixmain/1200/600" 
                  alt="Pixzio Interface" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6 text-left">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">Smart Context Engine</h3>
                    <p className="text-white/60 text-sm max-w-sm">Automatically recalibrating YouTube thumbnail composition based on high-contrast design principles.</p>
                  </div>
                  <div className="flex gap-4">
                    <div 
                      className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white text-xs font-bold cursor-help"
                      title="Statistical certainty of the AI analysis"
                    >
                      Confidence: 99.4%
                    </div>
                    <div 
                      className="bg-indigo-600 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-lg shadow-indigo-500/30 cursor-help"
                      title="Changes applied automatically based on best practices"
                    >
                      Auto-Applied
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

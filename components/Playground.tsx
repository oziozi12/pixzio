
import React, { useState, useEffect } from 'react';
import { ContextMode, Variant } from '../types';
import { Icons } from './constants';

const DEMO_VARIANTS: Variant[] = [
  { id: 1, name: 'Original', imageUrl: 'https://picsum.photos/seed/pix1/800/800', lighting: 'Natural', crop: 'None' },
  { id: 2, name: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/pix2/800/800', lighting: 'Warm', crop: 'Center' },
  { id: 3, name: 'Cyberpunk', imageUrl: 'https://picsum.photos/seed/pix3/800/800', lighting: 'Neon Blue', crop: 'Tight' },
];

const CONTEXT_METRICS: Record<ContextMode, { contrast: string, sharpness: string, margin: string, focus: string }> = {
  [ContextMode.INSTAGRAM]: { contrast: "+12%", sharpness: "+20%", margin: "8px", focus: "Center" },
  [ContextMode.YOUTUBE]: { contrast: "+35%", sharpness: "+45%", margin: "24px", focus: "Rule of Thirds" },
  [ContextMode.PRODUCT]: { contrast: "+5%", sharpness: "+60%", margin: "0px", focus: "Subject Lock" },
  [ContextMode.PORTFOLIO]: { contrast: "Flat", sharpness: "Native", margin: "10%", focus: "Golden Ratio" }
};

const CONTEXT_DESCRIPTIONS: Record<ContextMode, string> = {
  [ContextMode.INSTAGRAM]: "Optimizes framing to 1:1 and applies high-saturation sharpening for mobile scrolling.",
  [ContextMode.YOUTUBE]: "Resizes to 16:9 and boosts subject contrast for high-impact visibility.",
  [ContextMode.PRODUCT]: "Adjusts for 4:5 vertical display with commercial-grade lighting and centering.",
  [ContextMode.PORTFOLIO]: "Presets to 3:4 aspect with professional color grading and high-res edge preservation."
};

const Playground: React.FC = () => {
  const [activeContext, setActiveContext] = useState<ContextMode>(ContextMode.INSTAGRAM);
  const [showBgRemoved, setShowBgRemoved] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(DEMO_VARIANTS[0]);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    setIsSyncing(true);
    const timer = setTimeout(() => setIsSyncing(false), 800);
    return () => clearTimeout(timer);
  }, [activeContext, selectedVariant]);

  const getCanvasStyles = () => {
    switch(activeContext) {
      case ContextMode.INSTAGRAM: return 'aspect-[1/1] w-full max-w-[400px]';
      case ContextMode.YOUTUBE: return 'aspect-[16/9] w-full';
      case ContextMode.PRODUCT: return 'aspect-[4/5] w-full max-w-[320px]';
      case ContextMode.PORTFOLIO: return 'aspect-[3/4] w-full max-w-[300px]';
      default: return 'aspect-square';
    }
  };

  return (
    <section id="playground" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Interactive Laboratory</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Smart Context Playground</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium">
            Test how our <b>Smart Context Engine</b> re-calculates image parameters 
            based on the target platform and creative intent.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Controls Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Icons.Target /> Target Context
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.values(ContextMode).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setActiveContext(mode)}
                    title={CONTEXT_DESCRIPTIONS[mode]}
                    className={`px-4 py-4 rounded-2xl text-[11px] font-bold transition-all border ${
                      activeContext === mode 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 scale-[1.02]' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Icons.Scissors /> Background Lab
              </h3>
              <div 
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${showBgRemoved ? 'bg-indigo-600 border-indigo-500 shadow-lg' : 'bg-white border-slate-200'}`}
                title="Uses edge-detection AI to isolate the subject from its environment"
                onClick={() => setShowBgRemoved(!showBgRemoved)}
              >
                <span className={`text-sm font-bold ${showBgRemoved ? 'text-white' : 'text-slate-700'}`}>Remove Background</span>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${showBgRemoved ? 'bg-white/20' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${showBgRemoved ? 'left-7 bg-white' : 'left-1 bg-slate-400'}`} />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Local Processing Active
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Icons.Layers /> Variant Generator
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {DEMO_VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    title={`Switch to ${v.name} style variant`}
                    className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all relative group ${
                      selectedVariant.id === v.id ? 'border-indigo-500 scale-110 shadow-xl' : 'border-white/10 opacity-50 grayscale'
                    }`}
                  >
                    <img src={v.imageUrl} alt={v.name} className="w-full h-full object-cover" />
                    {selectedVariant.id === v.id && <div className="absolute inset-0 bg-indigo-600/10" />}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                 <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-white/40 uppercase">Active Variant</span>
                    <span className="text-indigo-400">{selectedVariant.name}</span>
                 </div>
                 <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-white/40 uppercase">Lighting</span>
                    <span className="text-white">{selectedVariant.lighting}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Canvas Display */}
          <div className="lg:col-span-8 flex justify-center items-center bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl border-8 border-slate-800">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            {/* Syncing Overlay */}
            {isSyncing && (
                <div className="absolute inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Recalibrating Context...</span>
                </div>
            )}

            {/* Context Frame */}
            <div className={`transition-all duration-1000 ease-in-out bg-slate-800 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative ${getCanvasStyles()}`}>
              <img 
                src={selectedVariant.imageUrl} 
                alt="Demo" 
                className={`w-full h-full object-cover transition-all duration-1000 ${showBgRemoved ? 'grayscale brightness-150' : ''}`}
              />
              
              {/* Scanline Effect during Sync */}
              {isSyncing && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent h-1/2 w-full animate-[scan_0.8s_linear_infinite] pointer-events-none" />
              )}

              {showBgRemoved && (
                <div className="absolute inset-0 bg-transparent flex items-center justify-center p-8 text-center pointer-events-none">
                  <div className="bg-indigo-600/90 backdrop-blur-xl text-white px-6 py-3 rounded-full text-xs font-black shadow-2xl border border-white/20 uppercase tracking-widest animate-pulse">
                    AI Mask Active
                  </div>
                </div>
              )}
              
              {/* AI Diagnostic HUD */}
              <div className="absolute top-4 left-4 space-y-2 pointer-events-none">
                 <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-3">
                    <span className="text-[9px] font-black text-white/40 uppercase">Contrast</span>
                    <span className="text-[10px] font-bold text-green-400">{CONTEXT_METRICS[activeContext].contrast}</span>
                 </div>
                 <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-3">
                    <span className="text-[9px] font-black text-white/40 uppercase">Sharpness</span>
                    <span className="text-[10px] font-bold text-green-400">{CONTEXT_METRICS[activeContext].sharpness}</span>
                 </div>
              </div>

              {/* Overlays for visualization */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                <div className="bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <p className="text-[9px] text-white/40 font-black uppercase tracking-widest">Target Asset</p>
                  </div>
                  <p className="text-sm text-white font-bold">{activeContext}</p>
                  <p className="text-[10px] text-white/40 mt-1 font-medium italic">Focal Point: {CONTEXT_METRICS[activeContext].focus}</p>
                </div>
                
                <div className="flex gap-2">
                    <button className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/10 text-white transition-all flex items-center justify-center pointer-events-auto">
                      <Icons.Save />
                    </button>
                    <button className="w-12 h-12 bg-indigo-600 hover:bg-indigo-500 backdrop-blur-md rounded-2xl text-white transition-all flex items-center justify-center shadow-lg shadow-indigo-600/20 pointer-events-auto">
                      <Icons.ChevronDown />
                    </button>
                </div>
              </div>

              {/* Safe Zone Visualizers */}
              <div className="absolute inset-0 border-[24px] border-white/5 pointer-events-none opacity-50" />
            </div>

            {/* Floating Model Badge */}
            <div className="absolute top-12 right-12 hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">Logic Engine</span>
                </div>
                <div className="space-y-1">
                   <p className="text-sm font-bold text-white">Gemini 3 Flash</p>
                   <p className="text-[10px] text-white/40 font-medium">99.8% Analysis Confidence</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                   <div className="flex justify-between items-center text-[9px] font-bold">
                      <span className="text-white/20 uppercase">Response Time</span>
                      <span className="text-indigo-400">142ms</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -50%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 150%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Playground;

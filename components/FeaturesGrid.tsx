import React from 'react';
import { FEATURES, Icons } from './constants';

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'target': return <Icons.Target />;
    case 'scissors': return <Icons.Scissors />;
    case 'layers': return <Icons.Layers />;
    case 'text-cursor': return <Icons.TextCursor />;
    case 'save': return <Icons.Save />;
    case 'video': return <Icons.Video />;
    case 'wifi-off': return <Icons.WifiOff />;
    case 'eye': return <Icons.Eye />;
    case 'graduation-cap': return <Icons.GraduationCap />;
    case 'image': return <Icons.Image />;
    default: return <Icons.Check />;
  }
};

const FeatureCard: React.FC<{ feature: typeof FEATURES[0], className?: string, isHero?: boolean, reversed?: boolean }> = ({ feature, className = "", isHero = false, reversed = false }) => (
  <div className={`group relative bg-white rounded-[3rem] border border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-500 overflow-hidden ${className}`}>
    <div className={`flex flex-col h-full ${isHero ? (reversed ? 'md:flex-row-reverse' : 'md:flex-row') : ''}`}>
      {/* Content Side */}
      <div className={`p-10 md:p-16 flex flex-col justify-center ${isHero ? 'md:w-1/2' : 'w-full'}`}>
        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <FeatureIcon icon={feature.icon} />
        </div>
        <h3 className={`${isHero ? 'text-3xl md:text-4xl' : 'text-xl'} font-black mb-4 text-slate-900 tracking-tight`}>{feature.title}</h3>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed max-w-md">{feature.description}</p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {feature.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
              <div className="mt-0.5 text-indigo-500 flex-shrink-0">
                <Icons.Check />
              </div>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual Side (Hero Only) */}
      {isHero && (
        <div className="md:w-1/2 bg-slate-50 relative min-h-[400px] overflow-hidden border-l border-slate-100 flex items-center justify-center">
           <div className="absolute inset-0 p-10">
              <div className="w-full h-full bg-white rounded-[2rem] shadow-inner border border-slate-200 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                 {/* Grid BG */}
                 <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                 
                 {/* Specific Visual Logic */}
                 {feature.id === 'smart-context' ? (
                   <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="relative w-full h-full flex items-center justify-center">
                         {/* Morphing Canvas */}
                         <div className="relative border-2 border-indigo-600 rounded-xl bg-slate-50 shadow-2xl transition-all duration-[2000ms] ease-in-out animate-[morph_6s_infinite] overflow-hidden">
                            {/* Focal Point Detection */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                               <div className="w-8 h-8 border border-indigo-500/50 rounded-full flex items-center justify-center animate-pulse">
                                  <div className="w-1 h-1 bg-indigo-600 rounded-full" />
                               </div>
                               <div className="absolute -top-8 -left-8 text-[8px] font-black text-indigo-600 uppercase tracking-tighter whitespace-nowrap">Focal Point Locked</div>
                            </div>
                            {/* Inner Guide Mesh */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
                               {[...Array(9)].map((_, i) => (
                                 <div key={i} className="border border-indigo-200" />
                               ))}
                            </div>
                            {/* Sample Content Representation */}
                            <div className="w-full h-full flex items-center justify-center p-4">
                               <div className="text-slate-200 text-6xl group-hover:scale-110 transition-transform duration-[2000ms]"><Icons.Image /></div>
                            </div>
                         </div>
                         
                         {/* Floating Context Labels */}
                         <div className="absolute top-4 left-4 flex gap-2">
                            <div className="px-3 py-1 bg-slate-900 rounded-full text-[9px] font-bold text-white uppercase tracking-widest animate-[fade_6s_infinite]">YouTube 16:9</div>
                            <div className="px-3 py-1 bg-indigo-600 rounded-full text-[9px] font-bold text-white uppercase tracking-widest animate-[fade_6s_infinite_reverse]">Instagram 1:1</div>
                         </div>
                      </div>
                   </div>
                 ) : feature.id === 'content-pipeline' ? (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="relative w-full h-full">
                            {/* Central Image Node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="w-20 h-20 bg-white border-2 border-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center text-indigo-600 group-hover:rotate-12 transition-transform duration-500">
                                    <Icons.Image />
                                </div>
                            </div>

                            {/* Radiating Lines & Output Nodes */}
                            {[
                                { pos: 'top-10 left-10', label: '#Trending', icon: <Icons.TextCursor /> },
                                { pos: 'top-10 right-10', label: 'Alt Text', icon: <Icons.Check /> },
                                { pos: 'bottom-10 left-10', label: 'SEO Meta', icon: <Icons.Target /> },
                                { pos: 'bottom-10 right-10', label: 'Caption', icon: <Icons.Save /> }
                            ].map((node, i) => (
                                <React.Fragment key={i}>
                                    {/* Connecting Line (SVG) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                        <line 
                                            x1="50%" y1="50%" 
                                            x2={node.pos.includes('left') ? '20%' : '80%'} 
                                            y2={node.pos.includes('top') ? '20%' : '80%'} 
                                            stroke="#4f46e5" 
                                            strokeWidth="2" 
                                            strokeDasharray="4 4"
                                        />
                                    </svg>
                                    {/* Moving Packet */}
                                    <div 
                                        className={`absolute w-2 h-2 bg-indigo-500 rounded-full blur-[2px] animate-[packet_${2 + i}s_infinite_linear]`}
                                        style={{
                                            top: '50%', left: '50%',
                                            '--target-x': node.pos.includes('left') ? '-150%' : '150%',
                                            '--target-y': node.pos.includes('top') ? '-150%' : '150%',
                                        } as any}
                                    />
                                    {/* The Node itself */}
                                    <div className={`absolute ${node.pos} bg-white border border-slate-200 p-3 rounded-xl shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform`}>
                                        <div className="text-indigo-600 scale-75">{node.icon}</div>
                                        <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">{node.label}</span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                 ) : feature.id === 'offline-mode' ? (
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="relative">
                        <div className="w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                           <Icons.WifiOff />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-xl shadow-lg animate-bounce">
                           <Icons.Check />
                        </div>
                      </div>
                      <div className="mt-6 w-full max-w-[200px] space-y-2">
                         <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                            <div className="h-full bg-indigo-600 w-full animate-[loading_2s_infinite]" />
                         </div>
                         <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest">Local WASM Processor Active</p>
                      </div>
                   </div>
                 ) : feature.id === 'transparent-ai' ? (
                    <div className="absolute inset-0 p-8 flex flex-col justify-center">
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                               <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                  <span className="text-[10px] text-white/60 font-black uppercase">Gemini 3 Flash</span>
                               </div>
                               <span className="text-[10px] text-green-400 font-black">99.2% CONFIDENCE</span>
                            </div>
                            <div className="space-y-3">
                               <div className="h-1 bg-white/5 rounded-full w-full"><div className="h-full bg-indigo-500 w-3/4" /></div>
                               <div className="h-1 bg-white/5 rounded-full w-full"><div className="h-full bg-purple-500 w-5/6" /></div>
                               <div className="h-1 bg-white/5 rounded-full w-full"><div className="h-full bg-indigo-400 w-1/2" /></div>
                            </div>
                            <div className="mt-6 flex gap-2">
                               <div className="px-2 py-1 bg-white/10 rounded text-[9px] text-white/40 font-bold uppercase">Trace: OK</div>
                               <div className="px-2 py-1 bg-white/10 rounded text-[9px] text-white/40 font-bold uppercase">Mask: Verif</div>
                            </div>
                        </div>
                    </div>
                 ) : feature.id === 'learning-mode' ? (
                   <div className="absolute inset-0 flex items-center justify-center p-8">
                     <div className="w-full h-full border border-slate-200 rounded-2xl bg-slate-50 relative overflow-hidden flex items-center justify-center">
                        <div className="w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl animate-pulse" />
                        <div className="text-slate-200 scale-[3.0] opacity-20"><Icons.GraduationCap /></div>
                        
                        {/* Floating Tooltips Simulation */}
                        <div className="absolute top-1/4 left-1/4 bg-white shadow-xl border border-indigo-100 p-4 rounded-2xl animate-[float_4s_infinite_ease-in-out]">
                           <div className="flex items-center gap-2 mb-2">
                              <div className="text-indigo-600"><Icons.GraduationCap /></div>
                              <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Design Choice</span>
                           </div>
                           <p className="text-[11px] text-slate-500 font-medium">Why we boosted shadows here...</p>
                        </div>
                        
                        <div className="absolute bottom-1/4 right-1/4 bg-slate-900 shadow-2xl p-4 rounded-2xl animate-[float_5s_infinite_ease-in-out_reverse]">
                           <div className="flex items-center gap-2 mb-2">
                              <div className="text-indigo-400"><Icons.Check /></div>
                              <span className="text-[10px] font-black text-white uppercase tracking-tight">Applied Rule</span>
                           </div>
                           <p className="text-[11px] text-white/70 font-medium">Enhanced contrast for readability.</p>
                        </div>
                     </div>
                   </div>
                 ) : feature.id === 'bg-removal' ? (
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                         <div className="text-white text-4xl"><Icons.Scissors /></div>
                         <div className="absolute inset-0 border-2 border-dashed border-white/40 rounded-2xl animate-pulse" />
                      </div>
                      <div className="absolute left-0 right-0 h-0.5 bg-indigo-500/20 top-1/2 animate-[scan_3s_infinite]" />
                   </div>
                 ) : feature.id === 'variant-gen' ? (
                   <div className="absolute inset-0 flex items-center justify-center gap-4">
                      <div className="w-24 h-24 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center opacity-40 transform -rotate-12 scale-90"><Icons.Layers /></div>
                      <div className="w-24 h-24 bg-indigo-600 border border-indigo-600 rounded-xl flex items-center justify-center shadow-xl text-white z-10"><Icons.Layers /></div>
                      <div className="w-24 h-24 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center opacity-40 transform rotate-12 scale-90"><Icons.Layers /></div>
                   </div>
                 ) : feature.id === 'style-memory' ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-3 p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg relative group-hover:scale-105 transition-transform duration-500">
                            <div className="w-16 h-16 bg-indigo-600 rounded-xl shadow-md" />
                            <div className="w-16 h-16 bg-purple-600 rounded-xl shadow-md" />
                            <div className="w-16 h-16 bg-slate-900 rounded-xl shadow-md" />
                            <div className="w-16 h-16 bg-pink-500 rounded-xl shadow-md" />
                            <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                                <Icons.Save />
                            </div>
                        </div>
                    </div>
                 ) : feature.id === 'creator-video' ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-64 h-36 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <div className="text-white/20 text-4xl"><Icons.Video /></div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600" />
                            <div className="absolute inset-0 border-x-8 border-slate-800 flex justify-between">
                                <div className="h-full w-px bg-white/10" />
                                <div className="h-full w-px bg-white/10" />
                                <div className="h-full w-px bg-white/10" />
                            </div>
                        </div>
                        <div className="flex gap-2 -mt-6 z-10">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-16 h-16 bg-white border border-slate-200 rounded-lg shadow-xl flex items-center justify-center text-indigo-600 group-hover:translate-y-[-8px] transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <Icons.Image />
                                </div>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="absolute inset-x-8 inset-y-12 bg-slate-50/50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
                      <div className="text-slate-300 text-5xl transform group-hover:scale-110 transition-all duration-700">
                         <FeatureIcon icon={feature.icon} />
                      </div>
                   </div>
                 )}

                 {/* Decorative Pulse Rings */}
                 <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40" />
              </div>
           </div>
        </div>
      )}
    </div>
  </div>
);

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
      <style>{`
        @keyframes scan {
          0% { top: 20%; }
          50% { top: 80%; }
          100% { top: 20%; }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes packet {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(var(--target-x), var(--target-y)) scale(0.5); opacity: 0; }
        }
        @keyframes morph {
          0%, 100% { width: 80%; height: 80%; }
          33% { width: 95%; height: 50%; }
          66% { width: 60%; height: 95%; }
        }
        @keyframes fade {
           0%, 100% { opacity: 0; transform: translateY(10px); }
           40%, 60% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Subtle Background Flow Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
         <svg width="100%" height="100%" viewBox="0 0 1000 6000" preserveAspectRatio="none">
            <path d="M 0 400 Q 500 800 1000 400 L 1000 1600 Q 500 2000 0 1600 Z" fill="currentColor" className="text-indigo-400" />
            <path d="M 0 2400 Q 500 2800 1000 2400 L 1000 3600 Q 500 4000 0 3600 Z" fill="currentColor" className="text-purple-400" />
            <path d="M 0 4400 Q 500 4800 1000 4400 L 1000 5600 Q 500 6000 0 5600 Z" fill="currentColor" className="text-pink-400" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">Built for Speed</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-none">Built for the Modern Creator</h2>
          <p className="text-lg text-slate-600 font-medium">
            From hyper-local background removal to automated content pipelines, Pixzio is the ultimate creative ecosystem.
          </p>
        </div>

        {/* Full 10-Step Z-Pattern Hero Flow */}
        <div className="flex flex-col gap-16">
          
          {/* Row 1: Nano Banana */}
          <FeatureCard feature={FEATURES[0]} isHero={true} className="w-full" />

          {/* Row 2: Background Removal */}
          <FeatureCard feature={FEATURES[2]} isHero={true} reversed={true} className="w-full" />

          {/* Row 3: Variant Generator */}
          <FeatureCard feature={FEATURES[3]} isHero={true} className="w-full" />

          {/* Row 4: Smart Context - UPGRADED VISUAL */}
          <FeatureCard feature={FEATURES[1]} isHero={true} reversed={true} className="w-full" />

          {/* Row 5: Style Memory */}
          <FeatureCard feature={FEATURES[5]} isHero={true} className="w-full" />

          {/* Row 6: Creator Video Support */}
          <FeatureCard feature={FEATURES[6]} isHero={true} reversed={true} className="w-full" />

          {/* Row 7: Image -> Content Pipeline */}
          <FeatureCard feature={FEATURES[4]} isHero={true} className="w-full" />

          {/* Row 8: Offline & Low-Bandwidth */}
          <FeatureCard feature={FEATURES[7]} isHero={true} reversed={true} className="w-full" />

          {/* Row 9: Transparent AI System */}
          <FeatureCard feature={FEATURES[8]} isHero={true} className="w-full" />

          {/* Row 10: Learning Mode */}
          <FeatureCard feature={FEATURES[9]} isHero={true} reversed={true} className="w-full" />

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

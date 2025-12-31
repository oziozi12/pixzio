
import React, { useState, useRef, useEffect } from 'react';
import { generateImageContent } from '../services/geminiService';
import { GeneratedContent } from '../types';
import { Icons } from './constants';

const LOADING_STEPS = [
  "Analyzing visual semantics...",
  "Generating SEO taxonomy...",
  "Refining marketing tone...",
  "Synthesizing meta-descriptions...",
  "Finalizing accessible alt-text..."
];

const ContentPipeline: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 1500);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResults(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const data = await generateImageContent(image, 'image/jpeg');
      setResults(data);
    } catch (err) {
      setError("Unable to process image. Check your API configuration.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Optional: Add toast or brief visual feedback
  };

  return (
    <section id="pipeline" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[10px] font-black text-indigo-700 uppercase tracking-[0.2em]">Marketing Automation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">The Content Pipeline</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
              Turn a single image into a full-funnel marketing suite. Captions, SEO, 
              hashtags, and video metadata generated in one AI pass.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Input Column */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-200 group">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative aspect-square rounded-[2.5rem] border-4 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center p-10 overflow-hidden ${
                    image ? 'border-indigo-400 bg-slate-900' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                  
                  {image ? (
                    <>
                      <img src={image} alt="Uploaded" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="px-3 py-1.5 bg-indigo-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest inline-block shadow-lg">Source Loaded</div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Icons.Plus />
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900">Drop Image Here</p>
                        <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-widest">Or Click to Browse</p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  disabled={!image || loading}
                  onClick={processImage}
                  className={`w-full mt-6 py-5 rounded-[2rem] font-black text-sm uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-4 ${
                    !image || loading 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200 active:scale-[0.98]'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-indigo-400 border-t-white rounded-full animate-spin" />
                      Processing Pipeline...
                    </div>
                  ) : (
                    <>
                      <Icons.Target /> Generate Marketing Assets
                    </>
                  )}
                </button>
                {error && <p className="mt-4 text-red-500 text-[11px] font-black text-center uppercase">{error}</p>}
              </div>
            </div>

            {/* Output Column */}
            <div className="lg:col-span-7">
              {!results && !loading ? (
                <div className="h-full min-h-[500px] border-4 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 opacity-50 grayscale">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-6">
                    <Icons.TextCursor />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Awaiting Analysis</h3>
                  <p className="text-sm text-slate-500 font-medium max-w-xs">Upload an image to start the automated content generation pipeline.</p>
                </div>
              ) : loading ? (
                <div className="h-full min-h-[500px] bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl flex flex-col justify-center">
                   <div className="space-y-12">
                      <div className="text-center">
                         <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4 animate-pulse">AI Agent Working</p>
                         <p className="text-xl font-bold text-slate-900 h-8 transition-all duration-500">{LOADING_STEPS[loadingStep]}</p>
                      </div>
                      <div className="max-w-md mx-auto space-y-4">
                         <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 animate-[loading_8s_linear_infinite]" style={{ width: '100%' }} />
                         </div>
                         <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <span>Scanning Pixels</span>
                            <span>Mapping Context</span>
                         </div>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-700">
                  {/* Title Suggestion */}
                  <div className="col-span-2 bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 text-white/10 group-hover:scale-125 transition-transform duration-700"><Icons.Video /></div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Primary Video Title</span>
                    </div>
                    <h4 className="text-2xl font-black leading-tight mb-6">{results?.titleSuggestion}</h4>
                    <button 
                       onClick={() => copyToClipboard(results?.titleSuggestion || '')}
                       className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/20 transition-all"
                    >
                       Copy Title
                    </button>
                  </div>

                  {/* Caption Card */}
                  <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-lg flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Social Caption</span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed flex-grow">{results?.caption}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {results?.hashtags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-black text-indigo-600">#{tag.replace('#', '')}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(results?.caption || '')}
                      className="mt-6 w-full py-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 border border-slate-200 transition-all"
                    >
                      Copy Caption
                    </button>
                  </div>

                  {/* SEO & Accessibility */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-lg">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 block">SEO Metadata</span>
                       <p className="text-[11px] text-slate-500 font-medium italic leading-relaxed line-clamp-3">{results?.seoDescription}</p>
                    </div>
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                       <div className="absolute -top-4 -right-4 text-white/5 scale-150"><Icons.Eye /></div>
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-4 block">Accessibility Alt-Text</span>
                       <p className="text-xs text-white/80 font-medium leading-relaxed">{results?.altText}</p>
                    </div>
                  </div>

                  <div className="col-span-2 flex justify-center pt-4">
                     <button className="flex items-center gap-3 text-slate-400 hover:text-indigo-600 transition-colors">
                        <Icons.Check />
                        <span className="text-[10px] font-black uppercase tracking-widest">Download Full Asset Bundle (JSON/TXT)</span>
                     </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ContentPipeline;

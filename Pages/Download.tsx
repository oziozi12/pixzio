
import React from 'react';
import { Icons } from "../components/constants";

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-indigo-50 rounded-full blur-[120px] opacity-60 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-1.5 rounded-full mb-8">
            <span className="text-[10px] font-black text-indigo-700 uppercase tracking-[0.2em]">Mobile Productivity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
            Pixzio in Your <span className="gradient-text">Pocket</span>.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium mb-16">
            Take the power of professional AI content creation anywhere. 
            Optimized for rapid editing on the go.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {/* iOS Download */}
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col items-center group hover:scale-[1.02] transition-all shadow-2xl shadow-slate-200">
               <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-indigo-600 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.13 1.08-3.37-1.06.04-2.35.71-3.11 1.6-.68.79-1.28 2.05-1.12 3.26 1.18.09 2.42-.6 3.15-1.49z"/>
                  </svg>
               </div>
               <h2 className="text-2xl font-black mb-4 tracking-tight">iOS for iPhone</h2>
               <p className="text-slate-400 text-center mb-10 text-sm font-medium">
                 Optimized for the latest iPhone hardware. Full support for ProRAW and high-speed background isolation.
               </p>
               <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
                 Download on App Store
               </button>
            </div>

            {/* Android Download */}
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 text-slate-900 flex flex-col items-center group hover:scale-[1.02] transition-all shadow-2xl shadow-slate-200">
               <div className="w-20 h-20 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center mb-8 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414L20.355 18.1734C20.511 18.3294 20.511 18.5814 20.355 18.7374L19.224 19.8684C19.068 20.0244 18.816 20.0244 18.66 19.8684L15.828 17.0364C14.73 17.7664 13.415 18.2004 12 18.2004C8.575 18.2004 5.80005 15.4254 5.80005 12.0004C5.80005 8.57544 8.575 5.80044 12 5.80044C15.425 5.80044 18.2 8.57544 18.2 12.0004C18.2 13.4154 17.766 14.7304 17.036 15.8284L17.523 15.3414ZM12 16.2004C14.32 16.2004 16.2 14.3204 16.2 12.0004C16.2 9.68044 14.32 7.80044 12 7.80044C9.68 7.80044 7.80005 9.68044 7.80005 12.0004C7.80005 14.3204 9.68 16.2004 12 16.2004Z"/>
                  </svg>
               </div>
               <h2 className="text-2xl font-black mb-4 tracking-tight">Android Experience</h2>
               <p className="text-slate-500 text-center mb-10 text-sm font-medium">
                 Full performance on all modern Android devices. Integrates directly with your Google Photos library.
               </p>
               <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors">
                 Get it on Google Play
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto text-indigo-600">
                <Icons.Target />
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Instant Sync</h4>
              <p className="text-slate-500 text-xs font-medium">Your brand presets and projects stay synced across all devices.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto text-indigo-600">
                <Icons.Scissors />
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Local First</h4>
              <p className="text-slate-500 text-xs font-medium">Background removal works offline, preserving your data and privacy.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto text-indigo-600">
                <Icons.Save />
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Share Ready</h4>
              <p className="text-slate-500 text-xs font-medium">Export directly to Instagram, TikTok, and YouTube with one tap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer for Download Page */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-black mb-6 tracking-tight">Coming Soon to Desktop</h2>
              <p className="text-slate-500 font-medium mb-10">We're building native apps for macOS and Windows. Sign up to get notified when we launch.</p>
              <div className="flex gap-2">
                 <input type="email" placeholder="Enter your email" className="flex-grow bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl outline-none focus:border-indigo-400 font-medium transition-colors" />
                 <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors">Notify Me</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
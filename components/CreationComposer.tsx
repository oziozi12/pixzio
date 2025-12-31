
import React, { useState } from 'react';
import { Icons } from './constants';

const CreationComposer: React.FC = () => {
  const [text, setText] = useState('');
  const [aspectRatio, setAspectRatio] = useState('3:4');
  const [variants] = useState(1);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-[2rem] p-4 transition-all duration-300 hover:border-slate-300 shadow-sm focus-within:border-indigo-300 focus-within:shadow-md">
      {/* Input Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create or edit..."
        className="w-full min-h-[60px] bg-transparent border-none outline-none resize-none text-slate-900 placeholder:text-slate-400 font-medium text-lg px-2 pt-2 pb-0"
        title="Type what you want Pixzio to do with your image or brand"
      />

      {/* Button Row - Absolute Minimal Spacing */}
      <div className="flex items-center justify-between mt-0 pt-0 border-t border-slate-50">
        {/* Left Actions */}
        <div className="flex items-center gap-3 py-2">
          <button 
            title="Import images, videos, or brand assets to start editing"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <Icons.Plus />
          </button>
          <button 
            title="Configure advanced AI parameters, model selection, and creative strength"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <Icons.Settings />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 py-2">
          {/* Aspect Ratio Pill */}
          <button 
            title="Change output dimensions (currently optimized for social feeds)"
            className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-900 font-bold text-xs hover:border-slate-400 transition-colors flex items-center gap-2"
          >
            {aspectRatio}
          </button>

          {/* Variant Count Badge */}
          <div 
            title="Number of unique visual variations to be generated"
            className="px-3 py-2 rounded-full border border-slate-100 bg-slate-50 text-slate-400 font-bold text-[10px]"
          >
            {variants}
          </div>

          {/* Send Button */}
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-slate-800 transition-all shadow-md active:scale-95"
            title="Submit request to Pixzio AI pipeline"
          >
            <Icons.ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreationComposer;

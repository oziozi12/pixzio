
import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './constants';

const SUGGESTIONS = [
  { text: "Remove background from my last upload", desc: "Isolates the subject using AI masking" },
  { text: "Generate an Instagram caption for this photo", desc: "Uses Gemini Pro to write engaging social copy" },
  { text: "Create 3 lighting variants for my portrait", desc: "Generates new lighting environments for your shot" },
  { text: "Extract frames from my product video", desc: "Selects the most statistically relevant frames for thumbnails" },
  { text: "Save current style to brand presets", desc: "Locks in visual settings for your team" }
];

const ComposerBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener (CMD/CTRL + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-6">
      <div 
        className={`relative transition-all duration-300 ease-out ${
          isFocused ? 'scale-[1.02]' : 'scale-100'
        }`}
      >
        {/* Backdrop Glow */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg transition-opacity duration-500 ${isFocused ? 'opacity-30' : 'opacity-0'}`} />

        <div className={`relative glass-card rounded-2xl shadow-2xl border transition-all duration-300 ${
          isFocused ? 'border-indigo-400 bg-white/90' : 'border-white/40 bg-white/70'
        }`}>
          {/* Input Area */}
          <div className="flex items-center gap-3 px-5 py-4">
            <div className={`transition-colors duration-300 ${isFocused ? 'text-indigo-600' : 'text-slate-400'}`}>
              <Icons.Target />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask Pixzio to do anything... (⌘K)"
              title="Command Pixzio using natural language - Type what you want to achieve"
              className="flex-grow bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 font-medium text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => {
                setIsFocused(true);
                setIsOpen(true);
              }}
              onBlur={() => {
                setIsFocused(false);
                // Delay closing to allow clicking suggestions
                setTimeout(() => setIsOpen(false), 200);
              }}
            />
            <div className="flex items-center gap-2">
              {!input && (
                <div 
                  className="hidden sm:flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-400 border border-slate-200 uppercase tracking-tighter"
                  title="Keyboard Shortcut"
                >
                  <span>⌘</span>
                  <span>K</span>
                </div>
              )}
              <button 
                title="Send command to Pixzio AI engine"
                className={`p-2 rounded-xl transition-all ${
                  input 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'bg-slate-100 text-slate-300'
                }`}
              >
                <Icons.ArrowRight />
              </button>
            </div>
          </div>

          {/* Suggestions Dropup/Menu */}
          {isOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-3 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Suggestions</p>
                <div className="space-y-1">
                  {SUGGESTIONS.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(suggestion.text)}
                      title={suggestion.desc}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-indigo-50 text-sm font-medium text-slate-600 hover:text-indigo-700 transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors" />
                      {suggestion.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-medium italic">Pixzio AI uses Gemini 3 Pro for complex logic</span>
                <span className="text-[10px] text-indigo-600 font-bold">New Version 2.5</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComposerBar;

import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] opacity-40" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to transform your <br /> content workflow?
            </h2>
            <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-12">
              Join 10,000+ creators who use Pixzio to automate their visual brand and focus on what they do best: creating.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto bg-indigo-700/50 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-indigo-700/80 transition-all">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

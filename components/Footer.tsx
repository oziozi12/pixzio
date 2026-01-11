import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
                P
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Pixzio
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              The AI-powered productivity engine for modern digital creators, brands, and marketers.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Discord', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Product</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#" className="hover:text-indigo-600">Pipeline</a></li>
              <li><a href="#" className="hover:text-indigo-600">API Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-600">Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
              <li><a href="#" className="hover:text-indigo-600">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>© 2025 Pixzio Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 text-sm border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">YouTube Growth Accelerator</h2>
          <p>The step-by-step system to 1,000 subscribers.</p>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
        <p>&copy; {new Date().getFullYear()} YouTube Growth Accelerator. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-600">This site is not part of the YouTube website or Google Inc. Additionally, This site is NOT endorsed by YouTube in any way.</p>
      </div>
    </footer>
  );
};

export default Footer;
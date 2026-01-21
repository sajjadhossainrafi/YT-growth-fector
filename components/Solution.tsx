import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold tracking-wide uppercase text-sm">Introducing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">
              YouTube Channel Growth Accelerator
            </h2>
            <p className="text-xl text-slate-600">
              The all-in-one system that takes you from <span className="font-bold text-slate-900">0 subscribers to monetization</span> using strategies that actually work in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Optimized for 2026
              </h3>
              <p className="text-slate-600 text-sm">Everything is current. Learn watch time optimization, Shorts-to-long-form funnels, and retention tactics that work now.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                No Guesswork
              </h3>
              <p className="text-slate-600 text-sm">Every module gives you exact steps, formulas, and templates. You don't wonder "what next?" — you just follow the system.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Done-for-You Assets
              </h3>
              <p className="text-slate-600 text-sm">50+ thumbnail templates. 100+ AI prompts. Pre-built spreadsheets. You're not starting from scratch.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Works for Any Niche
              </h3>
              <p className="text-slate-600 text-sm">Gaming, Cooking, Tech, Finance, Vlogging. The strategies are universal principles of psychology and algorithms.</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Start Your Growth Journey</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
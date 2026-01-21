import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';
import { HERO_SUBHEADLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-20 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Updated for 2026 Algorithm
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            The Complete YouTube Growth System <br className="hidden md:block" />
            <span className="gradient-text">From 0 to Monetized.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {HERO_SUBHEADLINE}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Instant Access - Just $97
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}>
              See What's Inside
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" /> 10 Modules
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" /> 50+ Templates
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" /> 100+ AI Prompts
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" /> Lifetime Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
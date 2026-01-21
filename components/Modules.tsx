import React from 'react';
import { MODULES } from '../constants';
import { Play } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Training Curriculum</h2>
          <p className="text-slate-400 text-lg">
            10 Step-by-Step Modules taking you from "Idea" to "Income".
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MODULES.map((module) => (
            <div key={module.number} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-red-500 font-bold text-sm tracking-wider uppercase mb-1 block">Module {module.number}</span>
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                <div className="bg-slate-900 text-slate-400 text-xs px-2 py-1 rounded border border-slate-700 font-mono">
                  {module.duration}
                </div>
              </div>
              
              <ul className="space-y-2">
                {module.description.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <Play className="w-3 h-3 text-red-500 mr-2 mt-1 shrink-0 fill-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
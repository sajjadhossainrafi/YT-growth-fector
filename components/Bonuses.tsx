import React from 'react';
import { BONUSES } from '../constants';

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Plus These High-Value Bonuses</h2>
          <p className="text-slate-600">Everything you need to execute fast, included for free.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BONUSES.map((bonus, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                Value: {bonus.value}
              </div>
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                <bonus.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{bonus.title}</h3>
              <div className="space-y-2 mb-4">
                {bonus.description.map((desc, i) => (
                  <p key={i} className="text-sm text-slate-600">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
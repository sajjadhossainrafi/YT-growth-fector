import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';
import { PAIN_POINTS } from '../constants';

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Are You Struggling to Grow Your Channel?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            You're putting in the hours, creating content you're proud of, but somehow your videos are getting buried.
            <br /><span className="font-bold text-slate-900">47 views. 12 views. Sometimes 3.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
              <h3 className="text-xl font-bold">The Hard Truth</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-slate-700"><span className="font-bold">Posting consistently isn't enough</span> if your packaging fails.</p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-slate-700"><span className="font-bold">Good content isn't enough</span> if the algorithm ignores it.</p>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-slate-700"><span className="font-bold">Old advice isn't enough</span> because the game has changed.</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">You're Probably Making These Mistakes:</h3>
            <div className="space-y-6">
              {PAIN_POINTS.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{point.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-xl font-medium text-slate-800 bg-red-50 p-4 rounded-lg border border-red-100">
            You're not failing because you lack talent. <br/>
            <span className="text-red-600 font-bold">You're failing because you don't have a system.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
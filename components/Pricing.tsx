import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import Button from './Button';
import { VALUE_STACK } from '../constants';

const Pricing: React.FC = () => {
  const totalValue = VALUE_STACK.reduce((acc, item) => acc + item.value, 0);
  const checkoutUrl = "https://ruul.space/sajjadhossain/products/18215";

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Immediate Access</h2>
            <p className="text-slate-400 text-lg">Join hundreds of other creators growing their channels today.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Value Stack */}
            <div className="p-8 md:p-12 bg-slate-50 md:w-3/5 border-b md:border-b-0 md:border-r border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Everything Included:</h3>
              <ul className="space-y-4">
                {VALUE_STACK.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm border-b border-slate-200 pb-2 last:border-0">
                    <span className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {item.name}
                    </span>
                    <span className="font-bold text-slate-500 decoration-slate-400 line-through decoration-1">${item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-300">
                <span className="font-bold text-lg">Total Value</span>
                <span className="font-bold text-2xl text-slate-400 line-through">${totalValue}</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center bg-white relative">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                SAVE 85%
              </div>
              <p className="text-slate-500 mb-2 font-medium">One-Time Payment</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl text-slate-400 line-through">$297</span>
              </div>
              <div className="text-6xl font-extrabold text-slate-900 mb-2">$97</div>
              <p className="text-green-600 font-bold text-sm mb-8 bg-green-50 px-3 py-1 rounded-full">Launch Special Ending Soon</p>
              
              <Button 
                fullWidth 
                size="lg" 
                onClick={() => window.open(checkoutUrl, '_blank')}
              >
                Get Instant Access
              </Button>
              
              <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" /> 30-Day Money-Back Guarantee
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="bg-slate-700 p-4 rounded-full">
              <ShieldCheck className="w-12 h-12 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Try the entire system for 30 days. Implement the strategies. If you don't see measurable progress — more views, better CTR, subscriber growth — just email us and we'll refund every penny. No questions asked.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
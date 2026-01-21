import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const checkoutUrl = "https://ruul.space/sajjadhossain/products/18215";

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Don't Let Another Month Go By with Zero Growth
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          You're one decision away from everything changing. One decision away from creating videos that actually get watched.
          <br /><br />
          <span className="font-bold text-slate-900">The price will never be this low again. The guarantee removes all risk.</span>
        </p>
        
        <div className="mb-10">
            <Button size="xl" onClick={() => window.open(checkoutUrl, '_blank')}>
                YES! I'm Ready to Grow My Channel - Just $97
            </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-slate-500">
            <span className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> 10 Video Modules</span>
            <span className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> 50+ Templates</span>
            <span className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-1" /> 30-Day Guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/Button';
import FinalCTA from './components/FinalCTA';

function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-red-100 selection:text-red-900">
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className={`font-black text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            YT<span className="text-red-600">GROWTH</span>
          </div>
          <Button 
            size="sm" 
            variant={isScrolled ? 'primary' : 'outline'}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className={!isScrolled ? 'border-white/20 text-white hover:bg-white/10' : ''}
          >
            Get Access
          </Button>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <Bonuses />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
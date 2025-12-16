import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-snow-white mb-4 animate-fade-in-up opacity-0">
          Everest Mountain Bikes
        </h1>
        
        <p className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-secondary mb-4 animate-fade-in-up opacity-0 stagger-1">
          Ride. Trek. Explore.
        </p>
        
        <p className="text-lg md:text-xl text-snow-white/90 font-light mb-8 animate-fade-in-up opacity-0 stagger-2">
          Unlocking the Himalayas Since 2010
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 stagger-3">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-elevated"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-snow-white/10 backdrop-blur-sm text-snow-white font-heading font-semibold rounded-lg border border-snow-white/30 hover:bg-snow-white/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-snow-white/70 hover:text-snow-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

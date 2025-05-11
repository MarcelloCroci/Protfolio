
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const DinoImage = () => {
  return (
    <div className="hidden md:block w-100 h-100">
      <img 
        src="/lovable-uploads/80f7ef1d-0554-474a-9f67-e570a9a53e37.png" 
        alt="Pixelated dinosaur"
        className="w-full h-full object-contain image-rendering-pixelated"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Web gradient */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Grid overlay similar to the reference image */}
        <div className="absolute inset-0"
          style={{
            backgroundSize: '24px 24px',
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
          }}
        />
        
        {/* Border similar to the reference image */}
        <div className="absolute inset-4 border border-white/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-1">
          <div className="mb-6 md:mb-0 text-left md:max-w-2xl">
            <div className="font-mono text-sm sm:text-base text-white/70 mb-4">
              SVILUPPATORE CREATIVO / ARTISTA PIXEL
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-mono tracking-tighter text-white">
              OPERATOR <br/> FRAMING
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 font-mono">
              Creazione di esperienze digitali con codice pulito e visione artistica. Specializzato in applicazioni web e progetti di pixel art.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#webapps" 
                className="px-8 py-3 bg-white text-black font-mono hover:bg-white/90 transition-colors"
              >
                PROGETTI WEB
              </a>
              <a 
                href="#pixelart" 
                className="px-8 py-3 border border-white/30 text-white font-mono hover:bg-white/10 transition-colors"
              >
                PIXEL ART
              </a>
            </div>
          </div>
          
          <DinoImage />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" />
      </div>
    </section>
  );
};

export default Hero;

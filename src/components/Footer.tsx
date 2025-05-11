
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black text-white/60 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 border border-white/30 flex items-center justify-center text-white font-mono font-bold text-sm">
                P
              </div>
              <span className="font-bold font-mono">Portfolio</span>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex gap-6 font-mono text-sm">
              <li><a href="#webapps" className="hover:text-white transition-colors">Web App</a></li>
              <li><a href="#pixelart" className="hover:text-white transition-colors">Pixel Art</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Chi Sono</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>
          
          <div className="text-sm font-mono">
            &copy; {currentYear} Portfolio. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

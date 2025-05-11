
import React, { useState, useEffect } from 'react';
import { Home, AppWindow, Image, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'webapps', 'pixelart', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'webapps', icon: <AppWindow size={20} />, label: 'Web App' },
    { id: 'pixelart', icon: <Image size={20} />, label: 'Pixel Art' },
    { id: 'about', icon: <User size={20} />, label: 'Chi Sono' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contatti' },
  ];

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 border border-white/30 flex items-center justify-center text-white font-mono font-bold text-xl">
            P
          </div>
          <span className="font-bold text-lg font-mono text-white">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "px-4 py-2 flex items-center gap-2 transition-colors font-mono text-sm",
                activeSection === item.id
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-2">
            <span 
              className={cn(
                "block w-5 h-0.5 bg-white transition-transform",
                mobileMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span 
              className={cn(
                "block w-5 h-0.5 bg-white transition-opacity",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span 
              className={cn(
                "block w-5 h-0.5 bg-white transition-transform",
                mobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-black z-40 transition-transform transform md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "px-4 py-3 flex items-center gap-3 transition-colors font-mono",
                activeSection === item.id
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              )}
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Code, Brush, Coffee, Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black grid-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-16">CHI SONO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left column - Personal Info */}
          <div className="space-y-6">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 relative">
              <div className="absolute inset-0 border border-white/20 opacity-80" />
              <div className="absolute inset-[5px] bg-black overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white font-mono">John Doe</h3>
              <p className="text-white/60 font-mono">Full Stack Developer & Pixel Artist</p>
              <p className="text-white/60 font-mono">New York, USA</p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 border border-white/20 flex items-center justify-center">
                  <BookOpen className="text-white/70" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Formazione</h4>
                  <p className="text-sm text-white/60">Laurea in Informatica, MIT</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 border border-white/20 flex items-center justify-center">
                  <Briefcase className="text-white/70" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Esperienza</h4>
                  <p className="text-sm text-white/60">5+ anni in Sviluppo Web</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 border border-white/20 flex items-center justify-center">
                  <Award className="text-white/70" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Premi</h4>
                  <p className="text-sm text-white/60">Premio Miglior Design 2023</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Bio & Skills */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-mono">La Mia Storia</h3>
              <div className="space-y-4 text-white/70">
                <p>
                  Sono uno sviluppatore full-stack e artista di pixel art appassionato, con un profondo amore per la creazione di esperienze digitali che uniscono tecnologia e arte.
                </p>
                <p>
                  Con oltre 5 anni di esperienza professionale, mi specializzo nella creazione di applicazioni web responsive utilizzando framework moderni, mentre creo anche pixel art unica per giochi e media digitali nel tempo libero.
                </p>
                <p>
                  Il mio obiettivo è creare prodotti digitali intuitivi, performanti e visivamente accattivanti che forniscano un valore reale agli utenti.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-mono">Le Mie Competenze</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 border border-white/10">
                  <div className="h-12 w-12 border border-white/20 mb-4 flex items-center justify-center">
                    <Code className="text-white/70" />
                  </div>
                  <h4 className="font-bold mb-2 text-white font-mono">Sviluppo Web</h4>
                  <p className="text-sm text-white/60">
                    React, TypeScript, Next.js, Tailwind CSS, Node.js
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 border border-white/10">
                  <div className="h-12 w-12 border border-white/20 mb-4 flex items-center justify-center">
                    <Brush className="text-white/70" />
                  </div>
                  <h4 className="font-bold mb-2 text-white font-mono">Pixel Art</h4>
                  <p className="text-sm text-white/60">
                    Asset di gioco, animazioni, ambienti, design di personaggi
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 border border-white/10">
                  <div className="h-12 w-12 border border-white/20 mb-4 flex items-center justify-center">
                    <Coffee className="text-white/70" />
                  </div>
                  <h4 className="font-bold mb-2 text-white font-mono">Altre Competenze</h4>
                  <p className="text-sm text-white/60">
                    Design UI/UX, Sviluppo di Giochi, Gestione Progetti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Counter Section */}
      <div className="counter-section mt-20">
        <div className="counter-item">
          <div className="counter-value">23</div>
          <div className="counter-label">Progetti</div>
        </div>
        
        <div className="counter-item">
          <div className="counter-value">04</div>
          <div className="counter-label">Anni</div>
        </div>
        
        <div className="counter-item">
          <div className="counter-value">25</div>
          <div className="counter-label">Clienti</div>
        </div>
      </div>
    </section>
  );
};

export default About;

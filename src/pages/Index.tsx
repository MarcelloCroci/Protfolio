
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WebProjects from '@/components/WebProjects';
import PixelArtProjects from '@/components/PixelArtProjects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <WebProjects />
        <PixelArtProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

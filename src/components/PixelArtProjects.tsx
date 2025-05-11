
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import ProjectDialog from './ProjectDialog';

const pixelArtProjectsData: ProjectCardProps[] = [
  {
    title: "CITTÀ CYBERPUNK",
    description: "Un dettagliato paesaggio urbano cyberpunk ispirato a Blade Runner, con luci al neon e architettura futuristica.",
    image: "https://images.unsplash.com/photo-1533750516297-d62c7c110a8c?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Paesaggio Urbano", "Cyberpunk", "Animazione"],
    liveUrl: "#",
    type: "pixel",
    size: "large"
  },
  {
    title: "AVVENTURA NELLA FORESTA",
    description: "Un rigoglioso ambiente forestale con creature animate ed effetti di illuminazione dinamica per un gioco d'avventura 2D.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Ambiente", "Art per Giochi", "Animazione"],
    liveUrl: "#",
    type: "pixel",
    size: "medium"
  },
  {
    title: "PERSONAGGI RPG RETRO",
    description: "Una collezione di sprite di personaggi e animazioni progettate per un gioco di ruolo in stile classico.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Personaggi", "RPG", "Animazione"],
    liveUrl: "#",
    type: "pixel",
    size: "small"
  },
  {
    title: "ASSET PER SPARATUTTO SPAZIALE",
    description: "Pack completo di asset per un gioco di sparatutto spaziale, compresi navi, pianeti, effetti ed elementi UI.",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Asset di Gioco", "UI", "Spazio"],
    liveUrl: "#",
    type: "pixel",
    size: "medium"
  },
];

const PixelArtProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenProject = (project: ProjectCardProps) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="pixelart" className="pixel-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title pixel-section-title">PROGETTI PIXEL ART</h2>
        <p className="section-subtitle text-white/60">
          Creazioni di pixel art artigianali per giochi e media digitali.
        </p>
        
        <div className="grid gap-4 mosaic-layout">
          {pixelArtProjectsData.map((project, index) => (
            <div 
              key={index} 
              className={`animate-fade-in mosaic-item-${project.size || 'medium'}`}
              style={{ 
                animationDelay: `${index * 0.1 + 0.1}s`,
              }}
            >
              <ProjectCard 
                {...project} 
                onClick={() => handleOpenProject(project)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <ProjectDialog 
        project={selectedProject} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
      />

      <style>
        {`
          .mosaic-layout {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 200px;
            grid-auto-flow: dense;
            gap: 1rem;
          }
          
          .mosaic-item-small {
            grid-column: span 1;
            grid-row: span 1;
          }
          
          .mosaic-item-medium {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .mosaic-item-large {
            grid-column: span 2;
            grid-row: span 2;
          }
          
          @media (min-width: 768px) {
            .mosaic-layout {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .mosaic-layout {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default PixelArtProjects;


import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import ProjectDialog from './ProjectDialog';

const webProjectsData: ProjectCardProps[] = [
  {
    title: "Dashboard E-commerce",
    description: "Una dashboard di amministrazione responsive per piattaforme e-commerce con analisi in tempo reale, gestione dell'inventario ed elaborazione degli ordini.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
    type: "web"
  },
  {
    title: "App Gestione Attività",
    description: "Un'applicazione completa di gestione delle attività con funzionalità di trascinamento, autenticazione utente e aggiornamenti in tempo reale.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    liveUrl: "#",
    repoUrl: "#",
    type: "web"
  },
  {
    title: "App Previsioni Meteo",
    description: "Un'applicazione meteorologica che fornisce condizioni attuali e previsioni con bellissime visualizzazioni e dati basati sulla posizione.",
    image: "https://images.unsplash.com/photo-1561726677-8ed47ed4e987?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "Weather API", "Charts.js", "Styled Components"],
    liveUrl: "#",
    repoUrl: "#",
    type: "web"
  },
  {
    title: "Dashboard Social Media",
    description: "Una dashboard all-in-one per la gestione e l'analisi degli account dei social media su più piattaforme.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Next.js", "REST API", "OAuth", "Material UI"],
    liveUrl: "#",
    repoUrl: "#",
    type: "web"
  },
];

const WebProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenProject = (project: ProjectCardProps) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="webapps" className="web-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title web-section-title">APPLICAZIONI WEB</h2>
        <p className="section-subtitle text-white/60">
          Applicazioni web moderne e responsive costruite con le tecnologie più recenti.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {webProjectsData.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
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
    </section>
  );
};

export default WebProjects;

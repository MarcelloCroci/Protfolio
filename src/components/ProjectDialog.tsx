
import React from 'react';
import { ProjectCardProps } from './ProjectCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectDialogProps {
  project: ProjectCardProps | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;
  
  const { title, description, image, tags, liveUrl, repoUrl, type } = project;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "sm:max-w-xl border-white/10 p-0 overflow-hidden",
        type === 'web' ? 'web-card' : 'pixel-card'
      )}>
        <div className="relative h-56 sm:h-64">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "absolute inset-0 w-full h-full object-cover",
              type === 'pixel' && 'image-rendering-pixelated'
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>
        
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className={cn(
            "text-2xl font-bold font-mono",
            type === 'web' ? 'text-white' : 'text-pixel-primary font-pixel text-xl'
          )}>
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 space-y-4">
          <p className={cn(
            "text-white/70 font-mono text-sm",
            type === 'pixel' && 'text-pixel-light/80'
          )}>
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map(tag => (
              <span 
                key={tag} 
                className={cn(
                  "text-xs px-2 py-1 font-mono",
                  type === 'web' 
                    ? 'bg-white/5 text-white/70 border border-white/10' 
                    : 'bg-pixel-primary/10 text-pixel-primary border border-pixel-primary border-opacity-30'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {(liveUrl || repoUrl) && (
            <div className="flex gap-4 mt-6">
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-xs font-mono transition-colors",
                    type === 'web' 
                      ? 'bg-web-accent hover:bg-web-accent/80 text-white'
                      : 'bg-pixel-accent hover:bg-pixel-accent/80 text-black'
                  )}
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              )}
              {repoUrl && (
                <a 
                  href={repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors"
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

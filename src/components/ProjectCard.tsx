
import React from 'react';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  type: 'web' | 'pixel';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  image,
  type,
  size = 'medium',
  onClick
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        'project-card group h-full w-full cursor-pointer',
        type === 'web' ? 'web-card' : 'pixel-card'
      )}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            type === 'pixel' && 'image-rendering-pixelated'
          )}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <h3 className={cn(
            "text-xl font-bold font-mono text-white",
            type === 'pixel' && 'font-pixel text-base text-pixel-primary'
          )}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

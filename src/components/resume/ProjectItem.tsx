
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
  title: string;
  url?: string;
  description: string;
  isVisible: boolean;
  delay: string;
}

const ProjectItem = ({ title, url, description, isVisible, delay }: ProjectItemProps) => (
  <div className={cn(
    "mb-3 opacity-0",
    isVisible && `animate-fade-in animate-delay-${delay}`
  )}>
    <div className="flex flex-col mb-1">
      <h3 className="text-base font-semibold text-portfolio-700">{title}</h3>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-teal-500 hover:text-teal-600 transition-colors mb-1 inline-block"
        >
          {url}
        </a>
      )}
    </div>
    <p className="text-xs text-gray-600">{description}</p>
  </div>
);

export default ProjectItem;

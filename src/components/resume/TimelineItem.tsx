
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  icon: React.ElementType;
  date: string;
  title: string;
  organization: string;
  description?: string;
  marks?: string;
  isVisible: boolean;
  delay: string;
}

const TimelineItem = ({ 
  icon: Icon, 
  date, 
  title, 
  organization, 
  description, 
  marks,
  isVisible,
  delay
}: TimelineItemProps) => (
  <div className={cn(
    "relative pl-8 pb-3 opacity-0",
    isVisible && `animate-fade-in animate-delay-${delay}`
  )}>
    <div className="absolute left-0 top-0 bg-portfolio-100 p-1 rounded-lg text-portfolio-700 border border-portfolio-200">
      <Icon size={14} />
    </div>
    <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-portfolio-100"></div>
    
    <div className="mb-0.5 text-xs text-portfolio-600 font-medium">{date}</div>
    <h3 className="text-sm font-semibold text-portfolio-800">{title}</h3>
    <div className="text-xs text-gray-600 mb-0.5">{organization}</div>
    {description && <p className="text-xs text-gray-600">{description}</p>}
    {marks && <p className="text-xs text-gray-500 italic">{marks}</p>}
  </div>
);

export default TimelineItem;

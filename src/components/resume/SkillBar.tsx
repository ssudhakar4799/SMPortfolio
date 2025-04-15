
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: string;
  level: number;
  isVisible: boolean;
  delay: string;
}

const SkillBar = ({ skill, level, isVisible, delay }: SkillBarProps) => (
  <div className={cn(
    "mb-2.5 opacity-0",
    isVisible && `animate-fade-in animate-delay-${delay}`
  )}>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{skill}</span>
      <span className="text-xs text-gray-500">{level}%</span>
    </div>
    <div className="skill-bar h-1.5 bg-muted">
      <div 
        className="skill-progress transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : '0%' }}
      ></div>
    </div>
  </div>
);

export default SkillBar;

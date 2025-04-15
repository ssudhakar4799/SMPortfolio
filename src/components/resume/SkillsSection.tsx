
import React from 'react';
import { cn } from '@/lib/utils';
import SkillBar from './SkillBar';

interface SkillsSectionProps {
  isVisible: boolean;
  title: string;
  skills: {
    name: string;
    level: number;
    delay: string;
  }[];
}

const SkillsSection = ({ isVisible, title, skills }: SkillsSectionProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        {title}
      </h3>
      <div>
        {skills.map((skill) => (
          <SkillBar 
            key={skill.name}
            skill={skill.name}
            level={skill.level}
            isVisible={isVisible}
            delay={skill.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

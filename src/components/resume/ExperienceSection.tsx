
import React from 'react';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import TimelineItem from './TimelineItem';

interface ExperienceSectionProps {
  isVisible: boolean;
}

const ExperienceSection = ({ isVisible }: ExperienceSectionProps) => {
  const experiences = [
    {
      icon: Briefcase,
      date: "Jul 2024 - Present",
      title: "Full Stack Developer",
      organization: "Opalminds Pvt ltd, Trichy",
      isVisible,
      delay: "100"
    },
    {
      icon: Briefcase,
      date: "Feb 2023 - Jul 2024",
      title: "Full Stack Developer",
      organization: "Fabevy Technologies Pvt ltd, Tenkasi",
      isVisible,
      delay: "100"
    },
    {
      icon: Briefcase,
      date: "Sep 2022 - Dec 2022",
      title: "Front-End Developer - Internship",
      organization: "Quantzi Infotech Madipakkam Chennai",
      isVisible,
      delay: "200"
    }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0 flex items-center",
        isVisible && "animate-fade-in"
      )}>
        <Briefcase className="mr-2 text-portfolio-700" size={18} />
        Work Experience
      </h3>
      <div className="space-y-1.5">
        {experiences.map((exp) => (
          <TimelineItem 
            key={exp.title}
            icon={exp.icon}
            date={exp.date}
            title={exp.title}
            organization={exp.organization}
            isVisible={isVisible}
            delay={exp.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;


import React from 'react';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import TimelineItem from './TimelineItem';

interface EducationSectionProps {
  isVisible: boolean;
}

const EducationSection = ({ isVisible }: EducationSectionProps) => {
  const education = [
    {
      icon: GraduationCap,
      date: "2019-2021",
      title: "Jamal Mohamed College, Trichy",
      organization: "Master degree in zoology",
      marks: "Completed with 85% marks",
      isVisible,
      delay: "100"
    },
    {
      icon: GraduationCap,
      date: "2016-2019",
      title: "Jamal Mohamed College, Trichy",
      organization: "Bachelor degree in zoology",
      marks: "Completed with 77% marks",
      isVisible,
      delay: "200"
    },
    {
      icon: GraduationCap,
      date: "2014-2016",
      title: "Govt HR.Sec.School, Arasunilaipalayam",
      organization: "Higher Secondary Education",
      marks: "Completed with 60% marks",
      isVisible,
      delay: "300"
    }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0 flex items-center",
        isVisible && "animate-fade-in"
      )}>
        <GraduationCap className="mr-2 text-portfolio-700" size={18} />
        Education
      </h3>
      <div className="space-y-1.5">
        {education.map((edu) => (
          <TimelineItem 
            key={edu.title + edu.date}
            icon={edu.icon}
            date={edu.date}
            title={edu.title}
            organization={edu.organization}
            marks={edu.marks}
            isVisible={isVisible}
            delay={edu.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;

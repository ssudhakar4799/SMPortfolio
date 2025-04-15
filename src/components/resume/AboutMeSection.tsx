
import React from 'react';
import { cn } from '@/lib/utils';

interface AboutMeSectionProps {
  isVisible: boolean;
}

const AboutMeSection = ({ isVisible }: AboutMeSectionProps) => {
  const aboutMe = "To work as a Software Engineer applying my knowledge in the field of testing, designing, and maintenance to cater to the specific needs of the people. I wish to work in a team of motivated individuals who wish to work towards the advancement of the company and its goals.";

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        About Me
      </h3>
      <p className={cn(
        "text-xs text-gray-600 opacity-0",
        isVisible && "animate-fade-in animate-delay-100"
      )}>
        {aboutMe}
      </p>
    </div>
  );
};

export default AboutMeSection;

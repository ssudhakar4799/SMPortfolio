
import React from 'react';
import { cn } from '@/lib/utils';

interface LanguagesSectionProps {
  isVisible: boolean;
}

const LanguagesSection = ({ isVisible }: LanguagesSectionProps) => {
  const languages = ["Tamil", "English"];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        Languages
      </h3>
      <ul className="space-y-1.5">
        {languages.map((lang, index) => (
          <li 
            key={lang}
            className={cn(
              "flex items-center text-sm text-gray-700 opacity-0",
              isVisible && `animate-fade-in animate-delay-${(index + 1) * 100}`
            )}
          >
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesSection;

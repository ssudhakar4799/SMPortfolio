
import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import the smaller components
import ContactInfoSection from './resume/ContactInfoSection';
import AboutMeSection from './resume/AboutMeSection';
import LanguagesSection from './resume/LanguagesSection';
import ExperienceSection from './resume/ExperienceSection';
import EducationSection from './resume/EducationSection';
import SkillsSection from './resume/SkillsSection';
import ProjectsSection from './resume/ProjectsSection';

const ResumeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontEndSkills = [
    { name: "HTML", level: 90, delay: "100" },
    { name: "CSS", level: 85, delay: "150" },
    { name: "JavaScript", level: 85, delay: "200" },
    { name: "React.js", level: 80, delay: "250" },
    { name: "Material UI", level: 70, delay: "350" },
    { name: "Next.js", level: 75, delay: "350" },
    { name: "Refine dev", level: 80, delay: "350" },
    { name: "Ant D", level: 65, delay: "350" },

  ];

  const backEndSkills = [
    { name: "Node.js", level: 85, delay: "400" },
    { name: "PHP", level: 75, delay: "450" },
    { name: "Supabase", level: 75, delay: "450" },
    { name: "Mongo DB", level: 80, delay: "450" },
  ];

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="py-20 bg-portfolio-50"
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "section-heading text-center mx-auto opacity-0 after:left-1/2 after:-translate-x-1/2 mb-12",
          isVisible && "animate-fade-in"
        )}>
          My Resume
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {/* Contact & About Me Column */}
          <div className="space-y-5">
            <ContactInfoSection isVisible={isVisible} />
            <AboutMeSection isVisible={isVisible} />
            <LanguagesSection isVisible={isVisible} />
            <LanguagesSection isVisible={isVisible} />

          </div>
          
          {/* Experience & Education Column */}
          <div className="space-y-5">
            <ExperienceSection isVisible={isVisible} />
            <EducationSection isVisible={isVisible} />
          </div>
          
          {/* Skills & Projects Column */}
          <div className="space-y-5">
            <SkillsSection 
              isVisible={isVisible} 
              title="Front-End Skills" 
              skills={frontEndSkills} 
            />
            
            <SkillsSection 
              isVisible={isVisible} 
              title="Back-End Skills" 
              skills={backEndSkills} 
            />
            
            {/* <ProjectsSection isVisible={isVisible} /> */}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/public/lovable-uploads/sudhakar.pdf" 
            download
            className={cn(
              "cta-button inline-flex mx-auto opacity-0",
              isVisible && "animate-fade-in animate-delay-700"
            )}
          >
            Download CV <Download size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

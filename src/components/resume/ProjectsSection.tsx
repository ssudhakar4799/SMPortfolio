
import React from 'react';
import { cn } from '@/lib/utils';
import ProjectItem from './ProjectItem';

interface ProjectsSectionProps {
  isVisible: boolean;
}

const ProjectsSection = ({ isVisible }: ProjectsSectionProps) => {
  const projects = [
    {
      title: "GreenFeet - UK (CO2 Emission)",
      url: "https://greenfeet.net/",
      description: "Backend development in Node.js with JWT authentication, payment gateway integration, and CO2 emission calculations, plus data migrations and subscription automation.",
      isVisible,
      delay: "100"
    },
    {
      title: "Employees Workplace",
      url: "https://workplace.ry.com",
      description: "Backend development in PHP with JWT authentication, APIs for timesheet management, attendance tracking, and certificate generation.",
      isVisible,
      delay: "200"
    },
    {
      title: "Workbench",
      url: "https://api-frontend.wyce.app/embed/64",
      description: "Fullstack project with React.js frontend (React States, Flux Hooks, Router DOM) and Node.js/Fastapi backend with JWT authentication.",
      isVisible,
      delay: "300"
    }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        Projects
      </h3>
      <div>
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            url={project.url}
            description={project.description}
            isVisible={isVisible}
            delay={project.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

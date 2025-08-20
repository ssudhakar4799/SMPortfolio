
import React, { useEffect, useRef, useState } from 'react';
import { Code, ExternalLink, Github, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  previewUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DataQube",
    description: "Built a full-stack permit declaration system for the SG government using React.js with Refine Dev, Redux, and React Router DOM on the frontend. The backend is developed with Encore Dev, using JWT authentication, Nodemailer with SMTP for emails, and PostgreSQL for data storage. Integrated AWS services like API Gateway, Lambda, SQS, and S3 for a scalable and secure infrastructure.",
    image: "/lovable-uploads/dataqube.png",
    tags: ["Refine dev", "Redux", "Encore dev", "JWT Token", "PostgreSQL", "AWS", "Nodemailer"],
    liveUrl: "https://testapp.dataqube.opalminds.com/login",
    githubUrl: "",
    previewUrl: "https://testapp.dataqube.opalminds.com/login"
  },
  {
    id: 2,
    title: "GreenFeet - UK (CO2 Emission)",
    description: "I completed project involves backend development in Node.js, incorporating various functionalities such as user authentication using JWT, integration of a payment gateway, and calculations for CO2 emissions including CH4 and N2O. Additionally, the system is designed to send emails and automate subscription renewals",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Js", "Tailwind CSS", "React Charts", "JsPdf", "Redux"],
    liveUrl: "https://greenfeet.net/",
    githubUrl: "https://github.com/ssudhakar4799",
    previewUrl: "https://greenfeet.net/"
  },
  {
    id: 3,
    title: "Subhameera Herbals",
    description: "I completed a full-stack project using React.js for the frontend, incorporating React Sidebar Pro, Material-UI, Redux, and React Router DOM. The backend is developed with PHP, implementing JWT token authentication, handling email functionality using PHPMailer, and interacting with a SQL database to ensure seamless communication between the frontend and backend.",
    image: "/lovable-uploads/subhameera.png",
    tags: ["React", "Redux", "PHP", "JWT Token", "sql"],
    liveUrl: "https://subhameeraherbals.com/",
    githubUrl: "",
    previewUrl: "https://subhameeraherbals.com/"
  },
  {
    id: 4,
    title: "Invoice",
    description: "A full-featured invoice management application built using Refine Dev for the frontend, Supabase for the backend, and Ant Design for the UI. It includes product management, invoice generation, and PDF download functionality",
    image: "/lovable-uploads/invoice.png",
    tags: ["Refine dev", "Ant D", "Supabase", "PostgreSQL"],
    liveUrl: "https://invoice-ten-wine.vercel.app/",
    githubUrl: "https://github.com/ssudhakar4799/Invoice",
    previewUrl: "https://invoice-ten-wine.vercel.app/"
  },
  {
    id: 5,
    title: "Employees Workplace",
    description: "I completed a project as a backend developer in PHP focuses on implementing authentication using JWT, developing APIs for features like timesheet management, attendance tracking, and generating course certificates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux", "Sql", "Php", "JsPdf"],
    liveUrl: "https://workplace.fabevy.com/auth/login",
    githubUrl: "https://github.com/ssudhakar4799",
    previewUrl: "https://workplace.fabevy.com/auth/login"
  },
  {
    id: 6,
    title: "Workbench",
    description: "I completed full stack project involves React.js for the frontend with React Sidebar Pro, Material-UI, Redux, and React Router DOM. The backend utilizes Node.js with Hapi.js server, implementing JWT token authentication, email sending, and ensuring smooth communication between frontend and backend.",
    image: "/lovable-uploads/workplace.png",
    tags: ["React", "Redux", "Node.js", "JWT Token", "MongoDB"],
    liveUrl: "https://wor-frontend.vercel.app/login",
    githubUrl: "https://github.com/ssudhakar4799/workplace",
    previewUrl: "https://wor-frontend.vercel.app/login"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "section-heading text-center mx-auto opacity-0 after:left-1/2 after:-translate-x-1/2",
          isVisible && "animate-fade-in"
        )}>
          My Projects
        </h2>
        <p className={cn(
          "text-center text-gray-600 max-w-2xl mx-auto mb-16 opacity-0",
          isVisible && "animate-fade-in animate-delay-100"
        )}>
          Explore some of my recent work and personal projects that showcase my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "project-card bg-white opacity-0",
                isVisible && `animate-fade-in animate-delay-${(index % 4) * 100 + 200}`,
                activeProject === project.id && "ring-2 ring-portfolio-500"
              )}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {project.previewUrl && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
                        aria-label="Preview Project"
                      >
                        <Eye size={20} className="text-portfolio-700" />
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-0">
                      <div className="h-72 w-full overflow-hidden">
                        <iframe
                          src={project.previewUrl}
                          title={`Preview of ${project.title}`}
                          className="w-full h-full border-0"
                        />
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-portfolio-100 text-portfolio-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-portfolio-700 hover:text-portfolio-900 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-portfolio-700 hover:text-portfolio-900 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

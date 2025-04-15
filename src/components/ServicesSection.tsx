
import React, { useEffect, useRef, useState } from 'react';
import { Code, Layout, Server, Database, Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
  isVisible: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, delay, isVisible }: ServiceCardProps) => (
  <div className={cn(
    "service-card opacity-0",
    isVisible && `animate-fade-in animate-delay-${delay}`
  )}>
    <div className="inline-flex p-3 rounded-lg bg-portfolio-100 text-portfolio-700 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-portfolio-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
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

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Refine dev.",
      delay: "100"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications with Node.js, Express, and other technologies.",
      delay: "200"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing databases using SQL and NoSQL technologies for efficient data management.",
      delay: "300"
    },
    {
      icon: Code,
      title: "API Development",
      description: "Creating RESTful APIs endpoints for seamless integration between frontend and backend.",
      delay: "400"
    },
    {
      icon: Github,
      title: "Version Control",
      description: "Managing codebase with Git, implementing effective branching strategies, and handling CI/CD pipelines.",
      delay: "500"
    },
    {
      icon: Globe,
      title: "Web Performance",
      description: "Optimizing web applications for speed, accessibility, and SEO to enhance user experience.",
      delay: "600"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "section-heading text-center mx-auto opacity-0 after:left-1/2 after:-translate-x-1/2",
          isVisible && "animate-fade-in"
        )}>
          Services I Offer
        </h2>
        <p className={cn(
          "text-center text-gray-600 max-w-2xl mx-auto mb-16 opacity-0",
          isVisible && "animate-fade-in animate-delay-100"
        )}>
          I provide comprehensive solutions for your software development needs, focusing on quality, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

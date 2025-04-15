
import React, { useEffect, useRef, useState } from 'react';
import { Award, Code, Database, Globe, Server, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const technologies = [
    { name: 'JavaScript', icon: Code, color: 'bg-amber-500' },
    { name: 'React', icon: Globe, color: 'bg-blue-500' },
    { name: 'Node.js', icon: Server, color: 'bg-green-600' },
    { name: 'SQL', icon: Database, color: 'bg-violet-500' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-portfolio-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "section-heading text-center mx-auto opacity-0 after:left-1/2 after:-translate-x-1/2",
            isVisible && "animate-fade-in"
          )}>
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className={cn(
              "md:col-span-1 opacity-0",
              isVisible && "animate-fade-in animate-delay-100"
            )}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-br from-portfolio-500 to-teal-500 h-24"></div>
                <div className="px-6 pb-6 -mt-12">
                  <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 overflow-hidden mx-auto bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    {/* <p className="text-gray-400 dark:text-gray-300">Photo</p> */}
                    <img 
                  src="/lovable-uploads/sudhakar.jpeg" 
                  alt="Sudhakar S" 
                  className="w-full h-full object-cover object-center"
                />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-center text-portfolio-800 dark:text-portfolio-200">Sudhakar S</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">Software Developer</p>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center">
                      <Award className="text-portfolio-600 dark:text-portfolio-400 mr-2 flex-shrink-0" size={18} />
                      <p className="text-gray-600 dark:text-gray-300">1.5 + Years Experience</p>
                    </div>
                    <div className="flex items-center">
                      <Globe className="text-portfolio-600 dark:text-portfolio-400 mr-2 flex-shrink-0" size={18} />
                      <p className="text-gray-600 dark:text-gray-300">Remote, Worldwide</p>
                    </div>
                    <div className="flex items-center">
                      <Database className="text-portfolio-600 dark:text-portfolio-400 mr-2 flex-shrink-0" size={18} />
                      <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "md:col-span-2 opacity-0",
              isVisible && "animate-fade-in animate-delay-200"
            )}>
              <h3 className="text-2xl font-bold text-portfolio-800 dark:text-portfolio-200 mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate software developer with expertise in building responsive web applications using modern technologies. 
                With a focus on creating clean, efficient, and user-friendly applications, I strive to deliver high-quality code that meets client needs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in software development began 1.5 + years ago, and since then, I've worked on various projects, ranging from small business websites to complex enterprise applications.
                I enjoy tackling challenging problems and continuously learning new technologies.
              </p>

              <h3 className="text-2xl font-bold text-portfolio-800 dark:text-portfolio-200 mb-4 mt-8">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={cn(
                      "flex items-center p-3 rounded-lg hover-lift glass-card opacity-0 dark:bg-gray-800 dark:border-gray-700", 
                      isVisible && `animate-fade-in animate-delay-${(index + 3) * 100}`
                    )}
                  >
                    <div className={`${tech.color} p-2 rounded-md text-white mr-3`}>
                      <tech.icon size={20} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#resume" 
                className="cta-button inline-flex mt-4 opacity-0 animate-fade-in animate-delay-700 dark:bg-portfolio-600 dark:hover:bg-portfolio-700 dark:text-white"
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                View My Resume <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

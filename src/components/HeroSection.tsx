
import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-portfolio-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className={cn(
            "text-portfolio-600 font-medium opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Hello, I'm
          </p>
          
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-800 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            <span className="block">Sudhakar S</span>
            <span className="text-teal-500 block mt-2">Full-Stack Developer</span>
          </h1>
          
          <p className={cn(
            "text-lg text-gray-600 max-w-md opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}>
            I build exceptional and accessible digital experiences for the web.
          </p>
          
          <div className={cn(
            "pt-4 flex flex-wrap gap-4 opacity-0",
            isVisible && "animate-fade-in animate-delay-300"
          )}>
            <a href="#contact" className="cta-button">
              Get in touch <ArrowRight size={18} />
            </a>
            <a href="#projects" className="secondary-button">
              View work <Code size={18} />
            </a>
          </div>
          
          <div className={cn(
            "pt-6 flex items-center gap-4 opacity-0",
            isVisible && "animate-fade-in animate-delay-400"
          )}>
            <a 
              href="https://github.com/ssudhakar4799" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sudhakar-s-9423b4242/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className={cn(
          "hidden lg:flex justify-center items-center opacity-0",
          isVisible && "animate-fade-in-right animate-delay-200"
        )}>
          <div className="relative w-[800px] h-[400px] max-w-[900px] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-portfolio-500 rounded-3xl rotate-6 blur-sm opacity-80"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border-4 border-white transform rotate-3">
              <div className="relative overflow-hidden h-full rounded-2xl">
                <img 
                  src="/lovable-uploads/sudhakarprofile.jpeg" 
                  alt="Sudhakar S" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0",
        isVisible && "animate-fade-in animate-delay-500"
      )}>
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-500 hover:text-portfolio-700 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse-slow"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


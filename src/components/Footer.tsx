
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold flex items-center">
              <span className="text-teal-400">&lt;</span>
              <span className="mx-1">Portfolio</span>
              <span className="text-teal-400">/&gt;</span>
            </a>
            <p className="mt-2 text-portfolio-200 max-w-md">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ssudhakar4799" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="www.linkedin.com/in/sudhakar-s-9423b4242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:ssudhakar4799@gmail.com" 
              className="text-portfolio-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-300 text-sm">
            &copy; {new Date().getFullYear()} Sudhakar S. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm text-portfolio-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

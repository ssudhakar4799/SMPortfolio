
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sectionElems = navItems.map(({ id }) => 
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[];
      
      const scrollPosition = window.scrollY + 100;
      
      // Find the section closest to the top of the viewport
      for (let i = sectionElems.length - 1; i >= 0; i--) {
        const section = sectionElems[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-portfolio-800"
        >
          Sudhakar<span className="text-teal-500">.S</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "nav-item",
                activeSection === item.id && "active"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 p-2 text-portfolio-800"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute left-0 right-0 px-4 py-5 bg-white shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "top-full opacity-100 visible" 
            : "-top-96 opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "py-2 px-4 text-portfolio-800 hover:bg-portfolio-50 rounded-md transition-colors",
                activeSection === item.id && "bg-portfolio-50 font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

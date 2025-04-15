
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
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

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "section-heading text-center mx-auto opacity-0 after:left-1/2 after:-translate-x-1/2",
          isVisible && "animate-fade-in"
        )}>
          Get In Touch
        </h2>
        <p className={cn(
          "text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 opacity-0",
          isVisible && "animate-fade-in animate-delay-100"
        )}>
          Feel free to reach out if you have any questions, project inquiries, or just want to say hello!
        </p>

        <ContactInfo isVisible={isVisible} />
        <ContactForm isVisible={isVisible} />
      </div>
    </section>
  );
};

export default ContactSection;

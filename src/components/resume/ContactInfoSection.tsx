
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import ContactInfo from './ContactInfo';

interface ContactInfoSectionProps {
  isVisible: boolean;
}

const ContactInfoSection = ({ isVisible }: ContactInfoSectionProps) => {
  const contactInfo = [
    { icon: Mail, title: "E-mail", content: "ssudhakar4799@gmail.com", delay: "100" },
    { icon: Phone, title: "Phone", content: "+91-8220347695", delay: "200" },
    { icon: MapPin, title: "Address", content: "No. 2/108, V.Poosaripatty, Trichy-621307", delay: "300" },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h3 className={cn(
        "text-lg font-bold text-portfolio-800 mb-3 opacity-0",
        isVisible && "animate-fade-in"
      )}>
        Contact Information
      </h3>
      <div className="space-y-2">
        {contactInfo.map((info) => (
          <ContactInfo 
            key={info.title}
            icon={info.icon}
            title={info.title}
            content={info.content}
            isVisible={isVisible}
            delay={info.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfoSection;

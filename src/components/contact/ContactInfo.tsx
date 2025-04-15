
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
  index: number;
  isVisible: boolean;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ 
  icon: Icon, title, value, link, index, isVisible 
}) => {
  return (
    <a 
      href={link} 
      className={cn(
        "flex flex-col items-center p-6 rounded-xl glass-card text-center hover-lift opacity-0",
        "dark:bg-gray-800/80 dark:border-gray-700/50",
        isVisible && `animate-fade-in animate-delay-${(index + 1) * 100}`
      )}
    >
      <div className="p-3 rounded-full bg-portfolio-100 text-portfolio-700 dark:bg-portfolio-900/50 dark:text-portfolio-300 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-portfolio-800 dark:text-portfolio-200 mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </a>
  );
};

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isVisible }) => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ssudhakar4799@gmail.com",
      link: "mailto:ssudhakar4799@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8220347695",
      link: "tel:+918220347695"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Trichy,Tamil Nadu",
      link: "https://maps.app.goo.gl/VUg8CbeTuFGXFK387"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {contactInfo.map((info, index) => (
        <ContactInfoItem
          key={info.title}
          icon={info.icon}
          title={info.title}
          value={info.value}
          link={info.link}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

export default ContactInfo;

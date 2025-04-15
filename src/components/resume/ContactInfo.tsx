
import React from 'react';
import { cn } from '@/lib/utils';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
  isVisible: boolean;
  delay: string;
}

const ContactInfo = ({ icon: Icon, title, content, isVisible, delay }: ContactInfoProps) => (
  <div className={cn(
    "flex items-start mb-2.5 opacity-0",
    isVisible && `animate-fade-in animate-delay-${delay}`
  )}>
    <div className="bg-portfolio-100 p-1.5 rounded-lg text-portfolio-700 mr-2.5">
      <Icon size={15} />
    </div>
    <div>
      <div className="text-sm font-medium text-portfolio-600">{title}</div>
      <div className="text-xs text-gray-700 break-words">{content}</div>
    </div>
  </div>
);

export default ContactInfo;

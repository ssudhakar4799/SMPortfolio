
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  isVisible: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus('idle');
    
    try {
      // For EmailJS implementation
      // Uncomment and replace with your service, template and user IDs
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID', // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_USER_ID' // replace with your EmailJS user ID
      );
      */
      
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form data
      setFormData({ name: '', email: '', subject: '', message: '' });
      setEmailStatus('success');
    } catch (error) {
      console.error("Error in form submission:", error);
      
      toast.error("Form submission issue", {
        description: "There was an error with your form submission. Please try again later.",
      });
      
      setEmailStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn(
      "max-w-3xl mx-auto bg-white dark:bg-gray-800/90 rounded-xl shadow-lg p-8 opacity-0 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50",
      isVisible && "animate-fade-in animate-delay-400"
    )}>
      <h3 className="text-2xl font-bold text-portfolio-800 dark:text-portfolio-200 mb-6">Send Me a Message</h3>
      
      {emailStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-start">
          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <div>
            <h4 className="font-medium text-green-800 dark:text-green-300">Message Sent Successfully!</h4>
            <p className="text-sm text-green-700 dark:text-green-400">Thank you for your message. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      
      {emailStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-start">
          <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <div>
            <h4 className="font-medium text-red-800 dark:text-red-300">Failed to Send Message</h4>
            <p className="text-sm text-red-700 dark:text-red-400">There was an error sending your message. Please try again or contact me directly.</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent transition-colors"
            placeholder="Project Inquiry"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent transition-colors"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-button w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send Message <Send size={18} className="ml-2" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

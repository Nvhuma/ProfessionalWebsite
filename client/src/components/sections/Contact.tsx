import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { apiRequest } from '@/lib/queryClient';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'john.doe@example.com' },
    { icon: 'fas fa-phone', text: '+1 (555) 123-4567' },
    { icon: 'fas fa-map-marker-alt', text: 'San Francisco, CA' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-16 bg-white ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-medium sm:text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="py-3 px-4 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="py-3 px-4 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="py-3 px-4 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={4}
                  className="py-3 px-4 mt-1"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-bg-light rounded-lg p-8 h-full">
              <h3 className="text-xl font-bold text-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className={`${info.icon} text-primary`}></i>
                    </div>
                    <div className="ml-3 text-base text-gray-medium">
                      <p>{info.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-dark mt-10 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="text-gray-medium hover:text-primary transition-colors duration-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{link.name}</span>
                    <i className={`${link.icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-dark mb-6">Availability</h3>
                <p className="text-base text-gray-medium">
                  Currently available for freelance projects and full-time opportunities. Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

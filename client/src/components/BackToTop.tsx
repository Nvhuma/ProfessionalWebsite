import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`fixed bottom-4 right-4 z-40 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <Button 
        size="sm" 
        variant="outline" 
        onClick={scrollToTop}
        className="rounded-full w-10 h-10 p-0 shadow-md bg-white text-primary hover:bg-primary hover:text-white"
      >
        <i className="fas fa-arrow-up"></i>
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

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
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('home');
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </Button>
    </div>
  );
}

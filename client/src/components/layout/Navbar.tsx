import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { scrollToSection } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Add shadow to navbar when scrolled
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for highlighting nav items
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a 
              href="#home" 
              className="text-xl font-bold text-primary"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              John<span className="text-dark">Doe</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-medium hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href ? 'text-primary border-b-2 border-primary' : 'text-gray-medium hover:text-primary'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button 
              className="ml-8 whitespace-nowrap" 
              onClick={() => handleNavClick('contact')}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <a href="#home" className="text-xl font-bold text-primary" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}>
                  John<span className="text-dark">Doe</span>
                </a>
              </div>
              <div className="-mr-2">
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    className="text-base font-medium text-gray-medium hover:text-primary transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

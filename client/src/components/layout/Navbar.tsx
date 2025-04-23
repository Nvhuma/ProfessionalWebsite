import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navigation: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
  
  const isActive = (path: string) => location === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold text-primary cursor-pointer">
                <span className="text-dark">NV</span>Portfolio
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive(item.href) 
                        ? 'text-primary font-semibold' 
                        : 'text-dark hover:text-primary hover:bg-bg-light'
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              
              <Link href="/contact">
                <Button size="sm">
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary hover:bg-bg-light focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href) 
                      ? 'text-primary font-semibold' 
                      : 'text-dark hover:text-primary hover:bg-bg-light'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  Hire Me
                </Button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
  { name: 'GitHub', icon: 'fab fa-github', url: '#' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
];

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <a 
              href="#home" 
              className="text-xl font-bold text-white"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              John<span className="text-primary">Doe</span>
            </a>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-base text-gray-light md:text-left">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-light hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className="text-gray-light hover:text-white transition-colors duration-200 mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

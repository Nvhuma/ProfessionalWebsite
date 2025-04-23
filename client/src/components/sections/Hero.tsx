import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import TypingEffect from '@/components/TypingEffect';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-5'
      } transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mt-1">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-medium sm:text-5xl md:text-6xl">
                Hello, I'm <TypingEffect text="John Doe" className="text-primary" />
              </h2>
              <h3 className="text-2xl text-gray-medium mt-3 sm:mt-4 sm:text-3xl lg:text-4xl">
                <span className="block">Full-Stack Developer</span>
              </h3>
              <p className="mt-3 text-base text-gray-medium sm:mt-5 sm:text-lg">
                I build exceptional and accessible digital experiences for the web.
                Focused on creating elegant solutions to complex problems with clean, efficient code.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto text-primary bg-blue-100 hover:bg-blue-200 border-none"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img 
                  className="w-full" 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" 
                  alt="Person coding on laptop" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a 
            href="#projects" 
            className="text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            <i className="fas fa-chevron-down text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

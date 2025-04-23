import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import TypingEffect from '@/components/TypingEffect';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Home() {
  const [, setLocation] = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`relative bg-white pt-24 pb-16 min-h-screen flex items-center md:pt-32 md:pb-24 ${
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
                Hello, I'm <TypingEffect text="Nhlayiseko Vhuma" className="text-primary" />
              </h2>
              <h3 className="text-2xl text-gray-medium mt-3 sm:mt-4 sm:text-3xl lg:text-4xl">
                <span className="block">Software Developer</span>
              </h3>
              <p className="mt-3 text-base text-gray-medium sm:mt-5 sm:text-lg">
                A recent graduate with a Bachelor in Information Technology and Business analysis, 
                I am eager to apply my academic knowledge and strong communication and teamwork skills 
                to contribute meaningfully to the IT industry. I enjoy collaborating with teams and 
                have a passion for solving problems, with a strong focus on backend development.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setLocation('/projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto text-primary bg-blue-100 hover:bg-blue-200 border-none"
                  onClick={() => setLocation('/contact')}
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
                  src="https://media.istockphoto.com/id/1470505973/photo/a-software-engineer-working-on-his-laptop-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=Q-sfdJqbBXgQ8V6zGz08qdbidZZKpL9L16DkuXwm6XE=" 
                  alt="Software Developer" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

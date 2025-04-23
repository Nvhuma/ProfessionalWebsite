import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const experiences = [
  {
    period: '2021 - Present',
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.'
  },
  {
    period: '2018 - 2021',
    role: 'Full Stack Developer',
    company: 'WebSolutions LLC'
  },
  {
    period: '2016 - 2018',
    role: 'Frontend Developer',
    company: 'DigitalWave Agency'
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
  { name: 'GitHub', icon: 'fab fa-github', url: '#' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
  { name: 'Resume', icon: 'fas fa-file-download', url: '#' }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-16 bg-bg-light ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative lg:col-span-1">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
              <img 
                className="object-cover" 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Professional portrait" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-10"></div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 text-gray-medium space-y-4">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience building web and mobile applications. 
                My journey in software development began when I was in college, tinkering with code to solve problems I encountered.
              </p>
              <p>
                I specialize in creating responsive, accessible, and user-friendly applications using modern JavaScript 
                frameworks and libraries. I'm particularly interested in building products that make a positive impact on people's lives.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting 
                with new cooking recipes. I believe in continuous learning and regularly attend tech meetups and conferences.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-dark mb-4">Experience</h3>
              <ul className="space-y-4">
                {experiences.map((exp, index) => (
                  <li key={index} className="border-l-2 border-primary pl-4 py-1">
                    <span className="block text-sm text-primary font-medium">{exp.period}</span>
                    <span className="block text-base font-bold text-dark">{exp.role}</span>
                    <span className="block text-sm text-gray-medium">{exp.company}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-primary hover:text-blue-700 transition-colors duration-200" 
                  title={`${link.name} Profile`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const experiences = [
  {
    period: '2023',
    role: 'Bachelor in Information Technology and Business Analysis',
    company: 'Educational Institution'
  },
  {
    period: '2022',
    role: 'Student Developer',
    company: 'Holberton School Projects'
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Nvhuma' },
  { name: 'Resume', icon: 'fas fa-file-download', url: '#' }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-16 bg-bg-light min-h-screen ${
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
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
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
                I'm Nhlayiseko Vhuma, a recent graduate with a Bachelor in Information Technology and Business Analysis. 
                My journey in software development began during my academic years, where I discovered my passion for creating 
                solutions to real-world problems.
              </p>
              <p>
                I specialize in backend development, with a growing interest in creating robust, scalable applications. 
                I enjoy working with various programming languages and frameworks, and I'm always eager to learn new technologies.
              </p>
              <p>
                What drives me is the opportunity to collaborate with teams and contribute to meaningful projects. 
                I value clear communication, teamwork, and a problem-solving approach to development challenges.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-dark mb-4">Education & Experience</h3>
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
import { useRef } from 'react';
import SkillBar from '@/components/SkillBar';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Skill } from '@/lib/utils';

const frontendSkills: Skill[] = [
  { name: 'React & React Native', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'Redux & Context API', level: 85 }
];

const backendSkills: Skill[] = [
  { name: 'Node.js & Express', level: 90 },
  { name: 'MongoDB & Mongoose', level: 85 },
  { name: 'GraphQL & Apollo', level: 80 },
  { name: 'REST API Design', level: 90 }
];

const otherSkills = [
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'AWS', icon: 'fas fa-cloud' },
  { name: 'CI/CD', icon: 'fas fa-terminal' },
  { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
  { name: 'Accessibility', icon: 'fas fa-universal-access' }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="skills" 
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
            Skills & Technologies
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-medium sm:text-lg">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">Frontend Development</h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  isVisible={isVisible} 
                  delay={index * 200}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">Backend Development</h3>
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  isVisible={isVisible} 
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-dark mb-6 text-center">Tools & Other Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {otherSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg bg-bg-light transition-all duration-300 hover:shadow-md"
                >
                  <i className={`${skill.icon} text-3xl text-primary mb-2`}></i>
                  <span className="text-dark font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

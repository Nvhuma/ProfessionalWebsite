import { useRef } from 'react';
import SkillBar from '@/components/SkillBar';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Skill } from '@/lib/utils';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const frontendSkills: Skill[] = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML & CSS', level: 90 }
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Java', level: 80 },
    { name: 'ASP.NET', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'C#', level: 80 },
    { name: 'Python', level: 70 }
  ];
  
  const otherSkills = [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Data Analysis', icon: 'fas fa-chart-bar' },
    { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
    { name: 'Team Collaboration', icon: 'fas fa-users' },
    { name: 'Communication', icon: 'fas fa-comments' },
    { name: 'Business Analysis', icon: 'fas fa-briefcase' }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-16 bg-white min-h-screen ${
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
                  <span className="block text-dark font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
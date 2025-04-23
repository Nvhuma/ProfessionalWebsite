import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Project } from '@/lib/utils';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing business metrics with real-time updates.',
    imageUrl: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['React', 'D3.js', 'Firebase']
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness goals with progress visualizations.',
    imageUrl: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    liveUrl: '#',
    repoUrl: '#',
    technologies: ['React Native', 'Redux', 'GraphQL']
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={`py-16 bg-bg-light ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-medium sm:text-lg">
            A selection of my recent work and personal projects.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="inline-flex items-center">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

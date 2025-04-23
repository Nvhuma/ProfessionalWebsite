import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { Project } from '@/lib/utils';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    // Fetch GitHub projects
    async function fetchProjects() {
      try {
        const featuredProjects: Project[] = [
          {
            id: 1,
            title: 'Vehicle Booking App',
            description: 'A system for managing vehicle bookings with user authentication, booking management, and role-based access control.',
            imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/vehicle-booking-app',
            technologies: ['C#', 'ASP.NET', 'SQL']
          },
          {
            id: 2,
            title: 'FastAPI Grocery List',
            description: 'A web application built using the FastAPI framework that allows users to manage a grocery list with various functionalities.',
            imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/FastAPI-grocery-list',
            technologies: ['Python', 'FastAPI', 'SQL']
          },
          {
            id: 3,
            title: 'Image Detection using AI',
            description: 'A simple image recognition project using TensorFlow and Keras with the MNIST dataset. Data processing and model building, training with the MNIST dataset consisting of 28x28 greyscale images of handwritten digits.',
            imageUrl: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/Image-Detection-using-AI',
            technologies: ['Python 3.6', 'TensorFlow', 'Numpy', 'Matplotlib', 'Keras']
          },
          {
            id: 4,
            title: 'AI Corona Virus Tracker',
            description: 'An application that tracks coronavirus cases worldwide using Python and data analysis.',
            imageUrl: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/AI-corona-virus',
            technologies: ['Python', 'Data Analysis', 'Visualization']
          },
          {
            id: 5,
            title: 'Data Science in VS Code',
            description: 'Python extension with common data science libraries to explore basic data science scenarios. Using data from the Titanic to set up a data science virtual environment. Import and clean data, create a machine learning model to predict survival on the Titanic.',
            imageUrl: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/Data-science-is-VS-code-',
            technologies: ['Python', 'Data Science', 'Machine Learning', 'Statistics']
          },
          {
            id: 6,
            title: 'Algorithmic Trading',
            description: 'A project focused on algorithmic trading strategies using Python.',
            imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            repoUrl: 'https://github.com/Nvhuma/Algorithmic-Trading',
            technologies: ['Python', 'Finance', 'Algorithms']
          }
        ];
        
        setProjects(featuredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    
    fetchProjects();
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={`py-16 bg-bg-light min-h-screen ${
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
          <a href="https://github.com/Nvhuma" target="_blank" rel="noopener noreferrer">
            <Button className="inline-flex items-center">
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative h-48 sm:h-60">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
        <p className="text-gray-medium text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-blue-50 text-primary">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-5">
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full">
                <i className="fab fa-github mr-2"></i> Code
              </Button>
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full">
                <i className="fas fa-external-link-alt mr-2"></i> Live
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
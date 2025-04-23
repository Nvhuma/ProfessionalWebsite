import { Project } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getTagColor = (tech: string) => {
    const colors: Record<string, string> = {
      'React': 'bg-blue-100 text-primary',
      'React Native': 'bg-blue-100 text-primary',
      'Node.js': 'bg-green-100 text-green-600',
      'MongoDB': 'bg-purple-100 text-purple-600',
      'D3.js': 'bg-green-100 text-green-600',
      'Firebase': 'bg-yellow-100 text-yellow-600',
      'Redux': 'bg-red-100 text-red-600',
      'GraphQL': 'bg-indigo-100 text-indigo-600'
    };

    return colors[tech] || 'bg-gray-100 text-gray-600';
  };

  return (
    <Card className="project-card bg-white overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48">
        <img 
          className="w-full h-full object-cover" 
          src={project.imageUrl} 
          alt={`${project.title} screenshot`} 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-dark">{project.title}</h3>
          <div className="flex space-x-2">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                className="text-gray-medium hover:text-primary transition-colors duration-200" 
                title="View Github Repository"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                className="text-gray-medium hover:text-primary transition-colors duration-200" 
                title="View Live Project"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-medium mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 rounded ${getTagColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

import { Github, ExternalLink, Folder } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  isOpenSource?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  github, 
  external, 
  isOpenSource 
}) => {
  return (
    <div className="bg-[#112240] rounded-lg p-8 hover:translate-y-[-5px] transition-transform">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <Folder className="w-10 h-10 text-[#64ffda]" />
          {isOpenSource && (
            <span className="text-xs font-mono px-2 py-1 rounded-full bg-[#64ffda] bg-opacity-10 text-[#64ffda]">
              Open Source
            </span>
          )}
        </div>
        <div className="flex gap-4">
          {github && (
            <a  target="_blank" 
            rel="noopener noreferrer"  href={github} className="text-gray-300 hover:text-[#64ffda]">
              <Github className="w-6 h-6" />
            </a>
          )}
          {external && (
            <a  target="_blank" 
            rel="noopener noreferrer"  href={external} className="text-gray-300 hover:text-[#64ffda]">
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tech.map((technology: string, index: number) => (
          <span key={index} className="text-sm text-gray-400">{technology}</span>
        ))}
      </div>
    </div>
  )
};

export default ProjectCard;
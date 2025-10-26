import { projects } from "@/config";
import ProjectCard from "./ui/ProjectCard";

const ProjectsGrid = () => {

  return (
    <section className="min-h-screen py-16 px-4 bg-transparent flex flex-col justify-center items-center" id="work">
      <h2 className="text-center text-4xl font-bold text-white mb-8">{projects.sectionName}</h2>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
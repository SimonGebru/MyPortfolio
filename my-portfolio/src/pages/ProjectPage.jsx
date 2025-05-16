import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="p-6">Projektet hittades inte.</div>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full max-w-2xl mb-6 rounded" />
      <p className="mb-4">{project.details}</p>
      <h2 className="text-xl font-semibold mb-2">Tekniker:</h2>
      <ul className="list-disc list-inside">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
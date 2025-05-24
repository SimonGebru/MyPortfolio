import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="p-6">Projektet hittades inte.</div>;

  const handleBack = () => {
    window.location.href = '/#projects';
  };

  return (
    <div className="min-h-screen bg-[#1e1f25] text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 Back to Projects */}
        <button
          onClick={handleBack}
          className="mb-8 flex items-center gap-2 text-lime-400 hover:text-white transition duration-300"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </button>

        <h1 className="text-5xl font-bold text-lime-400 mb-6 text-center drop-shadow-md">
          {project.title}
        </h1>

        <div className="rounded-xl overflow-hidden shadow-xl border border-lime-500 mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover max-h-[400px]"
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {project.details}
        </p>

        <h2 className="text-2xl font-semibold text-lime-400 mb-3">Använda tekniker</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-gray-800 text-white py-2 px-4 rounded shadow text-center hover:bg-lime-600 transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
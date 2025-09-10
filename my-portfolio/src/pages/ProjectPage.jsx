import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { extraProjects } from '../data/extraProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectPage = () => {
  const { id } = useParams();
  const allProjects = [...projects, ...extraProjects];
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    AOS.refresh();
  }, []);

  if (!project) return <div className="p-6 text-white">Projektet hittades inte.</div>;

  const handleBack = () => {
    window.location.href = '/#projects';
  };

  return (
    <div className="min-h-screen bg-[#1e1f25] text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* 🔙 Back Button */}
        <button
          onClick={handleBack}
          className="mb-8 flex items-center gap-2 text-lime-400 hover:text-white transition duration-300"
          data-aos="fade-in"
          data-aos-duration="500"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </button>

        {/* 🔠 Title */}
        <h1
          className="text-5xl font-bold text-lime-400 mb-6 text-center drop-shadow-md"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {project.title}
        </h1>

        {/* 🖼️ Image */}
        <div
          className="rounded-xl overflow-hidden shadow-xl border border-lime-500 mb-10 bg-black"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[700px] object-contain rounded-xl"
          />
        </div>

        {/* 📝 Details */}
        <p
          className="text-lg text-gray-300 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {project.details}
        </p>

        {/* 🔗 Links with Tooltips */}
        <div className="mt-4 mb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Se liveprojektet"
              className="group relative flex items-center gap-2 bg-lime-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-lime-400 transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FontAwesomeIcon icon={faChrome} />
              Live Preview
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded px-3 py-1 transition duration-300 pointer-events-none z-10">
                Se liveprojektet
              </span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="Gå till GitHub-repo"
              className="group relative flex items-center gap-2 bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-300 transition"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub Repo
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded px-3 py-1 transition duration-300 pointer-events-none z-10">
                Gå till GitHub-repo
              </span>
            </a>
          )}
        </div>

        {/* 🛠 Technologies */}
        <h2
          className="text-2xl font-semibold text-lime-400 mb-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Used Technologies
        </h2>

        <div className="max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-lime-500 scrollbar-track-gray-700">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.technologies.map((tech, index) => (
              <li
                key={tech}
                data-aos="fade-up"
                data-aos-delay={700 + index * 100} 
                className="bg-gray-800 text-white py-2 px-4 rounded shadow text-center hover:bg-lime-600 transition"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
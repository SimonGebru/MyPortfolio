import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { extraProjects } from "../data/extraProjects";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);
  const remainingProjects = [...projects.slice(3), ...extraProjects];

  return (
    <section
      id="projects"
      className="relative bg-[#1e1f25] text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* 🔆 Bakgrundsdekor */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lime-300/10 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400 opacity-5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 🧠 Rubrik */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-500 uppercase">Mina Projekt</h2>
        <p className="text-gray-400 mt-2">Utforska några av mina favoritbyggen</p>
      </div>

      {/* ⭐️ 3 Framhävda Projekt */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((proj) => (
          <Link
            key={proj.id}
            to={`/project/${proj.id}`}
            className="group bg-white/5 border border-lime-500 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-lime-400 mb-2">{proj.title}</h3>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </Link>
        ))}
      </div>

      {/* 📚 Horisontell Bokhylla */}
      {remainingProjects.length > 0 && (
        <div className="relative z-10 mt-20">
          <h3 className="text-center text-lime-500 font-bold text-lg mb-10">Fler projekt</h3>

          <div className="relative overflow-x-auto px-4 pb-20">
  <div
    className="flex justify-center gap-6 w-full flex-wrap"
    style={{ perspective: "1200px" }}
  >
              {remainingProjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/project/${proj.id}`}
                  className="relative group w-[120px] h-[180px] flex-shrink-0"
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500 custom-rotate group-hover:rotate-y-0 group-hover:translate-z-10"
                  >
                    {/* Bokframsida */}
                    <div
                      className="absolute inset-0 rounded-md bg-white/10 border border-lime-500 backdrop-blur-md shadow-md flex flex-col justify-center items-center text-center text-lime-400 font-semibold text-xs px-2"
                      style={{
                        transform: "rotateY(0deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {proj.title}
                      <p className="text-[10px] text-gray-300 mt-1 px-1 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    {/* Bokrygg / sida */}
                    <div
                      className="absolute top-0 right-[-12px] w-[12px] h-full bg-lime-400/30 rounded-r-md"
                      style={{
                        transform: "rotateY(90deg)",
                        transformOrigin: "left center",
                        backfaceVisibility: "hidden",
                      }}
                    ></div>
                  </div>

                  {/* Skugga undertill */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20 blur-sm rounded-b-md scale-95 z-[-1]" />
                </Link>
              ))}
            </div>

            {/* Hyllan */}
            <div className="absolute bottom-4 left-4 right-4 h-[6px] bg-white/20 rounded-full mx-auto max-w-[95%]" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
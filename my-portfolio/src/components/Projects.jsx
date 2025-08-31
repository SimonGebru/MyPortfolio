import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { extraProjects } from "../data/extraProjects";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);
  const remainingProjects = [...projects.slice(3), ...extraProjects];

  return (
    <section
      id="projects"
      className="relative bg-[#f8fafc] text-gray-800 py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* 🔆 Ljus bakgrundsdekor */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-300 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 🧠 Rubrik */}
      <div className="relative z-10 text-center mb-12">
        <h2
          className="text-4xl font-bold text-sky-500 uppercase"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Mina Projekt
        </h2>
        <p
          className="text-gray-600 mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          Utforska några av mina favoritbyggen
        </p>
      </div>

      {/* ⭐️ 3 Framhävda Projekt */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredProjects.map((proj, index) => (
          <Link
            key={proj.id}
            to={`/project/${proj.id}`}
            className="group bg-white border border-sky-300 rounded-2xl p-5 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="700"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-sky-500 mb-2">{proj.title}</h3>
            <p className="text-gray-700 text-sm">{proj.description}</p>
          </Link>
        ))}
      </div>

      {/* 📚 Horisontell Bokhylla */}
      {remainingProjects.length > 0 && (
        <div className="relative z-10 mt-20">
          <h3
            className="text-center text-sky-500 font-bold text-lg mb-10"
            data-aos="fade-up"
          >
            Fler projekt
          </h3>

          <div className="relative overflow-x-auto px-4 pb-20">
            <div className="flex min-w-max" style={{ perspective: "1200px" }}>
              {remainingProjects.map((proj, index) => (
                <Link
                  key={proj.id}
                  to={`/project/${proj.id}`}
                  className="relative group w-[200px] h-[180px] flex-shrink-0"
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                  data-aos-duration="700"
                >
                  <div className="relative w-full h-full transition-transform duration-500 custom-rotate group-hover:rotate-y-0 group-hover:translate-z-10">
                    {/* Bokframsida */}
                    <div
                      className="absolute inset-0 rounded-md bg-white border border-sky-300 shadow-md flex flex-col justify-center items-center text-center text-sky-500 font-semibold text-xs px-2"
                      style={{
                        transform: "rotateY(0deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {proj.image && (
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-16 object-fit rounded-t-md mb-2"
                        />
                      )}
                      <p className="text-sm font-bold">{proj.title}</p>
                      <p className="text-[10px] text-gray-500 mt-1 px-1 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    {/* Bokrygg */}
                    <div
                      className="absolute top-0 right-[-20px] w-[20px] h-full bg-sky-200 rounded-r-md"
                      style={{
                        transform: "rotateY(90deg)",
                        transformOrigin: "left center",
                        backfaceVisibility: "hidden",
                      }}
                    ></div>
                  </div>

                  {/* Skugga undertill */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-black/10 blur-sm rounded-b-md scale-95 z-[-1]" />
                </Link>
              ))}
            </div>

            {/* Hylla */}
            <div className="absolute bottom-4 left-4 right-4 h-[6px] bg-gray-300 rounded-full mx-auto max-w-[95%]" />
          </div>
        </div>
      )}

      {/* 🔽 Skugga som övergång till Contact */}
      <div className="absolute bottom-0 left-0 w-full h-12 shadow-[inset_0_-20px_20px_-10px_rgba(0,0,0,0.2)] z-10" />
    </section>
  );
};

export default Projects;
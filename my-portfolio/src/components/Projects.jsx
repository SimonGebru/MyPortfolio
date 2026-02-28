import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiExternalLink, FiSearch } from "react-icons/fi";
import { projects } from "../data/projects";
import { extraProjects } from "../data/extraProjects";

const allProjects = [...projects, ...extraProjects];
const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags || [])));

const Projects = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    let result = allProjects;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedTag) {
      result = result.filter((p) => p.tags?.includes(selectedTag));
    }

    return result;
  }, [search, selectedTag]);

  const displayed = showAll || search || selectedTag ? filtered : filtered.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden"
    >
      {/*  Background overlays (allows ParticleField to show through) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/65 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400">
            Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
            Selected Projects
          </h2>

          <p className="text-slate-400 max-w-lg">
            A selection of full-stack applications, frontend builds, and experimental tools.
          </p>
        </motion.div>

        {/* SEARCH + FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-900/60 border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder:text-slate-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 text-xs rounded border transition ${
                !selectedTag
                  ? "bg-sky-500 text-black border-sky-500"
                  : "border-slate-700 text-slate-400 hover:border-sky-500/40"
              }`}
            >
              All
            </button>

            {allTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1.5 text-xs rounded border transition ${
                  selectedTag === tag
                    ? "bg-sky-500 text-black border-sky-500"
                    : "border-slate-700 text-slate-400 hover:border-sky-500/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* SHOW ALL BUTTON */}
        {!search && !selectedTag && filtered.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 text-sm font-medium border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
            >
              {showAll ? "Show Less" : `Show All Projects (${filtered.length})`}
            </button>
          </div>
        )}

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No projects found.</p>
        )}
      </div>
    </section>
  );
};

/* =============================
   PROJECT CARD COMPONENT
============================= */

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative border border-slate-800 rounded-xl bg-slate-900/40 overflow-hidden hover:border-sky-500/40 transition-colors"
  >
    {/* subtle glow on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
      <div className="absolute inset-0 bg-sky-500/5 blur-xl" />
    </div>

    <Link to={`/project/${project.id}`} className="block">
      {/* IMAGE */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">
        {/* TAGS */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 border border-slate-700 rounded text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-400 flex-1 mb-4">
          {project.description}
        </p>

        <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <FiGithub className="w-3.5 h-3.5" />
              Source
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Live
            </a>
          )}

          <span className="ml-auto text-xs text-sky-400">Case Study →</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default Projects;
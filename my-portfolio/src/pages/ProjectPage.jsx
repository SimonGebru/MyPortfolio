import { useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { projects } from "../data/projects";
import { extraProjects } from "../data/extraProjects";

const allProjects = [...projects, ...extraProjects];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = useMemo(
    () => allProjects.findIndex((p) => p.id === id),
    [id]
  );

  const project = currentIndex >= 0 ? allProjects[currentIndex] : null;
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  // Scroll to top when changing project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="relative min-h-screen text-slate-200 flex items-center justify-center px-6 overflow-hidden">
        {/* overlays instead of solid bg */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/70 to-[#020617]/55 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.12),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">Project not found</h1>
          <p className="text-slate-400 mb-6">
            The project you’re looking for doesn’t exist (or the URL is wrong).
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // Map your existing data -> case study structure
  const tagline = project.tagline || project.description || "";
  const overview = project.overview || project.details || "";
  const techStack = project.techStack || project.technologies || [];
  const features = project.features || null;
  const challenges = project.challenges || null;
  const learned = project.learned || null;
  const tags = project.tags || [];

  const tocItems = [
    ...(overview ? [{ id: "overview", label: "Overview" }] : []),
    ...(features?.length ? [{ id: "features", label: "Features" }] : []),
    ...(techStack?.length ? [{ id: "tech-stack", label: "Tech Stack" }] : []),
    ...(challenges ? [{ id: "challenges", label: "Challenges" }] : []),
    ...(learned ? [{ id: "learned", label: "What I learned" }] : []),
  ];

  const handleBackToProjects = () => {
    navigate("/");
    requestAnimationFrame(() => {
      setTimeout(() => scrollToId("projects"), 80);
    });
  };

  return (
    <div className="relative min-h-screen text-slate-200 pt-24 pb-20 px-6 md:px-20 overflow-hidden">
      {/* Page overlays (lets ParticleField show through) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors rounded px-2 py-1 -ml-2"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to projects
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* TOC */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="hidden lg:block"
          >
            {tocItems.length > 0 && (
              <div className="sticky top-28">
                <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-3">
                  On this page
                </p>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(item.id);
                      }}
                      className="block text-sm text-slate-400 hover:text-white py-1.5 transition-colors border-l-2 border-transparent hover:border-sky-500 pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </motion.aside>

          {/* MAIN */}
          <motion.main
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-3"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-slate-800 mb-8 bg-slate-900/40">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Title / meta */}
            <div className="mb-10">
              {tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 border border-slate-700 rounded text-slate-400 bg-slate-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                {project.title}
              </h1>

              {tagline && (
                <p className="text-lg text-slate-400 leading-relaxed">
                  {tagline}
                </p>
              )}

              {/* Links */}
              <div className="flex items-center gap-3 mt-6 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-slate-800 bg-slate-900/40 rounded-lg text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Source Code
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-sky-500 text-black rounded-lg font-medium hover:bg-sky-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {overview && (
                <section id="overview">
                  <h2 className="text-xl font-semibold mb-3">Overview</h2>
                  <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                    {overview}
                  </p>
                </section>
              )}

              {features?.length > 0 && (
                <section id="features">
                  <h2 className="text-xl font-semibold mb-3">Features</h2>
                  <ul className="space-y-2">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {techStack?.length > 0 && (
                <section id="tech-stack">
                  <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 border border-slate-800 rounded-lg bg-slate-900/40 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {challenges && (
                <section id="challenges">
                  <h2 className="text-xl font-semibold mb-3">Challenges</h2>
                  <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                    {challenges}
                  </p>
                </section>
              )}

              {learned && (
                <section id="learned">
                  <h2 className="text-xl font-semibold mb-3">What I learned</h2>
                  <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                    {learned}
                  </p>
                </section>
              )}
            </div>

            {/* Prev / Next */}
            <div className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between gap-6">
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.id}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-widest text-slate-500">
                      Previous
                    </span>
                    {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  to={`/project/${nextProject.id}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors text-right group ml-auto"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-widest text-slate-500">
                      Next
                    </span>
                    {nextProject.title}
                  </span>
                  <FiChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
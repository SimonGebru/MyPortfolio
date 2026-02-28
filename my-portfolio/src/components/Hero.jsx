import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import simonImage from "../assets/simon.jpeg";

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center text-slate-200 px-6 md:px-20 overflow-hidden">
      {/* Background overlay (lets ParticleField show through) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center py-32">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 text-xs uppercase tracking-widest text-sky-400">
            Fullstack developer · React · UX-focused
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Building structured,
            <br />
            performant interfaces
            <br />
            with precision.
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
            I’m Simon — a fullstack-oriented frontend developer who cares about
            clean architecture, refined interactions, and turning complex ideas
            into intuitive digital experiences.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#projects"
              onClick={handleScroll}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-black font-medium rounded-lg hover:bg-sky-400 transition-colors"
            >
              Explore Projects
              <FiArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/SimonGebru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-700 hover:border-sky-500 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/simon-gebru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-700 hover:border-sky-500 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 rounded-xl overflow-hidden border border-slate-700">
            <img
              src={simonImage}
              alt="Simon Gebru"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "HTML", icon: "/icons/html.svg", category: "frontend" },
  { name: "CSS", icon: "/icons/css.svg", category: "frontend" },
  { name: "JavaScript", icon: "/icons/js.svg", category: "frontend" },
  { name: "TypeScript", icon: "/icons/ts.svg", category: "frontend" },
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Redux", icon: "/icons/redux.svg", category: "frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "SASS", icon: "/icons/sass.svg", category: "frontend" },

  { name: "Node.js", icon: "/icons/node.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },

  // (du har DB här som "backend" – helt ok)
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "backend" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "backend" },

  { name: "AWS", icon: "/icons/aws.svg", category: "tools" },
  { name: "Firestore", icon: "/icons/firestore.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },

  { name: "Git", icon: "/icons/git.svg", category: "tools" },
  { name: "GitHub", icon: "/icons/github.svg", category: "tools" },
  { name: "Postman", icon: "/icons/postman.svg", category: "tools" },
  { name: "Figma", icon: "/icons/figma.svg", category: "tools" },
  { name: "Trello", icon: "/icons/trello.svg", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const About = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === filter);

  return (
    <section id="about" className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden">
      {/* Background overlay (lets ParticleField show through) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/65 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
        {/* LEFT SIDE – TEXT */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 mb-4 inline-block">
            About
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Engineering with clarity.
          </h2>

          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I’m a frontend-focused developer with a fullstack mindset. I care
              deeply about structure, maintainability, and interaction quality.
            </p>
            <p>
              My goal is to build digital experiences that are both performant
              and intuitive — systems that feel refined, not improvised.
            </p>
            <p>
              Outside of code, I stay active, follow football, and keep up with
              emerging technologies and product trends.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE – SKILLS */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs rounded-lg transition-colors ${
                  filter === cat
                    ? "bg-sky-500 text-black"
                    : "bg-slate-800/70 text-slate-400 hover:text-sky-400"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-md border border-slate-800 bg-slate-900/40 hover:border-sky-500/40 transition-all"
                >
                  {/* Subtil glow layer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-md bg-sky-500/5 blur-md" />
                  </div>

                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-9 grayscale group-hover:grayscale-0 transition duration-300"
                  />

                  <span className="text-[11px] tracking-wide text-slate-400 group-hover:text-sky-400 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
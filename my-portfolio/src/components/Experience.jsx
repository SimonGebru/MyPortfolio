import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    company: "Origo Academy",
    role: "Web Developer Consultant",
    period: "2026 – Present",
    type: "Consulting",
    description:
      "Working independently with website improvements in WordPress and Elementor, with a focus on UX, performance, stability and making practical improvements based on business needs.",
    technologies: ["WordPress", "Elementor", "UX", "Performance"],
  },
  {
    company: "BeautyDeluxe",
    role: "Freelance Web Developer",
    period: "2025 – 2026",
    type: "Freelance",
    description:
      "Worked on e-commerce functionality, user experience and performance improvements, turning business needs into practical changes on a live website.",
    technologies: ["E-commerce", "Frontend", "UX", "Performance"],
  },
  {
    company: "Nexilink",
    role: "Full-Stack Developer Intern",
    period: "2026",
    type: "Internship",
    description:
      "Worked on a B2B onboarding platform using React and Node.js, including APIs, databases, authentication and AI-related functionality. Collaborated through branches, pull requests and code reviews.",
    technologies: ["React", "Node.js", "APIs", "MongoDB", "Git"],
  },
  {
    company: "Polarions",
    role: "Full-Stack Developer Intern",
    period: "2025",
    type: "Internship",
    description:
      "Worked with JavaScript and MongoDB in a full-stack development environment while gaining experience working with an existing codebase and a development team.",
    technologies: ["JavaScript", "MongoDB", "Full-Stack", "Git"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden"
    >
      {/* Background overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/65 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_65%_35%,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400 mb-4 inline-block">
            Background
          </span>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience
          </h2>

          <p className="text-slate-400 max-w-2xl leading-relaxed">
            A mix of consulting, freelance work and internships where I’ve
            worked with real projects, existing systems and people outside my
            own codebase.
          </p>
        </motion.div>

        {/* Experience list */}
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="group relative border border-slate-800 rounded-xl p-6 md:p-8 bg-slate-900/40 hover:border-sky-500/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-sky-500/10 transition-colors">
                    <FiBriefcase className="w-5 h-5 text-sky-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold">
                          {experience.role}
                        </h3>

                        <span className="text-xs px-2 py-1 rounded bg-sky-500/10 text-sky-400">
                          {experience.type}
                        </span>
                      </div>

                      <p className="text-sm text-slate-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="text-sm text-slate-500 whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs px-2.5 py-1 rounded-md border border-slate-800 bg-slate-950/40 text-slate-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
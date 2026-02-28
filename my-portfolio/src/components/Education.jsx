import { useState } from "react";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import EducationModal from "./EducationModal";

const Education = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="education"
      className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden"
    >
      {/* Background overlays (allow ParticleField to show through) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/65 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_40%_60%,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
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

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          onClick={() => setOpen(true)}
          className="cursor-pointer group relative border border-slate-800 rounded-xl p-8 bg-slate-900/40 hover:border-sky-500/40 transition-colors"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-sky-500/10 transition-colors">
              <FiBookOpen className="w-5 h-5 text-sky-400" />
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3 className="text-lg font-semibold">
                  JavaScript Developer
                </h3>
                <span className="text-xs px-2 py-1 rounded bg-sky-500/10 text-sky-400">
                  Ongoing
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-1">
                Folkuniversitetet · Göteborg
              </p>

              <p className="text-sm text-slate-500 max-w-xl">
                2-year program focused on full-stack JavaScript development,
                React, Node.js, databases, deployment and modern web practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <EducationModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Education;
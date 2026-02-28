import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { projects } from "../data/projects";
import { extraProjects } from "../data/extraProjects";

const allProjects = [...projects, ...extraProjects];

const sections = [
  { label: "About", target: "#about" },
  { label: "Projects", target: "#projects" },
  { label: "Education", target: "#education" },
  { label: "Contact", target: "#contact" },
];

const scrollToTarget = (target) => {
  const el = document.querySelector(target);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const base =
      q.length === 0
        ? [
            ...sections,
            ...allProjects
              .slice(0, 3)
              .map((p) => ({ label: p.title, target: `/project/${p.id}` })),
          ]
        : [
            ...sections.filter((s) => s.label.toLowerCase().includes(q)),
            ...allProjects
              .filter((p) => {
                const title = (p.title || "").toLowerCase();
                const desc = (p.description || "").toLowerCase();
                const tags = Array.isArray(p.tags) ? p.tags : [];
                return (
                  title.includes(q) ||
                  desc.includes(q) ||
                  tags.some((t) => String(t).toLowerCase().includes(q))
                );
              })
              .map((p) => ({ label: p.title, target: `/project/${p.id}` })),
          ];

    // undvik dubletter om samma target råkar dyka upp
    const seen = new Set();
    return base.filter((item) => {
      if (seen.has(item.target)) return false;
      seen.add(item.target);
      return true;
    });
  }, [query]);

  const handleSelect = useCallback(
    (target) => {
      onClose();
      setQuery("");

      if (target.startsWith("#")) {
        // vi är redan på home när man öppnar paletten där
        scrollToTarget(target);
      } else {
        navigate(target);
      }
    },
    [navigate, onClose]
  );

  // ESC stänger + lås scroll när öppen
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -18 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[18%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-2xl">
              {/* Search */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800">
                <FiSearch className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections & projects..."
                  className="flex-1 bg-transparent text-sm outline-none text-slate-200 placeholder:text-slate-500"
                />
                <kbd className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto py-2">
                {results.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleSelect(item.target)}
                    className="group w-full flex items-center justify-between px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors text-left"
                  >
                    <span>{item.label}</span>
                    <FiArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                  </button>
                ))}

                {results.length === 0 && (
                  <div className="px-4 py-8 text-sm text-slate-400">
                    No results found.
                  </div>
                )}
              </div>

              <div className="px-4 py-3 border-t border-slate-800 text-[11px] text-slate-500">
                Tip: Press <span className="font-mono text-slate-300">⌘K</span>{" "}
                (or <span className="font-mono text-slate-300">Ctrl K</span>)
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
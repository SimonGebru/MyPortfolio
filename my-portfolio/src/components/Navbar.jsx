import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiCommand } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = navItems.map((i) => i.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#020617]/80 backdrop-blur border-b border-slate-800"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#")}
          className="text-left focus:outline-none"
          aria-label="Go to top"
        >
          <TypeAnimation
            sequence={["simon.gebru", 1200, "frontend.dev", 1200]}
            speed={55}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            className="text-slate-200 font-semibold tracking-tight"
          />
          <span className="ml-2 text-sky-400 font-mono text-xs hidden sm:inline">
            {"</>"}
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={[
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  "focus:outline-none focus:ring-1 focus:ring-sky-500",
                  isActive ? "text-white" : "text-slate-400 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-3 right-3 h-px bg-sky-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          {/* Command palette button */}
          {onCommandPalette && (
            <button
              onClick={onCommandPalette}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900/60 rounded-lg border border-slate-800 hover:text-white hover:border-sky-500/40 transition-colors focus:outline-none focus:ring-1 focus:ring-sky-500"
              aria-label="Open command palette"
            >
              <FiCommand className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
          )}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#020617]/95 backdrop-blur border-b border-slate-800 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 md:px-20 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={[
                      "text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      "focus:outline-none focus:ring-1 focus:ring-sky-500",
                      isActive
                        ? "text-white bg-slate-900/60 border border-slate-800"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/40",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                );
              })}

              {onCommandPalette && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onCommandPalette();
                  }}
                  className="mt-2 text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/40 transition-colors border border-slate-800"
                >
                  Open Command Palette (⌘K)
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
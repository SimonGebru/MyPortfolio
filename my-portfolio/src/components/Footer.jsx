import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] text-slate-200 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Simon Gebru. Built with React & Tailwind.
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Designed & developed with care.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Social */}
            <a
              href="https://www.linkedin.com/in/simon-gebru-80b21b1b8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/SimonGebru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>

            {/* Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
              aria-label="Back to top"
            >
              <span className="text-xs font-medium">Top</span>
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#1e1f25] text-lime-500 py-6 px-6 md:px-20 border-t border-lime-400 mt-0">
      {/* 🔝 Till toppen-länk */}
      <a
        href="#top"
        className="text-sm text-lime-400 hover:underline block mb-4 flex justify-center items-center gap-1 group"
      >
        Till toppen
        <FontAwesomeIcon
          icon={faArrowUp}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </a>

      {/* 📌 Huvudinnehåll i footern */}
      <div className="flex justify-between items-center flex-wrap gap-4 text-sm">
        <p>© {new Date().getFullYear()} Simon Gebru. Alla rättigheter förbehållna.</p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/simon-gebru-80b21b1b8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/SimonGebru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
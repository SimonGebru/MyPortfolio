import { useState } from "react";
import SkillsModal from "./SkillsModal";


const techStack = [
  // 🧑‍💻 Frontend
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },

  // 🚀 Backend
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "Express", icon: "/icons/express.svg" },

  // 💃️ Databaser
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Firestore", icon: "/icons/firestore.svg" },
  { name: "Vercel", icon: "/icons/vercel.svg" },

  // 🔧 Verktyg
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Trello", icon: "/icons/trello.svg" },
];

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
  id="about"
  className="bg-gradient-to-b from-[#f7f9fc] to-[#e9eff5] text-gray-800 py-16 px-6 md:px-20"
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}
        <div>
          <h2
            className="text-4xl font-bold mb-6 font-orbitron text-sky-600"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            About Me
          </h2>

          <p
            className="text-gray-700 text-lg leading-relaxed font-orbitron"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            I’m a curious and creative web developer with a strong interest in building functional,
            user-friendly, and visually engaging digital experiences. I enjoy solving problems with
            code and take pride in writing clean, maintainable solutions. I’m constantly learning and
            exploring new tools, frameworks, and best practices to stay current and improve as a developer.
            <br /><br />
            Outside of work, I stay active, follow football, and enjoy diving into new developments in tech.
            <br /><br /><br />
            Further down the page, you’ll find personal projects I’ve built in my spare time.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 inline-block bg-sky-500 text-white px-5 py-2 rounded font-semibold hover:bg-sky-400 transition"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            View My Skills
          </button>
        </div>

        {/* TEKNIKER/IKONER */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group bg-white border border-sky-200 p-4 rounded-lg hover:border-sky-500 transition transform hover:-translate-y-2 hover:scale-105 duration-300 shadow-md"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 mx-auto mb-2 filter grayscale group-hover:grayscale-0 transition duration-300"
              />
              <p className="text-sky-600 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal för färdigheter */}
      <SkillsModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default About;
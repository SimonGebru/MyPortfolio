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
  
    // 🗃️ Databaser
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Firestore", icon: "/icons/firestore.svg" }, 
  
    // 🔧 Verktyg
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Trello", icon: "/icons/trello.svg" },
  ];
  
  const About = () => {
    return (
      <section id="about" className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* TEXTSIDA */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Om mig</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Jag brinner för att skapa tydliga, kreativa och funktionella webbsidor. 
              Jag tycker det är roligt att lösa problem med kod och är alltid nyfiken 
              på att lära mig nya verktyg och tekniker. <br /><br />
              När jag inte kodar gillar jag att lyssna på musik, träna och nörda ner mig i teknik.
            </p>
          </div>
  
          {/* TEKNIKER/IKONER */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
  {techStack.map((tech) => (
    <div
      key={tech.name}
      className="group bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition transform hover:-translate-y-2 hover:scale-105 duration-300"
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="h-12 mx-auto mb-2 filter grayscale group-hover:grayscale-0 transition duration-300"
      />
      <p className="text-lime-400 font-semibold">{tech.name}</p>
    </div>
  ))}
</div>
        </div>
      </section>
    );
  };
  
  export default About;
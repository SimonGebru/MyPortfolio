import { useState } from "react";
import EducationModal from "./EducationModal";

const Education = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="education"
      className="relative bg-[#1e1f25] text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* 🔆 Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lime-300/10 to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400 opacity-5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-overlay z-0 pointer-events-none" />

      {/* 🔽 Soft Shadow Separator from About */}
      <div className="absolute top-0 left-0 w-full h-10 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.6)] z-10" />

      {/* 🔠 Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-600 tracking-wide uppercase">Education</h2>
      </div>

      {/* 🧊 Glassmorphism card */}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer relative z-10 max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-lime-400 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 text-center"
      >
        <h3 className="text-2xl font-bold mb-2 text-white">
          <span className="underline">2 years</span>{" "}
          <span className="text-yellow-400">[ongoing]</span>
        </h3>
        <p className="text-gray-200 mb-1">JavaScript Developer</p>
        <p className="text-pink-400 underline font-medium">
          Folkuniversitetet, Göteborg
        </p>
      </div>

      {/* 🧾 Modal */}
      <EducationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Education;
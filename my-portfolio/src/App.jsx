import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

import Navbar from "./components/Navbar";
import ParticleField from "./components/ParticleField";
import CommandPalette from "./components/CommandPalette";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
  }, []);

  // Easter egg för nyfikna utvecklare och rekryterare
  useEffect(() => {
    console.log(
      "%c👋 Hey, curious developer!",
      "font-size: 20px; font-weight: bold; color: #8b5cf6;"
    );

    console.log(
      "%cSince you're already inspecting the code, we might be a good match.\nIf you're hiring or want to build something together, let's talk.",
      "font-size: 13px; line-height: 1.6; color: #a1a1aa;"
    );

    console.log(
      "%cLinkedIn: https://www.linkedin.com/in/simon-gebru-80b21b1b8/\nEmail: te.gebru@hotmail.se",
      "font-size: 13px; line-height: 1.6; color: #8b5cf6; font-weight: bold;"
    );
  }, []);

  

  // Command palette state globalt (så ⌘K funkar överallt)
  const [cmdOpen, setCmdOpen] = useState(false);
  const openCmd = useCallback(() => setCmdOpen(true), []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);
  const toggleCmd = useCallback(() => setCmdOpen((v) => !v), []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleCmd();
      }
      if (e.key === "Escape") {
        closeCmd();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleCmd, closeCmd]);

  return (
    <>
      <ParticleField />
      <Toaster position="bottom-right" />

      {/* Navbar globalt = syns alltid */}
      <Navbar onCommandPalette={openCmd} />

      <CommandPalette isOpen={cmdOpen} onClose={closeCmd} />

      {/* Offset för fixed navbar (h-16) */}
      <main className="relative z-10 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

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
  // AOS (kan tas bort senare när allt är framer-motion)
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
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

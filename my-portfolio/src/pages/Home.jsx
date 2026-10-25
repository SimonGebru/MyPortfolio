import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OpenSourceContributions from "../components/OpenSourceContributions";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <OpenSourceContributions />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      
    </>
  );
};

export default Home;
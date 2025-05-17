import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      
    </>
  );
};

export default Home;
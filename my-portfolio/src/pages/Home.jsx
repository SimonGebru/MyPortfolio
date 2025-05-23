import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
};

export default Home;
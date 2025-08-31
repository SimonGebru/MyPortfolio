import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;

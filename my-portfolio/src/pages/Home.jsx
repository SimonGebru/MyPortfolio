import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Mina projekt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-2xl mt-2 font-semibold">{proj.title}</h2>
            <p className="text-gray-600">{proj.description}</p>
            <Link to={`/project/${proj.id}`} className="text-blue-500 mt-2 inline-block">
              Läs mer →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
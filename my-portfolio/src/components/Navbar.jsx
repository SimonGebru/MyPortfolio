import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-lg font-semibold">
          Simons Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-orbitron">
          <TypeAnimation
            sequence={["Simons Portfolio", 500]}
            speed={50}
            wrapper="span"
            repeat={0}
            cursor={true}
            className="text-lime-400 text-xl"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
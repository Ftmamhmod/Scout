import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
const NavBar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 ps-36  pe-36 p-5">
      <nav className="flex items-center justify-between  md:px-16">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-fit" />
          <div className="flex items-start gap-8 opacity-70">
            <Link to="/features" className="hover:text-purple-400 transition">
              Features
            </Link>
            <Link to="/pricing" className="hover:text-purple-400 transition">
              Pricing
            </Link>
            <Link to="/docs" className="hover:text-purple-400 transition">
              Docs
            </Link>
            <Link to="/blog" className="hover:text-purple-400 transition">
              Blog
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

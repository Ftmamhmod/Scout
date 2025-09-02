import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-4 md:ps-36 md:pe-36 p-5">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-fit" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-start gap-8 opacity-70">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0F0F10] text-center rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                to="/features"
                className="text-white hover:text-purple-400 transition"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-white hover:text-purple-400 transition"
              >
                Pricing
              </Link>
              <Link
                to="/docs"
                className="text-white hover:text-purple-400 transition"
              >
                Docs
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-purple-400 transition"
              >
                Blog
              </Link>
              <button className="px-5 py-2 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition">
                Login
              </button>
              <button className="px-5 py-2 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

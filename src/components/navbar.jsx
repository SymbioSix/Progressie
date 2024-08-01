import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import logo from "../assets/images/logo-selfie.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackgroundChange, setIsBackgroundChange] = useState("bg-transparent");
  const [isColorToggle, setIsColorToggle] = useState("text-white");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsBackgroundChange("bg-black");
        setIsColorToggle("text-white");
      } else {
        setIsBackgroundChange("bg-transparent");
        setIsColorToggle("text-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const locationNavMenu = (path) => {
    if (location.pathname === path &&(path === "/about" || path === "/faq") && window.scrollY < 500 ) {
      return "bg-white text-black";
    }

    if (location.pathname === path) {
      if (window.scrollY > 500) {
        return "bg-white text-black";
      } else {
        return "bg-black text-white";
      }
    } else {
      return "text-white";
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 pb-3 md:pb-0 transition-colors duration-300 ${isBackgroundChange}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-[15px]">
          <div className="text-2xl font-bold">
            <a href="/">
              <img src={logo} alt="Logo Selfie" />
            </a>
          </div>
          <div className="items-center hidden space-x-8 md:flex">
            <Link
              to="/dashboard"
              className={`text-lg px-5 transition-all ${locationNavMenu(
                "/dashboard"
              )}`}
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className={`text-lg px-5 transition-all ${locationNavMenu("/")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg px-5 transition-all ${locationNavMenu(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className={`text-lg px-5 transition-all ${locationNavMenu(
                "/faq"
              )}`}
            >
              FAQ
            </Link>
          </div>
          <div id="hamburger" className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isColorToggle} focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="flex flex-col space-y-2 md:hidden"
            style={{ transitionProperty: "opacity, transform" }}
          >
            <Link
              to="/"
              className={`text-lg px-3 transition-all ${locationNavMenu("/")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg px-3 transition-all ${locationNavMenu(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className={`text-lg px-3 transition-all ${locationNavMenu(
                "/faq"
              )}`}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
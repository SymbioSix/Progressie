import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import logo from "../assets/images/logo-selfie.svg";
import logo2 from "../assets/images/logo-selfie2.svg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackgroundChange, setIsBackgroundChange] =useState("bg-transparent");
  const [isColorToggle, setIsColorToggle] = useState("text-white");
  const [isLogo, setIsLogo] = useState(logo);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setIsLogo(logo);
    } else {
      setIsLogo(logo2);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setIsLogo(logo2);
        setIsBackgroundChange("bg-black");
        setIsColorToggle("!text-white");
      } else if (path === "/") {
        setIsLogo(logo);
        setIsBackgroundChange("bg-transparent");
        setIsColorToggle("!text-black");
      } else {
        setIsLogo(scrollY > 20 ? logo2 : logo2);
        setIsBackgroundChange(scrollY > 20 ? "bg-black" : "bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const locationNavMenu = (path) => {
    const isRoot = path === "/";
    const isSpecialPath = path === "/about" || path === "/faq";
    const scrollCondition = window.scrollY > 20;

    if (location.pathname === path) {
      if (isRoot) {
        return scrollCondition ? "bg-white text-black" : "bg-black text-white";
      }

      if (isSpecialPath) {
        return "bg-white text-black";
      }

      return scrollCondition ? "bg-white text-white" : "bg-black text-white";
    }

    if (["/about", "/faq"].includes(location.pathname)) {
      return "text-white";
    } else if (["/"].includes(location.pathname) && !scrollCondition) {
      return "text-black";
    } else if (["/"].includes(location.pathname) && scrollCondition) {
      return "text-white";
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 pb-2 md:pb-0 transition-colors duration-300 ${isBackgroundChange}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="text-xl font-bold">
            <Link to="/">
              <img
                src={isLogo}
                alt="Logo Selfie"
                className="w-[60px] h-auto"
              />
            </Link>
          </div>
          <div className="items-center hidden space-x-6 md:flex">
            {/* <Link
              to="/dashboard"
              className={`text-sm px-4 transition-all ${locationNavMenu(
                "/dashboard"
              )}`}
            >
              Dashboard
            </Link> */}
            <Link
              to="/"
              className={`text-sm px-4 transition-all ${locationNavMenu("/")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm px-4 transition-all ${locationNavMenu(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className={`text-sm px-4 transition-all ${locationNavMenu(
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
                className="w-5 h-5"
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
              className={`text-sm px-3 transition-all ${locationNavMenu("/")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm px-3 transition-all ${locationNavMenu(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className={`text-sm px-3 transition-all ${locationNavMenu(
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
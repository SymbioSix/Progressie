import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import CardService from "../components/cardService";
import CardTopic from "../components/cardTopic";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import heroImagez from "../assets/images/star.jpg";
import heroImage from "../assets/images/paralax2.png";
import "../assets/css/login.css";
import "../assets/css/parralax.css";


export default function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      try {
        const payloadToken = jwtDecode(token);
        const tokenExp = payloadToken.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (tokenExp > currentTime) {
          navigate("/dashboard");
        } else {
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };
  
  useEffect(() => {
    const body = document.body;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleParallaxScroll = () => {
      const heroSection = document.getElementById("hero");
      const scrollPosition = window.scrollY;

      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleParallaxScroll);
    return () => {
      window.removeEventListener("scroll", handleParallaxScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        {/* Hero Section */}
        <section
          id="hero"
          className="parallax-hero-section w-full h-screen pt-[70px] sm:pt-[120px] md:pt-[100px] xl:pt-0 bg-black"
          style={{ backgroundImage: `url(${heroImagez})` }} // Gambar diatur melalui style inline
        >
          <div className="container h-full">
            <div className="flex flex-col items-center justify-center w-full h-auto gap-2 sm:gap-5">
              <div className="text-center hero-content">
                <h1 className="px-5 mt-56 text-white uppercase sm:text-lg md:text-2xl lg:text-4xl">
                  Develop a positive mindset here to become the best version of yourself
                </h1>
                <p className="text-white uppercase sm:text-sm md:text-base">
                  Let’s get a positive mindset
                </p>
                <button
                  onClick={handleLoginClick}
                  className="mt-5 button"
                >
                  Login
                </button>
              </div>
              <div className="w-1/2 sm:w-[65%] py-5">
                <img
                  src={heroImage}
                  alt="Hero image Selfie"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Parallax */}
        <section
          id="service"
          className="bg-gradient-to-t from-[#FFFFFF] from-70% to-black to-90%"
        >
          <div className="w-full h-auto pt-[150px] sm:pt-[200px] pb-[100px] ">
            <CardService />
          </div>
        </section>

        {/* Topic Section */}
        <section
          id="topic"
          className="flex items-center justify-center w-full h-auto py-5"
        >
          <div className="container flex flex-col items-center justify-between sm:flex-row">
            <h1 className="text-3xl font-bold text-center sm:text-left sm:py-5">
              🎉 Exclusive Offer: Free for the First 100 Users! 🎉
            </h1>
            <CardTopic />
          </div>
        </section>
      </main>
      <div className="py-32 bg-gradient-to-t from-[#50C878] from-10% to-white to-70%"></div>
      <Footer />
    </>
  );
}
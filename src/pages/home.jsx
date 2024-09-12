import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardService from "../components/cardService";
import CardTopic from "../components/cardTopic";
import heroImagez from "../assets/images/star.jpg"; // Import gambar
import heroImage from "../assets/images/paralax2.png"; // Import gambar
import "../assets/css/login.css"; 
import "../assets/css/parralax.css"; // Import file CSS untuk parallax

export default function HomePage() {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const tokenPayload = token.split(".")[1];
        const decodedPayload = JSON.parse(atob(tokenPayload));
        const tokenExp = decodedPayload.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (tokenExp > currentTime) {
          navigate("/dashboard");
        } else {
          localStorage.removeItem("authToken");
          navigate("/login");
        }
      } catch (error) {
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    const body = document.body;
    
    // Function to handle scroll and set class
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };
  
    // Check scroll position on page load or refresh
    handleScroll();
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleParallaxScroll = () => {
      const heroSection = document.getElementById("hero");
      const scrollPosition = window.scrollY;
  
      // Adjust background position for parallax effect
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
            <div className="flex flex-col w-full justify-center items-center h-auto gap-2 sm:gap-5">
              <div className="hero-content text-center">
                <h1 className="sm:text-lg md:text-2xl lg:text-4xl text-white uppercase mt-56 px-5">
                  Develop a positive mindset here to become the best version of yourself
                </h1>
                <p className="text-white uppercase sm:text-sm md:text-base">
                  Let’s get a positive mindset
                </p>
                <button
  onClick={handleLoginClick}
  className="button mt-5"
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

        <section
  id="topic"
  className="w-full h-auto  flex items-center justify-center py-5"
>
  
  <div className="container flex flex-col sm:flex-row items-center justify-between">
    
    <h1 className="text-3xl font-bold text-center sm:text-left  sm:py-5">
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

import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardService from "../components/cardService";
import CardTopic from "../components/cardTopic";
import heroImage from "../assets/images/home-hero.png";

export default function HomePage() {
  const navigation = useNavigate();
  const handleLoginClick = () => {
    navigation("/login");
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-screen hero pt-[70px] sm:pt-[120px] md:pt-[100px] xl:pt-0 bg-gradient-to-t from-[#979797] from-10% to-white to-90%"
        >
          <div className="container">
            <div className="flex flex-wrap-reverse items-center justify-center w-full h-full">
              <div className="flex flex-col w-[100%] sm:w-[35%] gap-2 sm:gap-5">
                <h1 className="sm:text-lg text-center sm:text-left md:text-2xl lg:text-4xl font-bold uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.3)]">
                  Develop a positive mindset here to become the best version of
                  yourself
                </h1>
                <p className="text-center uppercase sm:text-left sm:text-sm md:text-base">
                  let`s get a positive mindset
                </p>
                <button
                  onClick={handleLoginClick}
                  className="w-fit self-center font-bold px-10 rounded-full py-2 shadow-md bg-[#F7EBE6]"
                >
                  Login
                </button>
              </div>
              <div className="w-[100%] sm:w-[65%]">
                <img
                  src={heroImage}
                  alt="Hero image Selfie"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="service"
          className="w-full h-auto bg-gradient-to-t from-white from-60% to-[#979797] to-100%"
        >
          <div className="flex items-center justify-center w-full h-auto pt-[150px] sm:pt-[300px] pb-[100px]">
            <CardService />
          </div>
        </section>
        <section
          id="topic"
          className="w-full h-auto bg-gradient-to-t from-[#F7EBE6] from-20% to-white to-100%"
        >
          <div className="container">
            <h1 className="text-3xl font-bold text-center">Our Core Topics</h1>
            <CardTopic />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import aboutTeamImage from "../../assets/images/about-team.png";
import aboutVisiImage from "../../assets/images/about-visi.png";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-[500px] bg-center bg-cover bg-[url('/src/assets/images/about-hero.png')]"
        >
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-3xl sm:text-[70px] font-bold text-white">About Us</p>
            </div>
          </div>
        </section>
        <section id="detail" className="w-full h-auto my-[60px] bg-white">
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-base md:text-2xl 2xl:text-4xl font-black text-center text-black px-0 md:px-[20px] 2xl:px-[170px]">
                Welcome to Self-ie, your trusted partner in self-improvement and
                personal development. Our mission is to empower individuals with
                the knowledge and skills they need to thrive in today`s dynamic
                world.
              </p>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="relative w-full h-auto md:h-[80vh] my-[50px] md:my-[20px] bg-white"
        >
          <div className="bg-team absolute top-[65%] sm:top-[58%] md:top-0 left-0 w-full sm:w-[80%] md:w-[50%] h-full sm:h-[50%] md:h-full bg-[#F2F2F2] z-0"></div>
          <div className="container flex items-center justify-center h-full">
            <div className="relative z-10 flex flex-wrap-reverse justify-start w-full h-full gap-10 sm:gap-5 md:gap-0">
              <div className="content-team w-full flex flex-col pt-[50px] sm:!pt-[40px] md:pt-0 sm:py-8 md:py-0 gap-5 md:gap-10 md:w-[55%]">
                <h3 className="text-2xl font-bold sm:text-4xl 2xl:text-5xl">Meet Our Team</h3>
                <p className="text-base sm:text-xl xl:text-2xl 2xl:text-3xl sm:pr-[120px] md:pr-[80px] xl:pr-[200px]">
                  Self-ie is proudly created by the dedicated team at SymbioSix.
                  Our team comprises experts in education, technology, and
                  personal development, all working together to provide you with
                  the best resources for your growth. We are passionate about
                  helping you succeed and are committed to delivering
                  high-quality content and support.
                </p>
              </div>
              <div className="w-full flex justify-center items-center md:w-[45%]">
                <img
                  src={aboutTeamImage}
                  alt="About team Selfie"
                  className="bg-cover bg-center rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="visi"
          className="relative w-full h-auto md:h-[60vh] py-[20px] mb-[120px] md:mb-[100px] md:my-[50px] bg-white"
        >
          <div className="bg-visi absolute top-[65%] sm:top-[58%] md:top-0 right-0 w-full sm:w-[80%] md:w-[52%] h-[50%] md:h-full bg-[#F7EBE6] z-0"></div>
          <div className="container flex flex-wrap items-center justify-center h-full">
            <div className="relative z-10 flex flex-wrap justify-start w-full gap-10 md:gap-0">
              <div className="w-full flex justify-center items-center md:w-[45%]">
                <img
                  src={aboutVisiImage}
                  alt="About team Selfie"
                  className="bg-cover bg-center rounded-[20px]"
                />
              </div>
              <div className="w-full flex flex-col container-desc-visi gap-5 sm:gap-10 md:w-[55%] pl-0 sm:pl-[130px] md:pl-[60px] lg:pl-[120px] pt-0 xl:pt-[40px]">
                <h3 className="text-2xl font-black sm:text-4xl 2xl:text-5xl">Our Vision</h3>
                <p className="text-base sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl pr-0 sm:pr-[10px] xl:pr-[40px]">
                  At Self-ie, we envision a world where everyone has the
                  opportunity to reach their full potential. We believe in the
                  power of continuous learning and personal growth to transform
                  lives and communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

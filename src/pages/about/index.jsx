import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import aboutTeamImage from "../../assets/images/about-team.png";
import aboutVisiImage from "../../assets/images/about-visi.png";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-[500px] bg-cover bg-[url('/src/assets/images/about-hero.png')]"
        >
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[70px] font-bold text-white">About Us</p>
            </div>
          </div>
        </section>
        <section id="description" className="w-full h-auto py-[60px] bg-white">
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-4xl font-black text-center text-black px-[170px]">
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
          className="relative w-full h-[80vh] py-[20px] bg-white"
        >
          <div className="absolute top-0 left-0 w-[52%] h-full bg-[#F2F2F2] z-0"></div>
          <div className="container flex items-center justify-center h-full">
            <div className="relative z-10 flex flex-wrap justify-start w-full">
              <div className="w-full flex flex-col gap-10 md:w-[55%]">
                <h3 className="text-5xl font-bold">Meet Our Team</h3>
                <p className="text-3xl pr-[200px]">
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
                  className="rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="visi"
          className="relative w-full h-[60vh] py-[20px] my-[50px] bg-white"
        >
          <div className="absolute top-0 right-0 w-[52%] h-full bg-[#F7EBE6] z-0"></div>
          <div className="container flex items-center justify-center h-full">
            <div className="relative z-10 flex flex-wrap justify-start w-full">
              <div className="w-full flex justify-center items-center md:w-[45%]">
                <img
                  src={aboutVisiImage}
                  alt="About team Selfie"
                  className="rounded-[20px]"
                />
              </div>
              <div className="w-full flex flex-col gap-10 md:w-[55%] pl-[120px]">
                <h3 className="text-5xl font-black">Our Vision</h3>
                <p className="text-3xl pr-[100px]">
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

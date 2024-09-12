import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import "../../assets/css/about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-[120px] bg-center bg-cover bg-[url('/src/assets/images/about-hero.png')]"
        >
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-3xl sm:text-[35px] font-bold text-white">About Us</p>
            </div>
          </div>
        </section>
        
        <section
          id="team"
          className="relative w-full h-[120px] md:h-[80vh] my-[50px] md:my-[20px] bg-white"
        >
          <h2 className="text-center text-3xl font-bold mb-8">SymbioSix Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/member1.png" alt="Member 1" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">I GEDE KRISNA GANESHA WIDHIARTA</h3>
              <p>BACKEND</p>
            </div>
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/arya.jpg" alt="Member 2" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">Arya Wijaya</h3>
              <p>FULLSTACK </p>
            </div>
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/member3.png" alt="Member 3" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">MUAMAR ZIDAN TRI ANTORO</h3>
              <p>FRONTEND</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-8">
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/member4.png" alt="Member 4" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">YUSTINUS DWI ADYRA</h3>
              <p>BACKEND</p>
            </div>
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/member5.png" alt="Member 5" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">MIREKEL ILHAM AKBAR</h3>
              <p>FRONTEND</p>
            </div>
            <div className="profile-card bg-gray-100 p-4 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/member6.png" alt="Member 6" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="mt-4 text-xl font-semibold">MIKAIL ARDYAS WIBOWO</h3>
              <p>UI/UX DESIGNER</p>
            </div>
          </div>
        </section>

        <section
  id="visi"
  className="bg-white py-16"
>
  
  <p className="text-center text-lg max-w-3xl mx-auto px-4 md:px-8 py-28">
    We aim to build a future where self-improvement is accessible to all. Our vision is to empower individuals to reach their full potential through education, personal growth, and continuous development.
  </p>
</section>

      </main>
      <Footer />
    </>
  );
}

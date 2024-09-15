import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import profileArya from "../../assets/images/arya.jpg"
import "../../assets/css/about.css";
import { useEffect, useState } from "react";
import { getAboutUs } from "../../services/about";

export default function AboutPage() {
  const [data, setData] = useState([])
  const response = getAboutUs()
  response.then((data) => setData(data))

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
          <h2 className="mb-8 text-3xl font-bold text-center">SymbioSix Team</h2>
          <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
            {data.map((item) => (
              <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
                <img src={item.aboutus_component_photo} alt="Member 1" className="object-cover w-32 h-32 mx-auto rounded-full" />
                <h3 className="mt-4 text-xl font-semibold">{item.aboutus_component_name}</h3>
                <p>{item.aboutus_component_jobdesc}</p>
              </div>
            ))}

            {/* <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
              <img src={profileArya} alt="Member 2" className="object-cover w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold">Arya Wijaya</h3>
              <p>FULLSTACK </p>
            </div>
            <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
              <img src="/src/assets/images/member3.png" alt="Member 3" className="object-cover w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold">MUAMAR ZIDAN TRI ANTORO</h3>
              <p>FRONTEND</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 mt-8 md:grid-cols-3">
            <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
              <img src="/src/assets/images/member4.png" alt="Member 4" className="object-cover w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold">YUSTINUS DWI ADYRA</h3>
              <p>BACKEND</p>
            </div>
            <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
              <img src="/src/assets/images/member5.png" alt="Member 5" className="object-cover w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold">MIREKEL ILHAM AKBAR</h3>
              <p>FRONTEND</p>
            </div>
            <div className="p-4 text-center bg-gray-100 rounded-lg shadow-md profile-card">
              <img src="/src/assets/images/member6.png" alt="Member 6" className="object-cover w-32 h-32 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold">MIKAIL ARDYAS WIBOWO</h3>
              <p>UI/UX DESIGNER</p>
            </div> */}
          </div>
        </section>

        <section
          id="visi"
          className="py-16 bg-white"
        >

          <p className="max-w-3xl px-4 mx-auto text-lg text-center md:px-8 py-28">
            We aim to build a future where self-improvement is accessible to all. Our vision is to empower individuals to reach their full potential through education, personal growth, and continuous development.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}

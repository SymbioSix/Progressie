import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


import "../../assets/css/about.css";
import { getAboutUs } from "../../services/about";
import { useQuery } from "react-query";

export default function AboutPage() {
  const { data, isLoading, error } = useQuery('aboutus', getAboutUs);
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (error != null) {
    return <span>Something went wrong: {error}</span>
  }

  console.log(data)

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
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Accordion from "../../components/accordion";

const data = [
  {
    title: "Judul 1",
    content: "Konten untuk accordion pertama.",
  },
  {
    title: "Judul 2",
    content: "Konten untuk accordion kedua.",
  },
];

export default function FaqPage() {
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
        <section id="list-menu" className="w-full h-auto py-[60px]">
          <div className="container w-full h-full">
            <ul className="flex items-center justify-between w-full h-full">
              <li className="text-4xl font-black">
                <a href="general">General</a>
              </li>
              <li className="text-4xl font-black">
                <a href="course">Courses</a>
              </li>
              <li className="text-4xl font-black">
                <a href="forum">Forum</a>
              </li>
              <li className="text-4xl font-black">
                <a href="rank">Rank</a>
              </li>
              <li className="text-4xl font-black">
                <a href="technical">Technical Support</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="general" className="w-full h-auto py-[100px]">
          <h3 className="pb-10 text-5xl font-bold text-center">General</h3>
          <div className="container w-full h-auto">
            <Accordion items={data} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

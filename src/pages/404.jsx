import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
      </div>
      <Footer />
    </>
  );
}
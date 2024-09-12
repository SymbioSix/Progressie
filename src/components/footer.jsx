import { Icon } from "@iconify/react";
import logo from "../assets/images/logo-selfie2.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto bg-[#50C878]">
        <div className="container xl:px-[60px]">
          <div className="flex flex-col sm:flex-row justify-between py-[10px]">
            <div
              id="logo"
              className="order-1 sm:order-1 w-full sm:w-[33%] flex items-center justify-start sm:justify-center"
            >
              <img
                src={logo}
                alt="Logo Selfie"
                className="w-[120px] h-[80px] md:w-[100px] md:h-[120px]"
              />
            </div>
            <div
              id="menu"
              className="order-2 sm:order-1 w-full sm:w-[33%] flex flex-col py-5 "
            >
              <p className="text-lg font-bold text-white sm:text-base xl:text-xl 2xl:text-2xl">
                <a href="/">Home</a>
              </p>
              <p className="text-lg font-bold text-white sm:text-base xl:text-xl 2xl:text-2xl">
                <a href="/about">About Us</a>
              </p>
              <p className="text-lg font-bold text-white sm:text-base xl:text-xl 2xl:text-2xl">
                <a href="/faq">FAQ</a>
              </p>
            </div>
            <div
              id="sosial-media"
              className="order-3 w-full sm:w-[33%] flex flex-col justify-around gap-1"
            >
              <div
                id="sosmed-insta"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://www.instagram.com/symbiosix2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon
                    icon="f7:logo-instagram"
                    width={22}
                    height={22}
                    style={{ color: "white" }}
                  />
                  <p className="text-lg font-bold text-white sm:text-base xl:text-xl 2xl:text-2xl">
                    symbiosix2024
                  </p>
                </a>
              </div>
              <div
                id="sosmed-wa"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://wa.link/fqy3f0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon
                    icon="formkit:whatsapp"
                    width={22}
                    height={22}
                    style={{ color: "white" }}
                  />
                  <p className="text-lg font-bold text-white sm:text-base xl:text-xl 2xl:text-2xl">
                    +62 814-1081-4644
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

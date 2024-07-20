import { Icon } from '@iconify/react';
import logo from '../assets/images/logo-selfie.svg';

const Footer = () => {
    return (
        <>
            <footer className="w-full h-auto bg-black">
                <div className="container xl:px-[100px]">
                    <div className="flex flex-col sm:flex-row justify-between gap-10 py-[100px]">
                        <div id="logo" className="order-1 sm:order-2 w-full sm:w-[33%] flex items-center justify-start sm:justify-center">
                            <img src={logo} alt="Logo Selfie" className="w-[150px] h-[100px] md:w-[240px] md:h-[140px]" />
                        </div>
                        <div id="menu" className="order-2 sm:order-1 w-full sm:w-[33%] flex flex-col gap-2">
                            <p className="text-xl font-bold text-white sm:text-lg xl:text-2xl 2xl:text-3xl"><a href="/">Home</a></p>
                            <p className="text-xl font-bold text-white sm:text-lg xl:text-2xl 2xl:text-3xl"><a href="/about">About Us</a></p>
                            <p className="text-xl font-bold text-white sm:text-lg xl:text-2xl 2xl:text-3xl"><a href="/faq">FAQ</a></p>
                        </div>
                        <div id="sosial-media" className="order-3 w-full sm:w-[33%] flex flex-col justify-around gap-2">
                            <div id="sosmed-insta" className="flex items-center gap-10 cursor-pointer">
                                <Icon icon="f7:logo-instagram" width={42} height={42} style={{ color: "white" }} />
                                <p className="text-xl font-bold text-white sm:text-lg xl:text-2xl 2xl:text-3xl">symbiosix2024</p>
                            </div>
                            <div id="sosmed-wa" className="flex items-center gap-10 cursor-pointer">
                                <Icon icon="formkit:whatsapp" width={42} height={42} style={{ color: "white" }} />
                                <p className="text-xl font-bold text-white sm:text-lg xl:text-2xl 2xl:text-3xl">+62 814-1081-4644</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
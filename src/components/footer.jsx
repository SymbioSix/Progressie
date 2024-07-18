import { Icon } from '@iconify/react';

import logo from '../assets/images/logo-selfie.svg';

const Footer = () => {
    return (
        <>
            <footer className="w-full h-auto bg-black">
                <div className="container px-[100px]">
                    <div className="flex justify-between gap-10 py-[100px]">
                        <div id="menu" className="w-[33%] flex flex-col gap-2">
                            <p className="text-3xl font-bold text-white"><a href="/">Home</a></p>
                            <p className="text-3xl font-bold text-white"><a href="about">About Us</a></p>
                            <p className="text-3xl font-bold text-white"><a href="/faq">FAQ</a></p>
                        </div>
                        <div id="logo" className="w-[33%] flex items-center justify-center">
                            <img src={logo} alt="Logo Selfie" className="w-[240px] h-[140px]" />
                        </div>
                        <div id="sosial-media" className="w-[33%] flex flex-col justify-around gap-2">
                            <div id="sosmed-insta" className="flex items-center gap-10 jus">
                                <Icon icon="f7:logo-instagram" width={42} height={42} style={{color: "white"}} />
                                <p className="text-3xl font-bold text-white">symbiosix2024</p>
                            </div>
                            <div id="sosmed-wa" className="flex items-center gap-10">
                                <Icon icon="formkit:whatsapp" width={42} height={42} style={{color: "white"}} />
                                <p className="text-3xl font-bold text-white">+62 814-1081-4644</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}   

export default Footer;
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo-selfie.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBackgroundChange, setIsBackgroundChange] = useState('bg-transparent');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsBackgroundChange('bg-black');
            } else {
                setIsBackgroundChange('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const locationNavMenu = (path) => {
        if (location.pathname === path && path === "/about") {
            if (window.scrollY > 500) {
                return 'bg-white text-black';
            } else {
                return 'bg-white text-black';
            }
        } else if (location.pathname === path) {
            if (window.scrollY > 500) {
                return 'bg-white text-black';
            } else {
                return 'bg-black text-white';
            }
        } else {
            if (window.scrollY > 500) {
                return 'text-white';
            } else {
                return 'text-black';
            }
        }
    };

    return (
        <nav className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isBackgroundChange}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[15px]">
                    <div className="text-2xl font-bold">
                        <a href="/">
                            <img src={logo} alt="Logo Selfie" />
                        </a>
                    </div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <a href="/" className={`text-lg px-5 transition-all ${locationNavMenu('/')}`}>Home</a>
                        <a href="/about" className={`text-lg px-5 transition-all ${locationNavMenu('/about')}`}>About Us</a>
                        <a href="/faq" className={`text-lg px-5 transition-all ${locationNavMenu('/faq')}`}>FAQ</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="flex flex-col space-y-2 md:hidden">
                        <a href="/" className={`text-lg px-3 transition-all ${locationNavMenu('/')}`}>Home</a>
                        <a href="/about" className={`text-lg px-3 transition-all ${locationNavMenu('/about')}`}>About Us</a>
                        <a href="/faq" className={`text-lg px-3 transition-all ${locationNavMenu('/faq')}`}>FAQ</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
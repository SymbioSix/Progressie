import { useState } from "react";
import logo from '../assets/images/logo-selfie.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-[15px]">
                    <div className="text-2xl font-bold">
                        <a href="/">
                            <img src={logo} alt="Logo Selfie" />
                        </a>
                    </div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <a href="/" className="text-lg transition-all text-primary hover:text-secondary">Home</a>
                        <a href="/about" className="text-lg transition-all text-primary hover:text-secondary">About Us</a>
                        <a href="/faq" className="text-lg transition-all text-primary hover:text-secondary">FAQ</a>
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
                    <div className="md:hidden">
                        <a href="/" className="text-lg transition-all text-primary hover:text-secondary">Home</a>
                        <a href="/about" className="text-lg transition-all text-primary hover:text-secondary">About Us</a>
                        <a href="/faq" className="text-lg transition-all text-primary hover:text-secondary">FAQ</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
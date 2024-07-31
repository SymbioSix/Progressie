import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo-selfie.svg";
import shortlogo from "../../../assets/images/logo-s.png";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const locationSideMenu = (path) => {
        if (
          location.pathname === path
        ) {
          return "bg-gray-200";
        }
      };

    return (
        <aside className="absolute h-screen flex z-50">
            <nav
                className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-500
                ${open ? 'w-56' : 'w-16'}`}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div className="relative flex flex-col items-center">
                    <div className="p-4 pb-0 mb-1.5 pt-4 flex justify-between items-center w-full">
                        <img 
                            src={logo} 
                            className={`transition-all duration-1000 w-16 
                            ${open ? 'block' : 'hidden'} `} 
                            alt="Logo Selfie"
                        />
                    </div>
                    <ul className="flex flex-col space-y-1 w-full">
                        <span 
                            className={`top-0 items-center transition-all duration-1000 
                            ${open ? 'hidden' : 'block'}`}>
                                <img 
                                    src={shortlogo}
                                    className="mb-2 cursor-pointer rounded-full bg-white w-16"
                                    alt="Short logo Selfie"
                                />
                        </span>
                        <li className={`hover:bg-gray-100 w-full ${locationSideMenu(
                            "/dashboard")}`}>
                            <a 
                                href="/dashboard" 
                                className={`text-center flex flex-row items-center ms-5 y-5 py-3 justify-start text-gray-500 hover:text-black w-full`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></path>
                                </svg>
                                <span 
                                    className={`ml-4 transition-all duration-1000 
                                    ${open ? 'block' : 'hidden'}`}>
                                    Home
                                </span>
                            </a>
                        </li>
                        <li className={`hover:bg-gray-100 w-full ${locationSideMenu(
                            "/dashboard/course")}`}>
                            <a 
                                href="/dashboard/course" 
                                className={`text-center flex flex-row items-center ms-5 py-3 justify-start text-gray-500 hover:text-black w-full`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M21 8c-.202 0-4.85.029-9 2.008C7.85 8.029 3.202 8 3 8a1 1 0 0 0-1 1v9.883a1 1 0 0 0 .305.719c.195.188.48.305.729.28l.127-.001c.683 0 4.296.098 8.416 2.025c.016.008.034.005.05.011c.119.049.244.083.373.083s.254-.034.374-.083c.016-.006.034-.003.05-.011c4.12-1.928 7.733-2.025 8.416-2.025l.127.001c.238.025.533-.092.729-.28c.194-.189.304-.449.304-.719V9a1 1 0 0 0-1-1M4 10.049c1.485.111 4.381.48 7 1.692v7.742c-3-1.175-5.59-1.494-7-1.576zm16 7.858c-1.41.082-4 .401-7 1.576v-7.742c2.619-1.212 5.515-1.581 7-1.692z"></path>
                                    <circle cx={12} cy={5} r={3} strokeWidth="2" stroke="currentColor" fill="white"></circle>
                                </svg>
                                <span 
                                    className={`ml-4 transition-all duration-1000 
                                    ${open ? 'block' : 'hidden'}`}>
                                    Course
                                </span>
                            </a>
                        </li>
                        <li className={`hover:bg-gray-100 w-full ${locationSideMenu(
                            "/dashboard/achievement")}`}>
                            <a 
                                href="/dashboard/achievement" 
                                className={`text-center flex flex-row items-center ms-5 py-3 justify-start text-gray-500 hover:text-black w-full`}
                            >
                                <div className="transform -scale-x-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16">
                                        <path fill="currentColor" fillRule="evenodd" d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span 
                                    className={`ml-4 transition-all duration-1000 
                                    ${open ? 'block' : 'hidden'}`}>
                                    Achievement
                                </span>
                            </a>
                        </li>
                        <li className={`hover:bg-gray-100 w-full ${locationSideMenu(
                            "/dashboard/to-do-list")}`}>
                            <a 
                                href="/dashboard/to-do-list"
                                className={`text-center flex flex-row items-center ms-5 py-3 justify-start text-gray-500 hover:text-black w-full`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <path d="M8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"></path>
                                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clipRule="evenodd"></path>
                                    </g>
                                </svg>
                                <span 
                                    className={`whitespace-nowrap ml-4 transition-all duration-1000 
                                    ${open ? 'block' : 'hidden'}`}>
                                    To Do List
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
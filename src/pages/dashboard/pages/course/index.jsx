import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Sidebar from '../../components/sidebar'
import Navbar from "../../components/header";
import CourseCover from "../../assets/images/course-cover.png";

export default function CoursePage(){
    return(
        <div className='flex flex-row'>
            <Sidebar />
            <Navbar />
            <div className="flex w-full h-auto mt-24 ml-20">
                <div className="flex flex-row w-full h-auto gap-10 mt-4 ml-5 mr-8 rounded-2xl">
                    <div className="flex-col w-[15%]">
                        <div className='mb-2 text-xl font-bold '>
                            Courses
                        </div>
                        <div className="flex flex-col justify-between w-full h-">
                            <Link to="/dashboard/course/course-Example">
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={CourseCover} alt="Course 1" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Course Tata Etika
                                    </span>
                                    <div className="text-sm text-gray-500">40+ lessons - 4+ hours</div>
                                </div>
                            </button>
                            </Link>
                            <Link to="/dashboard/course/course-Example">
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={CourseCover} alt="Course 2" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Manajemen Keuangan
                                    </span>
                                    <div className="text-sm text-gray-500">45 lessons - 5+ hours</div>
                                </div>
                            </button>
                            </Link>
                            <Link to="/dashboard/course/course-Example">
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={CourseCover} alt="Course 3" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Menjaga Diri
                                    </span>
                                    <div className="text-sm text-gray-500">12 lessons - 2 hours</div>
                                </div>
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-[60%] rounded-2xl p-4">
                        <div className="flex justify-center items-center text-2xl font-bold text-center w-full h-full">
                            No Course Selected Yet
                        </div>
                    </div>
                    <div className="flex-row h-[136.5%] w-[20%]">
                    <div className="flex flex-col h-[60%] shadow-[2px_2.5px_1px_2px_rgba(0,0,0,0.5)] rounded-2xl p-4 mb-4">                            <span className="text-xl font-bold text-left">Module</span>
                            <div className="flex justify-center items-center text-2xl font-bold text-center w-full h-full">
                                No Course Selected Yet
                            </div>
                        </div>
                        <div className="flex flex-col h-[60%] overflow-auto gap-4 rounded-2xl p-4 bg-gray-100">
                            <span className="text-xl font-bold text-center">To do list</span>
                            <div className="flex justify-center items-center text-2xl font-bold text-center w-full h-full">
                                No Course Selected Yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

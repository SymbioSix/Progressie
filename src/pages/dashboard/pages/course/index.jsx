import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Sidebar from '../../components/sidebar'
import Navbar from "../../components/header";
import CourseCover from "../../assets/images/course-cover.png";
import { Sidecourse } from "../../components/sidecourse";

export default function CoursePage() {
    return (
        <div className='flex flex-row'>
            <Sidebar />
            <Navbar />
            <div className="flex w-full h-auto mt-24 ml-20">
                <div className="flex flex-row w-full h-auto gap-10 mt-4 ml-5 mr-8 rounded-2xl">
                    <Sidecourse />
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
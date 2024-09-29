import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

import Sidebar from '../../components/sidebar';
import Navbar from "../../components/header";
import CourseVideo from "../../assets/videos/sample-video.mp4";
import { Sidecourse } from "../../components/sidecourse";
import api from "../../../../utils/request";
import { useQuery } from "react-query";
import { SideSubCourse } from "../../components/sidesubcourse";
import { SideTodolist } from "../../components/sidetodolist";

export default function CoursePage() {
    const [showDescription, setShowDescription] = useState(false);
    const id = useParams()
    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const location = useLocation();

    const locationSection = (path) => {
        if (location.pathname.startsWith(path)) {
            return "text-black border-b-4 border-black";
        }
    };

    const locationCourse = (path) => {
        if (location.pathname.startsWith(path)) {
            return "bg-gray-200";
        }
    };

    if (id.subcourseId == null) {
        return (
            <div className='flex flex-row'>
                <Sidebar />
                <Navbar />
                <div className="flex w-full h-full mt-24 ml-20">
                    <div className="flex flex-row w-full h-full gap-10 mt-4 ml-5 mr-8 rounded-2xl">
                        <Sidecourse />
                        <div className="flex flex-col h-auto w-[60%] rounded-2xl p-4">
                            <div className="flex text-left justify-left w-72 bg-white p-4 rounded-lg mb-0 font-bold">
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm")}`}>
                                    <span className={`duration-300 rounded-sm ${locationSection(
                                        `/dashboard/course/${id.courseId}`
                                    )}`}>Course</span>
                                </button>
                                {/* <Link to={"/dashboard/course/" + id.courseId + "/r/recommend"}>
                                <button className="flex-1 text-gray-500 rounded-sm focus:text-black focus:border-b-4 focus:border-black hover:text-gray-700 transition-all duration-300">
                                    Reading
                                </button>
                            </Link> */}
                            </div>
                            <div className="flex justify-center  text-2xl font-bold text-center w-full h-full">
                                <div className="flex-1 p-4">
                                    <div className="relative">
                                        <video preload="metadata" className="w-full rounded-3xl mb-4" controls>
                                            <source src={`${CourseVideo}#t=0.1`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <h2 className="flex text-left text-xl font-semibold mb-2 justify-between">
                                        Introduction to Product Design
                                        <button className="p-2 text-white bg-zinc-700 rounded-md font-normal text-sm">
                                            Watch Later
                                        </button>
                                    </h2>
                                    <p className="flex flex-row gap-1 text-sm text-left text-gray-500">
                                        John Smith
                                        <div className="text-gray-400">
                                            • Youtube •
                                        </div>
                                    </p>
                                    <div className="flex flex-row items-left justify-start mt-3 text-gray-600 font-normal">
                                        <span>Description</span>
                                        <button onClick={toggleDescription}>
                                            <Icon
                                                icon={showDescription ? "mdi:chevron-up" : "mdi:chevron-down"}
                                                width="26"
                                                height="26"
                                                style={{ color: "#D3D3D3" }}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${showDescription ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-sm font-normal text-justify mt-4">
                                            Selamat datang di Akademi Progressie! Dalam video ini, kita akan membahas pentingnya menghormati orang tua dan bagaimana hal ini menjadi pilar utama dalam kehidupan kita.
                                            <p className="mt-2">
                                                Orang tua adalah sosok yang telah memberikan kasih sayang, bimbingan, dan pengorbanan tanpa batas. Menghormati mereka tidak hanya menunjukkan rasa terima kasih kita, tetapi juga mencerminkan karakter dan nilai-nilai yang kita junjung tinggi.
                                                Kita akan mengeksplorasi berbagai cara untuk menunjukkan rasa hormat kepada orang tua, termasuk:
                                            </p>
                                            <ul className="ml-8 mt-1">
                                                <li>
                                                    Mendengarkan dan menghargai pendapat mereka.
                                                </li>
                                                <li>
                                                    Menjaga komunikasi yang baik dan penuh perhatian.
                                                </li>
                                                <li>
                                                    Membantu dan mendukung mereka dalam kehidupan sehari-hari.
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 pb-4 pl-4 text-left text-base bg-gray-100 rounded-md">
                                        1. Collecting Moodboard from dribbble.com
                                        <div className="flex flex-row items-center justify-between pt-4">
                                            <div className="flex flex-row gap-2">
                                                <button className="flex flex-row bg-gray-200 py-2 px-2 rounded-lg text-sm font-normal text-gray-600 items-center">
                                                    <Icon
                                                        icon="mdi:calendar-text"
                                                        width="24"
                                                        height="24"
                                                        style={{ color: "#555555" }}
                                                        className="flex-row mr-2"
                                                    />
                                                    See Calendar
                                                </button>
                                                <button className="bg-white py-3 gap-3 px-2 rounded-lg text-sm font-normal text-blue-500 outline outline-1 outline-blue-500 hover:bg-blue-500 hover:text-white">
                                                    Start Quiz
                                                </button>
                                            </div>
                                            <span className="font-normal text-gray-600 pr-4 text-red-700">
                                                1 Day Left
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideSubCourse courseId={id.courseId} />
                    </div>
                </div>
            </div>
        )
    } else {
        const getSubcourseData = async () => {
            try {
                let menuCourse = `/courses/${id.subcourseId}/subcourse`;
                console.log(menuCourse);
                const response = await api.get(`${menuCourse}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching course data:", error);
                throw error;
            }
        };
        const { data, isLoading, error } = useQuery('subcourse', getSubcourseData);
        if (isLoading) {
            return <span>Loading...</span>
        }

        if (error != null) {
            return <span>Something went wrong: {error}</span>
        }
        return (
            <div className='flex flex-row'>
                <Sidebar />
                <Navbar />
                <div className="flex w-full h-full mt-24 ml-20">
                    <div className="flex flex-row w-full h-full gap-10 mt-4 ml-5 mr-8 rounded-2xl">
                        <Sidecourse />
                        <div className="flex flex-col h-auto w-[60%] rounded-2xl p-4">
                            <div className="flex text-left justify-left w-72 bg-white p-4 rounded-lg mb-0 font-bold">
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm")}`}>
                                    <span className={`duration-300 rounded-sm ${locationSection(
                                        `/dashboard/course/${id.courseId}`
                                    )}`}>Course</span>
                                </button>
                                <Link to={"/dashboard/course/" + id.courseId + "/" + data.subcourse_id + "/r/recommend"}>
                                    <button className="flex-1 text-gray-500 rounded-sm focus:text-black focus:border-b-4 focus:border-black hover:text-gray-700 transition-all duration-300">
                                        Reading
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-center  text-2xl font-bold text-center w-full h-full">
                                <div className="flex-1 p-4">
                                    <div className="relative">
                                        {/* <iframe
                                            src={`${data.video_content.video_link}`}
                                            frameborder='0'
                                            allow='autoplay; encrypted-media; gyroscope; picture-in-picture; web-share'
                                            allowfullscreen
                                            title={data.video_content.video_title}
                                            className="w-full rounded-3xl mb-4"

                                        />
                                        <video preload="metadata" className="w-full rounded-3xl mb-4" controls>
                                            <source src={`${data.video_content.video_link}#t=0.1`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video> */}
                                    </div>
                                    <h2 className="flex text-left text-xl font-semibold mb-2 justify-between">
                                        {data.subcourse_name}
                                        <button className="p-2 text-white bg-zinc-700 rounded-md font-normal text-sm">
                                            Watch Later
                                        </button>
                                    </h2>
                                    <p className="flex flex-row gap-1 text-sm text-left text-gray-500">
                                        {data.video_content.source}
                                        <div className="text-gray-400">
                                            • {data.video_content.platform_source} •
                                        </div>
                                    </p>
                                    <div className="flex flex-row items-left justify-start mt-3 text-gray-600 font-normal">
                                        <span>Description</span>
                                        <button onClick={toggleDescription}>
                                            <Icon
                                                icon={showDescription ? "mdi:chevron-up" : "mdi:chevron-down"}
                                                width="26"
                                                height="26"
                                                style={{ color: "#D3D3D3" }}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${showDescription ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-sm font-normal text-justify mt-4">
                                            {data.video_content.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 pb-4 pl-4 text-left text-base bg-gray-100 rounded-md">
                                        1. Collecting Moodboard from dribbble.com
                                        <div className="flex flex-row items-center justify-between pt-4">
                                            <div className="flex flex-row gap-2">
                                                <button className="flex flex-row bg-gray-200 py-2 px-2 rounded-lg text-sm font-normal text-gray-600 items-center">
                                                    <Icon
                                                        icon="mdi:calendar-text"
                                                        width="24"
                                                        height="24"
                                                        style={{ color: "#555555" }}
                                                        className="flex-row mr-2"
                                                    />
                                                    See Calendar
                                                </button>
                                                <button className="bg-white py-3 gap-3 px-2 rounded-lg text-sm font-normal text-blue-500 outline outline-1 outline-blue-500 hover:bg-blue-500 hover:text-white">
                                                    Start Quiz
                                                </button>
                                            </div>
                                            <span className="font-normal text-gray-600 pr-4 text-red-700">
                                                1 Day Left
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-row h-full w-[20%] overflow-auto">
                            <SideSubCourse courseId={id.courseId} />
                            <SideTodolist />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
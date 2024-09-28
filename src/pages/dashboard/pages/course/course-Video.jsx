import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

import Sidebar from '../../components/sidebar';
import Navbar from "../../components/header";
import CourseVideo from "../../assets/videos/sample-video.mp4";
import { Sidecourse } from "../../components/sidecourse";
import api from "../../../../utils/request";

export default function CoursePage() {
    const [showDescription, setShowDescription] = useState(false);
    const courseId = useParams()
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

    const [error, setError] = useState(null);
    const [subcourseItems, setSubcourseItems] = useState([]);
    const getCourseData = async () => {
        try {
            let menuCourse = `/courses/${courseId.id}/subcourses`;
            console.log(menuCourse);
            const response = await api.get(`${menuCourse}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching course data:", error);
            throw error;
        }
    };

    useEffect(() => {
        getCourseData()
            .then((data) => setSubcourseItems(data.subcourses))
            .catch((error) => {
                setError("Not Found");
                throw error;
            });
    }, []);



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
                                    `/dashboard/course/${courseId.id}`
                                )}`}>Course</span>
                            </button>
                            <Link to={"/dashboard/course/" + courseId.id + "/r/recommend"}>
                                <button className="flex-1 text-gray-500 rounded-sm focus:text-black focus:border-b-4 focus:border-black hover:text-gray-700 transition-all duration-300">
                                    Reading
                                </button>
                            </Link>
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
                    <div className="flex-row h-full w-[20%] overflow-auto">
                        <div className="flex flex-col h-[60%] shadow-[2px_2.5px_1px_2px_rgba(0,0,0,0.5)] rounded-2xl p-4 mb-4 " style={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <span className="text-xl pb-2 font-bold text-left">Module</span>
                            {subcourseItems.map((item) => (

                                <div id="container-list-target" className="flex items-center gap-3 p-3">
                                    <Icon
                                        icon="teenyicons:tick-circle-solid"
                                        width="24"
                                        height="24"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex flex-col gap-0.25 text-sm">
                                        <div className="flex flex-row items-center mb-0.5">
                                            <Icon
                                                icon="f7:play-rectangle"
                                                width="20"
                                                height="20"
                                                style={{ color: "black" }}
                                                className="items-center flex-shrink-0 flex-row mr-2"
                                            />
                                            <span className="font-bold text-black">
                                                {item.sequence} - {item.subcourse_name}
                                            </span>
                                        </div>
                                        <span className="text-black pl-7 text-xs">
                                            (3 : 36)
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {/* <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:contrast-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            02 - Hormat Kepada Orang Tua
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (13 : 09)
                                    </span>
                                </div>
                            </div>
                            <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:ellipse-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            03 - Product Designer Role Design
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (3 : 36)
                                    </span>
                                </div>
                            </div>
                            <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:ellipse-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            04 - A Little Bit of a Background
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (7 : 34)
                                    </span>
                                </div>
                            </div>
                            <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:ellipse-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            05 - Benefits of Being a Productive Person
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (5 : 12)
                                    </span>
                                </div>
                            </div>
                            <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:ellipse-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            06 - Is This a Carreer for Me?
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (8 : 45)
                                    </span>
                                </div>
                            </div>
                            <div id="container-list-target" className="flex items-center gap-3 p-3">
                                <Icon
                                    icon="ion:ellipse-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#000000" }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex flex-col gap-0.25 text-sm">
                                    <div className="flex flex-row items-center mb-0.5">
                                        <Icon
                                            icon="f7:play-rectangle"
                                            width="20"
                                            height="20"
                                            style={{ color: "black" }}
                                            className="items-center flex-shrink-0 flex-row mr-2"
                                        />
                                        <span className="font-bold text-black">
                                            07 - Misconceptions About
                                        </span>
                                    </div>
                                    <span className="text-black pl-7 text-xs">
                                        (7 : 22)
                                    </span>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex flex-col h-[60%] overflow-auto gap-4 rounded-2xl p-4 bg-gray-100">
                            <span className="text-xl font-bold text-center">To do list</span>
                            <div className="w-full h-auto overflow-auto">
                                <div className="font-bold text-md">
                                    Subcourse Name
                                </div>
                                <div id="container-list-target" className="flex items-center gap-3 p-3">
                                    <Icon
                                        icon="teenyicons:tick-circle-solid"
                                        width="24"
                                        height="24"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <Icon
                                        icon="hugeicons:task-01"
                                        width="26"
                                        height="26"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span className="font-bold text-black">
                                            Video Memasak
                                        </span>
                                        <span className="font-bold text-black">
                                            Quiz Menang
                                        </span>
                                        <span className="text-black text-xs">
                                            Today 01.00 PM
                                        </span>
                                    </div>
                                </div>
                                <div id="container-list-target" className="flex justify-center items-center gap-3 p-3">
                                    <Icon
                                        icon="teenyicons:tick-circle-solid"
                                        width="24"
                                        height="24"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span className="font-bold text-black">
                                            Cek Apakah Kamu Sudah Melakukan Target
                                        </span>
                                        <span className="text-black text-xs">
                                            Today 03.00 PM
                                        </span>
                                    </div>
                                </div>
                                <div id="container-list-target" className="flex items-center gap-3 p-3">
                                    <Icon
                                        icon="teenyicons:tick-circle-solid"
                                        width="24"
                                        height="24"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <Icon
                                        icon="hugeicons:task-01"
                                        width="26"
                                        height="26"
                                        style={{ color: "#000000" }}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span className="font-bold text-black">
                                            Video Memasak
                                        </span>
                                        <span className="font-bold text-black">
                                            Quiz Menang
                                        </span>
                                        <span className="text-black text-xs">
                                            Tomorrow 03.00 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
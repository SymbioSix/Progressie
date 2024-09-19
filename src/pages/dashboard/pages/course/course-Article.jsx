import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import Sidebar from '../../components/sidebar';
import Navbar from "../../components/header";
import CourseCover from "../../assets/images/course-cover.png";
import ArticleBanner from "../../assets/images/banner-article.png";

export default function CoursePage(){

    const location = useLocation();

    const locationCourse = (path) => {
        if (location.pathname.startsWith(path)) {
        return "bg-gray-200";
        }
    };

    return(
        <div className='flex flex-row'>
            <Sidebar />
            <Navbar />
            <div className="flex w-full h-full mt-24 ml-20">
                <div className="flex flex-row w-full h-full gap-10 mt-4 ml-5 mr-8 rounded-2xl">
                    <div className="flex-col w-[15%]">
                        <div className='mb-2 text-xl font-bold '>
                            Courses
                        </div>
                        <div className="flex flex-col justify-between w-full">
                            <button className={`hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4  ${locationCourse(
                                "/dashboard/course/course-Example"
                            )}`}>
                                <img src={CourseCover} alt="Course 1" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Course Tata Etika
                                    </span>
                                    <div className="text-sm text-gray-500">40+ lessons - 4+ hours</div>
                                </div>
                            </button>
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={CourseCover} alt="Course 2" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Manajemen Keuangan
                                    </span>
                                    <div className="text-sm text-gray-500">45 lessons - 5+ hours</div>
                                </div>
                            </button>
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={CourseCover} alt="Course 3" className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        Menjaga Diri
                                    </span>
                                    <div className="text-sm text-gray-500">12 lessons - 2 hours</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col ml-10 h-auto w-[60%] rounded-2xl p-4">
                        <Link to="/dashboard/course/course-Example/r/recommend">
                            <button className="flex gap-4">
                                <Icon
                                    icon="ion:arrow-back-outline"
                                    width="24"
                                    height="24"
                                    style={{ color: "#555555" }}
                                    className="z-10 flex-shrink-0"
                                />
                                Back to Course
                            </button>
                        </Link>
                        <div className="mt-6 font-bold text-xl">Tips Sopan Santun Ke Orang yang Lebih Tua</div>
                        <img 
                            src={ArticleBanner} alt="article image"
                            className="mt-4 rounded-xl"
                        />
                        <p className="mt-6 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget metus mauris. Aliquam luctus mollis lorem. Maecenas euismod metus sodales, eleifend orci sed, finibus nunc. Phasellus vel erat a mi sagittis posuere in et quam. Phasellus sodales mollis nisl in porttitor. Maecenas eget blandit tellus. Morbi ac lorem quis lorem iaculis efficitur in in nibh. Nam nec enim urna. Aenean vitae mattis erat. Aenean non viverra sem. In viverra nibh et augue ullamcorper viverra. Suspendisse id accumsan ligula. Quisque laoreet venenatis felis, quis iaculis libero. Mauris vehicula augue sit amet varius ultricies. Integer vel tortor a nibh pharetra tristique vitae a arcu. Nulla quis rhoncus lectus, id auctor magna.
                        </p>
                        <p className="mt-6 text-justify">
                            Morbi et eros sagittis, tempor felis non, luctus turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris fermentum cursus lacus, tincidunt consectetur arcu imperdiet non. Nunc arcu tortor, aliquam non laoreet at, laoreet ac leo. Quisque ornare ac sapien at convallis. Duis rutrum sodales est, eget pretium lacus cursus ut. Aenean vel elementum augue. Praesent posuere neque ut ante commodo, vel interdum enim lobortis. Maecenas nec dui facilisis, interdum felis in, viverra erat. Quisque in dignissim mauris, luctus posuere sem.
                        </p>
                        <p className="mt-6 text-justify">
                            Sed aliquet ultrices aliquet. Donec id velit eu elit convallis fermentum. Nunc feugiat leo tortor, sit amet vestibulum arcu ullamcorper et. Fusce mollis purus ac nisl vestibulum mollis. Proin congue purus in metus malesuada, quis commodo libero eleifend. Quisque id semper neque. Fusce cursus blandit quam sit amet molestie. Etiam augue sapien, ultricies eu pretium rutrum, aliquet at mi. Nam euismod id diam in viverra. Etiam vestibulum sapien sed posuere porttitor. Curabitur elementum erat commodo sapien placerat suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

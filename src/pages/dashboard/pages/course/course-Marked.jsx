import { Link , useLocation } from "react-router-dom";

import Sidebar from '../../components/sidebar';
import Navbar from "../../components/header";
import PostCardMarked from "../../components/postcardMarked";
import CourseCover from "../../assets/images/course-cover.png";

export default function CoursePage(){

    const posts = [
        {
          author: 'Amit Das',
          daysAgo: 4,
          title: 'Tips sopan santun ke orang yang lebih tua',
          description:
            'An intense way to learn about the process and practice your design skills — My 1st hackathon Hackathons have been on my mind...',
          imgSrc: CourseCover,
          readTime: '3 min read',
          destination: "/dashboard/course/course-Example/r/article-Example",
        },
        {
          author: 'Amit Das',
          daysAgo: 4,
          title: 'Ketahuilah hubungan yang sehat',
          description:
            'An intense way to learn about the process and practice your design skills — My 1st hackathon Hackathons have been on my mind...',
          imgSrc: CourseCover,
          readTime: '3 min read',
        },
        {
          author: 'Amit Das',
          daysAgo: 4,
          title: 'Masalah mental dan kaitan nya dengan tata etika',
          description:
            'An intense way to learn about the process and practice your design skills — My 1st hackathon Hackathons have been on my mind...',
          imgSrc: CourseCover,
          readTime: '3 min read',
        },
      ];

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

    const locationReading = (path) => {
        if (location.pathname.startsWith(path)) {
        return "text-black border-b-2 border-black";
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
                    <div className="flex flex-col h-auto w-[60%] rounded-2xl p-4">
                        <div class="flex justify-between w-72 bg-white p-4 rounded-lg font-bold">
                            <Link to="/dashboard/course/course-Example/">
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                                )}`}>
                                    Course
                                </button>
                            </Link>
                            <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                            )}`}>
                                <span className={`duration-300 rounded-sm ${locationSection(
                                "/dashboard/course/course-Example/r"
                                )}`}>Reading</span>
                            </button>
                        </div>
                        <div class="flex justify-between w-72 bg-white p-4 rounded-lg">
                            <Link to="/dashboard/course/course-Example/r/marked">
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                                )}`}>
                                    <span className={`duration-300 rounded-sm ${locationReading(
                                    "/dashboard/course/course-Example/r/marked"
                                    )}`}>
                                        Marked
                                    </span>
                                </button>
                            </Link>
                            <Link to="/dashboard/course/course-Example/r/recommend">
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                                )}`}>
                                    <span className={`duration-300 rounded-sm ${locationReading(
                                    "/dashboard/course/course-Example/r/recommend"
                                    )}`}>
                                        Recommended
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="p-6 min-h-screen">
                            {posts.map((post, index) => (
                                <PostCardMarked key={index} {...post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

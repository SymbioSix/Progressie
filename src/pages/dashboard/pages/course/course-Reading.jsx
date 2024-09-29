import { Link, useLocation, useParams } from "react-router-dom";

import Sidebar from '../../components/sidebar';
import Navbar from "../../components/header";
import PostCardRec from "../../components/postcardReccomend";
import CourseCover from "../../assets/images/course-cover.png";
import { Sidecourse } from "../../components/sidecourse";
import { useQuery } from "react-query";
import api from "../../../../utils/request";

export default function CoursePage() {

    const posts = [
        {
            author: 'Amit Das',
            daysAgo: 4,
            title: 'Tips sopan santun ke orang yang lebih tua',
            description:
                'An intense ways to learn about the process and practice your design skills — My 1st hackathon Hackathons have been on my mind...',
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
    const id = useParams()
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
                        <div class="flex justify-between w-72 bg-white p-4 rounded-lg font-bold">
                            <Link to={`/dashboard/course/${id.courseId}`}>
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                                )}`}>
                                    Course
                                </button>
                            </Link>
                            <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                            )}`}>
                                <span className={`duration-300 rounded-sm ${locationSection(
                                    "/dashboard/course/" + id.courseId + "/" + id.subcourseId + "/r"
                                )}`}>Reading</span>
                            </button>
                        </div>
                        <div class="flex justify-between w-72 bg-white p-4 rounded-lg">
                            <Link to={`/dashboard/course/${id.courseId}/${id.subcourseId}/r/marked`}>
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                                )}`}>
                                    Marked
                                </button>
                            </Link>
                            <Link to={`/dashboard/course/${id.courseId}/${id.subcourseId}/r/recommend`}>
                                <button className={`flex-1 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-sm"
                            )}`}>
                                    <span className={`duration-300 rounded-sm ${locationReading(
                                        "/dashboard/course/" + id.courseId + "/" + id.subcourseId + "/recommend"
                                    )}`}>
                                        Recommended
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="p-6 min-h-screen">
                            {posts.map((post, index) => (
                                <PostCardRec key={index} {...post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

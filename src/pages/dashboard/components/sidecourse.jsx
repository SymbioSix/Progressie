import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import api from "../../../utils/request";

export const Sidecourse = () => {
    const [courseItems, setCourseItems] = useState([]);
    const [error, setError] = useState(null);
    const getCourseData = async () => {
        try {
            let menuCourse = '/courses';
            const response = await api.get(`${menuCourse}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching course data:", error);
            throw error;
        }
    };

    useEffect(() => {
        getCourseData()
            .then((data) => setCourseItems(data))
            .catch((error) => {
                setError("Not Found");
                throw error;
            });

    }, []);
    return (
        <div className="flex-col w-[15%]">
            <div className='mb-2 text-xl font-bold '>
                Courses
            </div>
            <div className="flex flex-col justify-between w-full h-">
                {error ? (
                    <li className="text-center text-red-500">Not Found</li>
                ) : (

                    courseItems.map((course) => (
                        <Link to={"/dashboard/course/" + course.course_id} key={course.course_id}>
                            <button className="hover:bg-gray-100 rounded-xl pl-1 py-2 flex text-left flex-row items-start gap-4 mb-4">
                                <img src={course.course_image} alt={course.course_name + " Course"} className="w-1/3 rounded-md" />
                                <div>
                                    <span className="font-semibold">
                                        {course.course_name}
                                    </span>
                                    <div className="text-sm text-gray-500">{course.price == 0 ? ("Free") : ("Rp" + course.price)}</div>
                                </div>
                            </button>
                        </Link>

                    ))
                )
                }
            </div>
        </div>
    );
}
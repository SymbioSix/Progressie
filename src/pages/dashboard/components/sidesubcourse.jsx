import { Link } from "react-router-dom";
import api from "../../../utils/request";
import { useQuery } from "react-query";
import { Icon } from "@iconify/react";

export const SideSubCourse = ({ courseId }) => {
    const getSubcoursesData = async () => {
        try {
            let menuCourse = `/courses/${courseId}/subcourses`;
            console.log(menuCourse);
            const response = await api.get(`${menuCourse}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching course data:", error);
            throw error;
        }
    };

    const { data, isLoading, error } = useQuery('subcourses', getSubcoursesData);

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (error != null) {
        return <span>Something went wrong: {error}</span>
    }

    return (
        <div className="flex flex-col h-[60%] shadow-[2px_2.5px_1px_2px_rgba(0,0,0,0.5)] rounded-2xl p-4 mb-4 " style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <span className="text-xl pb-2 font-bold text-left">Module</span>
            {data.subcourses.map((item) => (
                <Link reloadDocument to={"/dashboard/course/" + courseId + "/" + item.subcourse_id} key={item.subcourse_id}>
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

                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
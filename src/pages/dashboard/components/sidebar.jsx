import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import api from "../../../utils/request";
import logo from "../../../assets/images/logo-selfie.svg";
import shortlogo from "../../../assets/images/logo-s.png";
import { useQuery } from "react-query";


const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const locationSideMenu = (path) => {
    if (location.pathname === path) {
      return "bg-gray-200";
    } else {
      return "";
    }
  };

  const getRoleMenu = async () => {
    try {
      let menuSidebar = '/dashboard/sidebar';
      const response = await api.get(`${menuSidebar}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sidebar menu:", error);
      throw error;
    }
  };
  const { data, isLoading, error } = useQuery('sidebar', getRoleMenu);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (error != null) {
    return <span>Something went wrong: {error}</span>
  }

  return (
    <aside className="absolute z-50 flex h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-500
                ${open ? "w-56" : "w-16"}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="relative flex flex-col items-center">
          <div className="p-4 pb-0 mb-1.5 pt-4 flex justify-between items-center w-full">
            <Link to="/dashboard">
              <img
                src={logo}
                className={`transition-all duration-1000 w-16 
                              ${open ? "block" : "hidden"} `}
                alt="Logo Selfie"
              />
            </Link>
          </div>
          <ul className="flex flex-col w-full space-y-1">
            <span
              className={`top-0 items-center transition-all duration-1000 
                            ${open ? "hidden" : "block"}`}
            >
              <img
                src={shortlogo}
                className="w-16 mb-2 bg-white rounded-full cursor-pointer"
                alt="Short logo Selfie"
              />
            </span>
            {
              error ? (
                <li className="text-center text-red-500">Not Found</li>
              ) : (
                data.map((item, index) => (
                  <li
                    key={index}
                    className={`hover:bg-gray-100 w-full ${locationSideMenu(
                      item.sidebar_data.endpoint
                    )}`}
                  >
                    <Link
                      to={item.sidebar_data.endpoint}
                      className={`text-center flex flex-row items-center ms-5 y-5 py-3 justify-start text-gray-500 hover:text-black w-full`}
                    >
                      <div
                        className="transform -scale-x-100"
                        dangerouslySetInnerHTML={{ __html: item.sidebar_data.icon_data }}
                      ></div>
                      <span
                        className={`ml-4 transition-all duration-1000 text-black ${open ? "block" : "hidden"}`}>
                        {item.sidebar_data.sidebar_name}
                      </span>
                    </Link>
                  </li>
                ))
              )
            }
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
import { useState, useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserContext } from "../../../context/user";
import api from "../../../utils/request";
import logo from "../../../assets/images/logo-selfie.svg";
import shortlogo from "../../../assets/images/logo-s.png";


const Sidebar = () => {
  const location = useLocation();
  const { userRole } = useContext(UserContext);
  const [sidebarItems, setSidebarItems] = useState([]);
  const [error, setError] = useState(null);
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
      if (!userRole) {
        throw new Error("User role is not available");
      }

      let menuSidebar = '/dashboard/sidebar';
      const response = await api.get(`${menuSidebar}?role=${userRole}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sidebar menu:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (userRole) {
      getRoleMenu()
        .then((data) => setSidebarItems(data))
        .catch((error) => {
          setError("Not Found");
          throw error;
        });
    }
  }, [userRole]);

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
                sidebarItems.map((item, index) => (
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.3em"
                        height="1.3em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"
                        ></path>
                      </svg> */}
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
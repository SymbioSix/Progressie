import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { UserContext } from "../../../context/user";
import useTokenExpirationCheck from "../../../hooks/useTokenExpire";
import Sidebar from "../components/sidebar";
import Navbar from "../components/header";
import logoAccount from "../../../assets/images/profile.jpg"


export default function SettingsPage() {
  useTokenExpirationCheck();
  const [getUsername, setGetUsername] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (userData) {
      setGetUsername(userData?.user_data?.username);
    }
  });
  
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <Sidebar />
        <div className="flex items-center w-full h-screen mt-24 ml-20">
          <div className="flex flex-col items-center gap-10 mt-4 mr-8 ml-5 p-5 bg-[#F7EBE6] w-full h-auto rounded-2xl">
            <div className="flex items-center w-full gap-5">
              <img
                src={logoAccount}
                alt="logo"
                className="w-20 h-20 rounded-full"
              />
              <span className="text-lg">
                {
                  getUsername ? getUsername : "User Name"
                }
              </span>
            </div>
            <hr className="w-[70%] h-[2px] mt-5 mb-2 bg-black" />
            <ul className="w-[30%] flex flex-col items-start gap-5">
              <li>
                <span className="text-lg font-bold">Account Settings</span>
              </li>
              <li className="w-full">
                <Link to="/dashboard/profile"  className="flex justify-between w-full">
                  <span className="text-lg">Edit profile</span>
                  <Icon
                    icon="iconamoon:arrow-right-2-light"
                    width="26"
                    height="26"
                    style={{ color: "#000000" }}
                  />
                </Link>
              </li>
              <li className="w-full">
                <Link to="/forgot-confirm-password"  className="flex justify-between w-full">
                  <span className="text-lg">Change password</span>
                  <Icon
                    icon="iconamoon:arrow-right-2-light"
                    width="26"
                    height="26"
                    style={{ color: "#000000" }}
                  />
                </Link>
              </li>
              <li className="w-full">
                <Link to="/forgot-confirm-password"  className="flex justify-between w-full">
                  <span className="text-lg">Add a payment method</span>
                  <Icon
                    icon="tabler:plus"
                    width="26"
                    height="26"
                    style={{ color: "#000000" }}
                  />
                </Link>
              </li>
              <li className="flex justify-between w-full">
                <span className="text-lg">Desktop Notifications</span>
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
              </li>
            </ul>
            <hr className="w-[70%] h-[3px] mt-5 mb-2 bg-black" />
            <ul className="w-[30%] flex flex-col items-start gap-5">
              <li>
                <span className="text-lg font-bold">More</span>
              </li>
              <li className="w-full">
                <Link to="/about" className="flex justify-between w-full">
                  <span className="text-lg">About us</span>
                    <Icon
                      icon="iconamoon:arrow-right-2-light"
                      width="26"
                      height="26"
                      style={{ color: "#000000" }}
                    />
                </Link>
              </li>
              <li className="w-full">
                <Link to="/faq" className="flex justify-between w-full">
                  <span className="text-lg">FAQ </span>
                    <Icon
                      icon="iconamoon:arrow-right-2-light"
                      width="26"
                      height="26"
                      style={{ color: "#000000" }}
                    />
                </Link>
              </li>
              <li className="w-full">
                <Link to="/language" className="flex justify-between w-full">
                  <span className="text-lg">Language</span>
                    <Icon
                      icon="iconamoon:arrow-right-2-light"
                      width="26"
                      height="26"
                      style={{ color: "#000000" }}
                    />
                </Link>
              </li>
              <li className="w-full">
                <Link to="/report" className="flex justify-between w-full">
                  <span className="text-lg">Bug Report</span>
                    <Icon
                      icon="iconamoon:arrow-right-2-light"
                      width="26"
                      height="26"
                      style={{ color: "#000000" }}
                    />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
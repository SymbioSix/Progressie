import { Icon } from "@iconify/react";

import Sidebar from "../components/sidebar";
import Navbar from "../components/header";
import logoAccount from "../../../../assets/images/profile.jpg";


export default function SettingsPage() {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <Sidebar />
        <div className="flex items-center w-full h-screen mt-24 ml-20">
          <div className="flex flex-col items-center gap-10 mt-4 mr-8 ml-5 p-5 bg-[#F7EBE6] w-full h-full rounded-2xl">
            <div className="flex items-center w-full gap-5">
              <img
                src={logoAccount}
                alt="logo"
                className="w-20 h-20 rounded-full"
              />
              <span className="text-lg">User Name</span>
            </div>
            <hr className="w-[70%] h-[2px] mt-5 mb-2 bg-black" />
            <ul className="w-[30%] flex flex-col items-start gap-5">
              <li>
                <span className="text-lg font-bold">Account Settings</span>
              </li>
              <li className="flex justify-between w-full">
                <span className="text-lg">User Name</span>
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
              </li>
              <li className="flex justify-between w-full">
                <span className="text-lg">Change password</span>
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
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
              <li className="flex justify-between w-full">
                <span className="text-lg">User Name</span>
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
              </li>
              <li className="flex justify-between w-full">
                <span className="text-lg">Change password</span>
                <Icon
                  icon="iconamoon:arrow-right-2-light"
                  width="26"
                  height="26"
                  style={{ color: "#000000" }}
                />
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
          </div>
        </div>
      </div>
    </>
  );
}
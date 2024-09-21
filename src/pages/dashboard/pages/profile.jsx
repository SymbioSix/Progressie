import { useContext, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import { UserContext } from "../../../context/user";
import useTokenExpirationCheck from "../../../hooks/useTokenExpire";
import Sidebar from "../components/sidebar";
import Navbar from "../components/header";


export default function ProfilePage() {
  useTokenExpirationCheck();
  const { userData } = useContext(UserContext);
  const [getUsername, setGetUsername] = useState(null);

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
        <div className="flex w-full h-screen mt-24 ml-20">
          <div className="flex flex-col w-full h-auto mt-4 ml-5 mr-8 gap-14">
            {/* Profiling area */}
            <div className="flex items-center justify-center w-full h-full max-h-[400px] pt-3 pb-7 gap-10 bg-center bg-no-repeat bg-cover bg-profile-bg rounded-2xl">
              <div className="flex flex-col items-center gap-5">
                <Icon
                  icon="mdi:account-box-outline"
                  width="180"
                  height="180"
                  className="object-cover w-full h-full"
                  style={{ color: "#ffffff" }}
                />
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">Man</span>
                  <Icon
                    icon="iconamoon:arrow-down-2-fill"
                    width="26"
                    height="26"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-white">
                    {
                      getUsername ? getUsername : "User Name"
                    }
                  </span>
                  <Icon
                    icon="ph:pencil-light"
                    width="26"
                    height="26"
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </div>
            </div>
            {/* Sosial area*/}
            {/* <div className="flex justify-between w-full h-auto">
              <div className="flex items-center flex-col gap-2 w-[33%]">
                <span className="text-4xl text-black">0</span>
                <span className="text-4xl text-black">Post</span>
              </div>
              <div className="flex items-center flex-col gap-2 w-[33%]">
                <span className="text-4xl text-black">0</span>
                <span className="text-4xl text-black">Follower</span>
              </div>
              <div className="flex items-center flex-col gap-2 w-[33%]">
                <span className="text-4xl text-black">0</span>
                <span className="text-4xl text-black">Following</span>
              </div>
            </div> */}
            {/* Detail profile area */}
            <div className="flex flex-col w-full h-auto p-5 border-2 border-black ga-3 rounded-2xl">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 bg-[#F4F4F4] p-5 items-center rounded-2xl">
                  <div className="flex items-center w-full h-auto gap-2">
                    <span className="text-lg font-bold">Skill</span>
                    <Icon
                      icon="ph:pencil-light"
                      width="20"
                      height="20"
                      style={{ color: "#000000" }}
                      className="cursor-pointer"
                    />
                  </div>
                  <textarea className="w-full h-[100px] p-5 border-2 border-black rounded-2xl"></textarea>
                </div>
                <div className="flex flex-col gap-2 bg-[#F4F4F4] p-5 items-center rounded-2xl">
                  <div className="flex items-center w-full h-auto gap-2">
                    <span className="text-lg font-bold">
                      Job/School/University
                    </span>
                    <Icon
                      icon="ph:pencil-light"
                      width="20"
                      height="20"
                      style={{ color: "#000000" }}
                      className="cursor-pointer"
                    />
                  </div>
                  <textarea className="w-full h-[100px] p-5 border-2 border-black rounded-2xl"></textarea>
                </div>
                <div className="flex flex-col gap-2 bg-[#F4F4F4] p-5 items-center rounded-2xl">
                  <div className="flex items-center w-full h-auto gap-2">
                    <span className="text-lg font-bold">Skill/Experience</span>
                    <Icon
                      icon="ph:pencil-light"
                      width="20"
                      height="20"
                      style={{ color: "#000000" }}
                      className="cursor-pointer"
                    />
                  </div>
                  <textarea className="w-full h-[100px] p-5 border-2 border-black rounded-2xl"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
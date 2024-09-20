import React, { useState } from "react";
import ThreeDChart from './components/ThreeDChart';
import Sidebar from "./components/sidebar";
import Navbar from "./components/header";
import useTokenExpirationCheck from "../../hooks/useTokenExpire";
import heroImagez from "../../assets/images/star.jpg"; // Import gambar
import "./assets/css/row2.css";
export default function DashboardPage() {
  useTokenExpirationCheck();

  const [resetTrigger, setResetTrigger] = useState(false);

  const handleResetClick = () => {
    setResetTrigger(prev => !prev); // Memicu reset kamera dengan toggle state
  };

  return (
    <div className="flex flex-row h-screen"> {/* dashboard-container */}
      <Sidebar />
      <div className="flex flex-col w-full pl-20"> {/* main-content */}
        <Navbar />
        
        <div className="flex flex-col gap-4 p-2 mt-20"> {/* inner-content */}
          {/* First Row */}
          <div className="flex flex-wrap gap-4 w-full"> {/* row */}
            <div className="w-full lg:w-1/3 h-[210px] bg-gray-300 border border-gray-900 p-4 "> 
            Event
            </div>
            <div className="w-full lg:w-3/5 h-[370px]  bg-white border border-gray-900 p-4  text-white "
        style={{ backgroundImage: `url(${heroImagez})` }}> {/* card-two-thirds */}
              <p className="">Daily progress</p>
              <div className="hs h-[270px]"  // Gambar diatur melalui style inline
        > {/* hs for height */}
                <button onClick={handleResetClick} className="btn-reset text-white ">🔄</button>
                
                <ThreeDChart resetTrigger={resetTrigger} />
              </div>
            </div>
          </div>
          
            
          {/* Second Row */}
          
          <div className="w-full lg:w-1/3 h-[149px]  bg-gray-300 border border-gray-900 p-4 element mt-[-20px]"> 
              <p className="">Leaderboard</p>
            </div>
            <div className="mt-[-157px]">
          <div className="flex flex-wrap  w-full"> 
            <div className="w-full lg:w-1/3 h-[123.5px]  bg-gray-300 border border-gray-900 p-4"> 
              Total Achievement
            </div>
            <div className="w-full lg:w-1/3 h-[123.5px]  bg-gray-300 border border-gray-900 p-4"> 
              <p className="">To do list</p>
            </div>
            <div className="w-full lg:w-1/3 h-[123.5px]  bg-gray-300 border border-gray-900 p-4"> 
            Progress to Rank-up
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
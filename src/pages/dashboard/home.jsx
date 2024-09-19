import React, { useState } from "react";
import "./assets/css/home.css";
import ThreeDChart from './components/ThreeDChart';
import Sidebar from "./components/sidebar";
import Navbar from "./components/header";
import useTokenExpirationCheck from "../../hooks/useTokenExpire";

export default function DashboardPage() {
  useTokenExpirationCheck();

  const [resetTrigger, setResetTrigger] = useState(false);

  const handleResetClick = () => {
    setResetTrigger(prev => !prev); // Memicu reset kamera dengan toggle state
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="inner-content">
          {/* First Row */}
          <div className="row">
            <div className="card card-one-third card-toppeng color-card">
              <p className="">Newest Article</p>
            </div>
            <div className="card card-two-thirds color-card-w ">
              <p className="">Daily progress</p>
              <div className="card three-d-chart-container hs ">
                <button onClick={handleResetClick} className="reset-button   ">Reset View</button>
                <ThreeDChart resetTrigger={resetTrigger} />
              </div>
            </div>
            <div className="card card-one-third card-leaderboard card-bottong-left color-card">
              <p className=" ">Leaderboard</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="row mt-1">
            <div className="card card-one-second card-bottong-left-2 color-card">
              <p className=" ">Total Achievement</p>
            </div>
            <div className="card card-one-second card-bottong color-card">
              <p className="">Recent Activity</p>
            </div>
            <div className="card card-one-second card-bottong color-card">
              <p className="">To do list</p>
            </div>
            <div className="card card-one-second card-bottong color-card">
              <p className="text-center">Progress to Rank-Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

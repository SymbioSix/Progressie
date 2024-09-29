import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTokenExpirationCheck from "../../hooks/useTokenExpire";
import ThreeDChart from './components/ThreeDChart';
import Sidebar from "./components/sidebar";
import Navbar from "./components/header";
import CardService from "../../pages/dashboard/pages/homePageContent/EventCard";
import heroImagez from "../../assets/images/star.jpg";
import Leaderboard from "../../assets/images/Leaderboard.svg";
import Goal from "../../assets/images/Goal.svg";
import "./assets/css/row2.css";
import "./assets/css/row3.css";
import "./assets/css/Goal.css";

export default function DashboardPage() {
  useTokenExpirationCheck();

  const [tasks, setTasks] = useState([
      { task: "Menyelesaikan Subcourse 1", completed: false },
      { task: "Menyelesaikan Subcourse 2", completed: false },
      { task: "Menyelesaikan Subcourse 3", completed: false },
      { task: "Menyelesaikan Subcourse 4", completed: false },
      { task: "Menyelesaikan Subcourse 5", completed: false },
      { task: "Menyelesaikan Subcourse 6", completed: false },
      { task: "Menyelesaikan Subcourse 7", completed: false },
      { task: "Menyelesaikan Subcourse 8", completed: false },
      { task: "Menyelesaikan Subcourse 9", completed: false },
      { task: "Menyelesaikan Subcourse 10", completed: false },
      { task: "Meditasi pagi selama 10 menit", completed: false },
      { task: "Membaca buku self-improvement 30 menit", completed: false },
      { task: "Olahraga ringan selama 30 menit", completed: false },
      { task: "Menulis jurnal harian", completed: false },
      { task: "Belajar keterampilan baru", completed: false },
      { task: "Mengikuti sesi refleksi diri", completed: false },
      { task: "Menetapkan tujuan mingguan dan evaluasi", completed: false },
      { task: "Mendengarkan podcast inspiratif", completed: false },
      { task: "Mengurangi screen time selama 2 jam", completed: false },
      { task: "Mencoba aktivitas baru yang mendukung pengembangan diri", completed: false }
  ]);
  

  const [resetTrigger, setResetTrigger] = useState(false);

  const handleResetClick = () => {
    setResetTrigger(prev => !prev);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full pl-20">
        <Navbar />
        <div className="flex flex-col gap-4 p-2 mt-[5%]">
          <div className="flex flex-wrap w-full gap-4">
            <div className="w-full lg:w-1/3 h-[210px] p-3">
              <CardService className="" />
            </div>
            <div
              className="mb-[2%] w-full lg:w-3/5 h-[370px] bg-white border border-gray-900 p-4 text-white mb-4 mt-4"
              style={{ backgroundImage: `url(${heroImagez})` }}
            >
              <p className="">Daily progress</p>
              <div className="hs h-[270px]">
                <button onClick={handleResetClick} className="text-white btn-reset">
                  🔄
                </button>
                <ThreeDChart resetTrigger={resetTrigger} />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full mt-[-2%] mb-10">
            <Link
              to="/dashboard/home/leaderboard"
              className="button w-full lg:w-1/3 h-[129px] bg-gray-300 border border-white-900 p-4 element mt-[10px]"
            >
              <div className="flex justify-center items-center h-screen">
                {/* Menyeting tinggi kontainer agar gambar dapat dipusatkan secara vertikal */}
                <img src={Leaderboard} alt="Crown" className="bject-contain w-[50%]" />
              </div>
            </Link>
          </div>

          <div className="mb-5 p-1 mt-[-2%]"></div>
          <div className="">
            <div className="elementr3 flex flex-wrap w-full">
              <div className="w-full lg:w-1/3 h-[170px] bg-black p-4 text-white">
                Total Achievement
                <div className="w-full">
                  <div className="flex items-center">
                    <img
                      src={Goal}
                      alt="Crown"
                      className="elemen-target p-4 object-contain h-auto filter brightness-0 invert"
                    />
                    <span className="ml-10 text-5xl font-bold">19</span>
                  </div>
                </div>
              </div>

              {/* To-do List */}
              <div className="w-full lg:w-1/3 h-[170px] bg-gray-300 border border-gray-900 p-4">
                <p className="font-semibold">To do list</p>
                {/* Scrollable To-do List Container */}
                <div className="mt-2 max-h-[120px] overflow-y-auto">
                  <ul className="list-none">
                    {tasks.map((item, index) => (
                      <li key={index} className="text-gray-800 text-sm flex items-center gap-2 mb-1">
                        {/* Checkbox untuk menandai pekerjaan */}
                        <input
                          type="checkbox"
                          checked={item.completed}
                          onChange={() => toggleTaskCompletion(index)}
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        {/* Jika pekerjaan selesai, tambahkan kelas `line-through` */}
                        <span className={item.completed ? "line-through" : ""}>
                          {item.task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-1/3 h-[170px] bg-white border border-gray-900 p-4">
                <h3 className="font-semibold mb-2">Progress to Rank-up</h3>
                {/* Bar Progress 1: Social Etiquette */}
                <div className="mb-1">
                  <p className="text-sm font-medium">Social Etiquette</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>

                {/* Bar Progress 2: Personal Wellness */}
                <div className="mb-1">
                  <p className="text-sm font-medium">Personal Wellness</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>

                {/* Bar Progress 3: Financial Education */}
                <div>
                  <p className="text-sm font-medium">Financial Education</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

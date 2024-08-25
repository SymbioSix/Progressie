import Sidebar from "./components/sidebar";
import Navbar from "./components/header";

export default function DashboardPage() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-4 p-4 mt-20"> {/* Increased top margin */}
          {/* First Row */}
          <div className="flex flex-row flex-wrap gap-4 w-full">
            <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Total Achievement</p>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Recent Activity</p>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Leaderboard</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row flex-wrap gap-4 w-full mt-4">
            <div className="w-full lg:w-2/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Activity Chart</p>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Progress to Rank-Up</p>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-row flex-wrap gap-4 w-full mt-4">
            <div className="w-full lg:w-2/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">To-Do List</p>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 border border-gray-300 p-4">
              <p className="text-center">Newest Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

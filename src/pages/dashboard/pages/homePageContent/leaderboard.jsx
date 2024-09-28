import Sidebar from "../../components/sidebar";
import Navbar from "../../components/header";
import { useState } from "react";
import st from "../../../../assets/images/1st.png";
import nd from "../../../../assets/images/2nd.png";
import rd from "../../../../assets/images/3rd.png";

export default function LeaderboardPage() {
  // Contoh data leaderboard
  const [leaderboardData] = useState([
    { rank: 1, name: "John Doe", points: 1500, image: "https://via.placeholder.com/100" },
    { rank: 2, name: "Jane Smith", points: 1400, image: "https://via.placeholder.com/100" },
    { rank: 3, name: "Michael Johnson", points: 1300, image: "https://via.placeholder.com/100" },
    { rank: 4, name: "Emily Davis", points: 1200, image: "https://via.placeholder.com/100" },
    { rank: 5, name: "William Brown", points: 1100, image: "https://via.placeholder.com/100" },
    { rank: 6, name: "William Brown", points: 1100, image: "https://via.placeholder.com/100" },
    { rank: 7, name: "William Brown", points: 1100, image: "https://via.placeholder.com/100" },
    { rank: 8, name: "John Doe", points: 1050, image: "https://via.placeholder.com/100" },
    { rank: 9, name: "Jane Smith", points: 1000, image: "https://via.placeholder.com/100" },
    { rank: 10, name: "My", points: 900, image: "https://via.placeholder.com/100" }, // "My" berada di luar top 8
  ]);

  // Pemisahan juara 1, 2, dan 3
  const topThree = leaderboardData.slice(0, 3);

  // Ambil 8 orang teratas
  let topEight = leaderboardData.slice(0, 8);

  // Cek apakah "My" ada di dalam top 8
  const userMy = leaderboardData.find((player) => player.name === "My");

  // Jika "My" tidak ada di dalam top 8, tambahkan ke dalam daftar
  if (userMy && !topEight.includes(userMy)) {
    topEight = [...topEight, userMy];
  }

  // Pisahkan top 3 dari data yang ditampilkan dalam tabel
  const restOfPlayers = topEight.slice(3);

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow bg-gray-100 min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Leaderboard Section */}
          <div className="p-8 mt-10 ml-10">
            <h1 className="text-4xl font-bold text-center mb-12">Leaderboard</h1>

            {/* Top 3 Players */}
            <div className="flex justify-center space-x-8 mb-12">
              {/* Player 2 */}
              <div className="flex flex-col items-center">
                <img
                  src={st}
                  alt="2nd Place"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 shadow-lg"
                />
                <p className="text-2xl font-bold mt-4">2nd</p>
                <p className="text-xl">{topThree[1].name}</p>
                <p className="text-gray-500">{topThree[1].points} Points</p>
              </div>

              {/* Player 1 */}
              <div className="flex flex-col items-center">
                <img
                  src={nd}
                  alt="1st Place"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 shadow-xl"
                />
                <p className="text-4xl font-bold text-yellow-500 mt-4">1st</p>
                <p className="text-2xl">{topThree[0].name}</p>
                <p className="text-gray-500">{topThree[0].points} Points</p>
              </div>

              {/* Player 3 */}
              <div className="flex flex-col items-center">
                <img
                  src={rd}
                  alt="3rd Place"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 shadow-lg"
                />
                <p className="text-2xl font-bold mt-4">3rd</p>
                <p className="text-xl">{topThree[2].name}</p>
                <p className="text-gray-500">{topThree[2].points} Points</p>
              </div>
            </div>

            {/* Other Players */}
            <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-6 text-left">Rank</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {restOfPlayers.map((player) => (
                    <tr
                      key={player.rank}
                      className={`border-b last:border-none ${
                        player.name === "My" ? "bg-yellow-200" : ""
                      }`}
                    >
                      <td className="py-3 px-6">{player.rank}</td>
                      <td className="py-3 px-6">{player.name}</td>
                      <td className="py-3 px-6">{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

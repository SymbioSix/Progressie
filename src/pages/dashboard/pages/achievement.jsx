// AchievementPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

export default function AchievementPage() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    // Contoh data pencapaian
    const achievements = [
        { id: 1, title: 'Best Developer Award', description: 'Received for outstanding performance in software development.' },
        { id: 2, title: 'Hackathon Winner', description: 'Won 1st place in an international hackathon with innovative project ideas.' },
        { id: 3, title: 'Top GPA in Informatics', description: 'Achieved the highest GPA in the department of Informatics.' }
    ];

    // Fungsi untuk menangani klik pada item pencapaian
    const handleClick = (achievement) => {
        setSelectedAchievement(achievement);
    };

    return (
        <div className="flex h-screen ">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col w-full">
                {/* Header */}
                <Header />

                {/* Content Section */}
                <div className="ml-10 mt-5 flex-grow p-8 bg-gray-100 flex">
                    {/* Sidebar Achievement List */}
                    <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                        <ul>
                            {achievements.map((achievement) => (
                                <li
                                    key={achievement.id}
                                    className="cursor-pointer mb-2 p-2 border-b hover:bg-gray-200"
                                    onClick={() => handleClick(achievement)}
                                >
                                    {achievement.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievement Details */}
                    <div className="w-2/3 p-8 bg-white rounded-lg shadow-md ml-4">
                        {selectedAchievement ? (
                            <div>
                                <h3 className="text-3xl font-bold">{selectedAchievement.title}</h3>
                                <p className="mt-4 text-lg">{selectedAchievement.description}</p>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <p>Select an achievement to view the details.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// AchievementPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function AchievementPage() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    // Data pencapaian dengan properti isAchieved untuk menandai pencapaian
    const achievements = [
        { id: 1, title: 'Best Developer Award', description: 'Received for outstanding performance in software development.', isAchieved: true },
        { id: 2, title: 'Hackathon Winner', description: 'Won 1st place in an international hackathon with innovative project ideas.', isAchieved: true },
        { id: 3, title: 'Top GPA in Informatics', description: 'Achieved the highest GPA in the department of Informatics.', isAchieved: true },
        { id: 4, title: 'Employee of the Month', description: 'Recognized for consistent excellence and leadership in the team.', isAchieved: true },
        { id: 5, title: 'Contribution to Open Source', description: 'Acknowledged for contributing to open source projects that benefit the community.', isAchieved: true },
        { id: 6, title: 'Top 10% in Global Coding Competition', description: 'Achieved top 10% ranking in a global coding competition.', isAchieved: true },
        { id: 7, title: 'Published Research Paper', description: 'Published a research paper in a recognized journal.', isAchieved: false },
        { id: 8, title: 'Mentorship Award', description: 'Received award for mentoring junior developers.', isAchieved: false },
        { id: 9, title: 'Certified Project Manager', description: 'Achieved certification as a professional project manager.', isAchieved: false },
        { id: 10, title: 'Leadership in Technology', description: 'Recognized for leadership in a large-scale technology project.', isAchieved: false },
        { id: 11, title: 'Completed Data Science Bootcamp', description: 'Successfully completed a comprehensive data science bootcamp.', isAchieved: true },
        { id: 12, title: 'Contributed to Technical Blog', description: 'Written technical articles for a popular programming blog.', isAchieved: true },
        { id: 13, title: 'Created Open Source Library', description: 'Created and maintained a widely used open source library.', isAchieved: true },
        { id: 14, title: 'Received Scholarship for Study', description: 'Awarded a scholarship for academic excellence.', isAchieved: true },
        { id: 15, title: 'Invited Speaker at Tech Conference', description: 'Invited as a speaker at a prestigious technology conference.', isAchieved: true },
        { id: 16, title: 'Organized Community Meetup', description: 'Organized a successful community meetup with notable speakers.', isAchieved: true },
        { id: 17, title: 'Top Performer in Team', description: 'Recognized as top performer in a development team.', isAchieved: true },
        { id: 18, title: 'Launched a Successful Product', description: 'Launched a product that achieved significant user adoption.', isAchieved: true },
        { id: 19, title: 'Certified Cloud Architect', description: 'Certified as a professional cloud architect.', isAchieved: true },
        { id: 20, title: 'Completed 100 Days of Code', description: 'Completed the 100 Days of Code challenge successfully.', isAchieved: true },
        
    ];

    // Memisahkan pencapaian yang sudah dicapai dan yang belum
    const achievedList = achievements.filter(achievement => achievement.isAchieved);
    const notAchievedList = achievements.filter(achievement => !achievement.isAchieved);

    // Fungsi untuk menangani klik pada item pencapaian
    const handleClick = (achievement) => {
        setSelectedAchievement(achievement);
    };

    // Fungsi untuk mengonversi pencapaian menjadi sertifikat
    const handleConvertToCertificate = () => {
        const certificateData = {
            title: "The King",
            description: "have understood how to become a sigma human",
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            username: 'Arya Wijaya', // Gantilah dengan data username yang diambil dari state atau props
        };

        const certificateContent = document.createElement('div');
        certificateContent.style.width = '600px';
        certificateContent.style.padding = '20px';
        certificateContent.style.textAlign = 'center';
        certificateContent.style.border = '2px solid black';
        certificateContent.style.backgroundColor = 'white';
        certificateContent.innerHTML = `
            <h1 style="font-size: 24px; margin-bottom: 20px;">Certificate of Achievement</h1>
            <p style="font-size: 18px;">This is to certify that</p>
            <h2 style="font-size: 22px; margin: 10px 0;">${certificateData.username}</h2>
            <p style="font-size: 18px;">has achieved</p>
            <h3 style="font-size: 20px; margin: 10px 0;">${certificateData.title}</h3>
            <p style="font-size: 16px;">${certificateData.description}</p>
            <p style="margin-top: 20px;">Date: ${certificateData.date}</p>
            <p>Time: ${certificateData.time}</p>
        `;

        document.body.appendChild(certificateContent);

        html2canvas(certificateContent).then((canvas) => {
            const pdf = new jsPDF('landscape', 'pt', 'a4');
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`${certificateData.username}-Certificate.pdf`);

            document.body.removeChild(certificateContent);
        });
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                <div className="flex-grow p-8 bg-gray-100 flex mt-10 ml-10">
                    {/* Sidebar Achievement List */}
                    <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                        {/* Tombol "Convert to Certificate" */}
                        {achievedList.length >= 15 && (
                            <div className="mb-4">
                                <button
                                    onClick={handleConvertToCertificate}
                                    className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
                                    disabled={!selectedAchievement} // Disable jika tidak ada pencapaian yang dipilih
                                >
                                    Convert to Certificate
                                </button>
                            </div>
                        )}

                        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                        <h3 className="text-xl font-semibold mb-2">Achieved</h3>
                        <ul className="max-h-56 overflow-y-scroll">
                            {achievedList.map((achievement) => (
                                <li
                                    key={achievement.id}
                                    className="cursor-pointer mb-2 p-2 border-b hover:bg-gray-200"
                                    onClick={() => handleClick(achievement)}
                                >
                                    {achievement.title}
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold mt-4 mb-2">Not Achieved</h3>
                        <ul className="max-h-56 overflow-y-scroll">
                            {notAchievedList.map((achievement) => (
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

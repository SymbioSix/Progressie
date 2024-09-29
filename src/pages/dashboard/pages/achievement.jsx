// AchievementPage.jsx
import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../context/user'; // Path konteks user
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function AchievementPage() {
    const { userData } = useContext(UserContext); // Ambil data user dari context
    const username = userData?.user_data?.username || 'User'; // Pastikan ada username atau fallback ke 'User'
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    // Data pencapaian dengan properti isAchieved untuk menandai pencapaian
    const achievements = [
    { id: 1, title: 'Meditasi pagi selama 10 menit', description: 'Melakukan meditasi selama 10 menit setiap pagi.', isAchieved: true },
    { id: 2, title: 'Membaca buku self-improvement 30 menit', description: 'Membaca buku pengembangan diri selama 30 menit.', isAchieved: true },
    { id: 3, title: 'Olahraga ringan selama 30 menit', description: 'Melakukan olahraga ringan selama 30 menit.', isAchieved: true },
    { id: 4, title: 'Menulis jurnal harian', description: 'Menulis jurnal tentang kegiatan atau refleksi harian.', isAchieved: true },
    { id: 5, title: 'Belajar keterampilan baru', description: 'Meluangkan waktu untuk belajar keterampilan baru.', isAchieved: true },
    { id: 6, title: 'Mengikuti sesi refleksi diri', description: 'Berpartisipasi dalam sesi refleksi diri untuk evaluasi pribadi.', isAchieved: false },
    { id: 7, title: 'Menetapkan tujuan mingguan dan evaluasi', description: 'Menetapkan dan mengevaluasi tujuan untuk satu minggu ke depan.', isAchieved: false },
    { id: 8, title: 'Mendengarkan podcast inspiratif', description: 'Mendengarkan podcast yang memberikan inspirasi untuk pengembangan diri.', isAchieved: false },
    { id: 9, title: 'Mengurangi screen time selama 2 jam', description: 'Mengurangi waktu penggunaan layar gadget sebanyak 2 jam.', isAchieved: false },
    { id: 10, title: 'Mencoba aktivitas baru yang mendukung pengembangan diri', description: 'Mencoba aktivitas baru yang dapat membantu pengembangan diri.', isAchieved: false },
    { id: 11, title: 'Meditasi pagi selama 10 menit', description: 'Melakukan meditasi selama 10 menit setiap pagi.', isAchieved: true },
    { id: 12, title: 'Membaca buku self-improvement 30 menit', description: 'Membaca buku pengembangan diri selama 30 menit.', isAchieved: true },
    { id: 13, title: 'Olahraga ringan selama 30 menit', description: 'Melakukan olahraga ringan selama 30 menit.', isAchieved: true },
    { id: 14, title: 'Menulis jurnal harian', description: 'Menulis jurnal tentang kegiatan atau refleksi harian.', isAchieved: true },
    { id: 15, title: 'Belajar keterampilan baru', description: 'Meluangkan waktu untuk belajar keterampilan baru.', isAchieved: true },
    { id: 16, title: 'Mengikuti sesi refleksi diri', description: 'Berpartisipasi dalam sesi refleksi diri untuk evaluasi pribadi.', isAchieved: true },
    { id: 17, title: 'Menetapkan tujuan mingguan dan evaluasi', description: 'Menetapkan dan mengevaluasi tujuan untuk satu minggu ke depan.', isAchieved: true },
    { id: 18, title: 'Mendengarkan podcast inspiratif', description: 'Mendengarkan podcast yang memberikan inspirasi untuk pengembangan diri.', isAchieved: true },
    { id: 19, title: 'Mengurangi screen time selama 2 jam', description: 'Mengurangi waktu penggunaan layar gadget sebanyak 2 jam.', isAchieved: true },
    { id: 20, title: 'Mencoba aktivitas baru yang mendukung pengembangan diri', description: 'Mencoba aktivitas baru yang dapat membantu pengembangan diri.', isAchieved: true}
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
            username: username, // Gunakan username dari context
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
                                    disabled={selectedAchievement} // Disable jika tidak ada pencapaian yang dipilih
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

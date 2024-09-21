import { Link } from "react-router-dom";

import Navbar from "../components/header";
import Sidebar from "../components/sidebar";

export default function NotFoundPage() {
    return (
        <>
            <div className="flex flex-row h-screen">
                <Sidebar />
                <div className="flex flex-col w-full pl-20">
                    <Navbar />
                    <div className="flex items-center w-full h-full file:justify-center">
                        <h1 className="text-lg font-bold text-center sm:text-2xl lg:text-4xl">404 - Page Not Fount</h1>
                        <Link to="/dashboard" className="text-blue-500 hover:underline">
                            Go back to dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
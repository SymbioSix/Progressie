import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-4 text-4xl font-bold">403 - Unauthorized</h1>
            <p className="mb-4">You do not have permission to access this page.</p>
            <Link to="/" className="px-5 py-3 font-semibold text-white underline bg-black rounded-xl">
                Go back to Home
            </Link>
        </div>
    );
};

export default UnauthorizedPage;
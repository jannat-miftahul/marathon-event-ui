import { Helmet } from "react-helmet-async";
import { IoHome } from "react-icons/io5";
import ErrorAnimation from "../../assets/404.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 sm:px-6">
            <Helmet>
                <title>404 | RunTrack</title>
            </Helmet>

            <div className="flex flex-col items-center max-w-sm sm:max-w-md lg:max-w-lg">
                <Lottie animationData={ErrorAnimation}></Lottie>

                <p className="text-sm sm:text-base lg:text-lg mb-2 text-center">
                    The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="mt-4 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-brightGold transition duration-300 text-sm sm:text-base"
                >
                    <IoHome className="w-4 h-4 sm:w-5 sm:h-5" />
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

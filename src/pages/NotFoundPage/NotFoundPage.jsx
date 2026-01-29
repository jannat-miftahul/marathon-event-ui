import { Helmet } from "react-helmet-async";
import { IoHome, IoSearch } from "react-icons/io5";
import { FaRunning, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import ErrorAnimation from "../../assets/404.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-base-200 overflow-hidden px-4 sm:px-6">
            <Helmet>
                <title>404 - Page Not Found | RunTrack</title>
            </Helmet>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Running Icons */}
            <div
                className="absolute top-20 left-10 opacity-5 dark:opacity-10"
                style={{ animation: "float 6s ease-in-out infinite" }}
            >
                <FaRunning className="text-7xl text-primary" />
            </div>
            <div
                className="absolute bottom-20 right-10 opacity-5 dark:opacity-10"
                style={{ animation: "float 6s ease-in-out infinite", animationDelay: "3s" }}
            >
                <FaTrophy className="text-6xl text-secondary" />
            </div>

            {/* Main Content */}
            <div
                className="relative z-10 flex flex-col items-center max-w-2xl text-center"
                style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
                {/* 404 Animation */}
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6">
                    <Lottie animationData={ErrorAnimation} />
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-raleway font-bold text-base-content mb-4">
                    Oops! Wrong Turn
                </h1>

                {/* Subtitle with Running Metaphor */}
                <p className="text-lg sm:text-xl text-base-content/70 dark:text-base-content/80 mb-2">
                    Looks like you&apos;ve taken a detour from the marathon route! 🏃‍♂️
                </p>

                <p className="text-sm sm:text-base text-base-content/60 dark:text-base-content/70 mb-8 max-w-md">
                    The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
                    <Link
                        to="/"
                        className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <IoHome className="text-lg sm:text-xl group-hover:rotate-12 transition-transform" />
                        Back to Home
                    </Link>

                    <Link
                        to="/marathons"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/50 text-base-content font-semibold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 hover:border-primary dark:hover:border-primary"
                    >
                        <FaRunning className="text-lg sm:text-xl" />
                        Browse Events
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-base-100 dark:bg-base-100/95 backdrop-blur-sm border border-base-300 dark:border-base-300/50 rounded-2xl p-6 sm:p-8 shadow-lg w-full">
                    <p className="text-base-content font-semibold mb-4 flex items-center justify-center gap-2">
                        <IoSearch className="text-primary" />
                        Popular Destinations
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                            to="/marathons"
                            className="flex items-center gap-3 p-3 rounded-xl bg-base-200 dark:bg-base-200/50 hover:bg-primary/10 dark:hover:bg-primary/20 border border-transparent hover:border-primary/30 transition-all group"
                        >
                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FaRunning className="text-primary text-lg" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-base-content">Marathon Events</div>
                                <div className="text-xs text-base-content/60 dark:text-base-content/70">Browse all races</div>
                            </div>
                        </Link>

                        <Link
                            to="/results"
                            className="flex items-center gap-3 p-3 rounded-xl bg-base-200 dark:bg-base-200/50 hover:bg-secondary/10 dark:hover:bg-secondary/20 border border-transparent hover:border-secondary/30 transition-all group"
                        >
                            <div className="w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FaTrophy className="text-secondary text-lg" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-base-content">Race Results</div>
                                <div className="text-xs text-base-content/60 dark:text-base-content/70">View leaderboards</div>
                            </div>
                        </Link>

                        <Link
                            to="/gallery"
                            className="flex items-center gap-3 p-3 rounded-xl bg-base-200 dark:bg-base-200/50 hover:bg-accent/10 dark:hover:bg-accent/20 border border-transparent hover:border-accent/30 transition-all group"
                        >
                            <div className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <FaCalendarAlt className="text-accent text-lg" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-base-content">Event Gallery</div>
                                <div className="text-xs text-base-content/60 dark:text-base-content/70">Photos & videos</div>
                            </div>
                        </Link>

                        <Link
                            to="/auth/signin"
                            className="flex items-center gap-3 p-3 rounded-xl bg-base-200 dark:bg-base-200/50 hover:bg-primary/10 dark:hover:bg-primary/20 border border-transparent hover:border-primary/30 transition-all group"
                        >
                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IoHome className="text-primary text-lg" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-base-content">Sign In</div>
                                <div className="text-xs text-base-content/60 dark:text-base-content/70">Access dashboard</div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Footer Message */}
                <p className="mt-8 text-xs sm:text-sm text-base-content/50 dark:text-base-content/60">
                    Error Code: 404 - Page Not Found
                </p>
            </div>

            {/* Inline Keyframe Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}} />
        </div>
    );
};

export default NotFoundPage;

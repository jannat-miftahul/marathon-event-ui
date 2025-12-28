import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaRunning,
    FaUsers,
    FaClock,
    FaArrowRight,
} from "react-icons/fa";

const MarathonDetails = () => {
    const {
        _id,
        marathonTitle,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
        location,
        runningDistance,
        description,
        marathonImage,
        totalRegistrationCount,
    } = useLoaderData();

    const isRegistrationOpen = () => {
        const now = new Date();
        const startDate = new Date(startRegistrationDate);
        const endDate = new Date(endRegistrationDate);
        return now >= startDate && now <= endDate;
    };

    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    const timerProps = {
        isPlaying: true,
        size:
            typeof window !== "undefined" && window.innerWidth < 640 ? 70 : 100,
        strokeWidth:
            typeof window !== "undefined" && window.innerWidth < 640 ? 4 : 6,
    };
    const renderTime = (dimension, time) => {
        return (
            <div className="flex flex-col items-center">
                <div className="text-lg sm:text-2xl font-bold">{time}</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide opacity-80">
                    {dimension}
                </div>
            </div>
        );
    };
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;

    const stratTime = Date.now() / 1000;
    const endTime = new Date(marathonStartDate).getTime() / 1000;
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>RunTrack | {marathonTitle}</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
                {/* Hero Section with Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12">
                    <img
                        src={marathonImage}
                        alt={marathonTitle}
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                            <span className="bg-primary/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                                <FaRunning /> {runningDistance}
                            </span>
                            <span
                                className={`backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full ${
                                    isRegistrationOpen()
                                        ? "bg-green-500/90"
                                        : "bg-red-500/90"
                                }`}
                            >
                                {isRegistrationOpen()
                                    ? "● Registration Open"
                                    : "● Registration Closed"}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                            {marathonTitle}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90">
                            <span className="flex items-center gap-2 text-sm sm:text-base">
                                <FaMapMarkerAlt className="text-primary" />
                                {location}
                            </span>
                            <span className="flex items-center gap-2 text-sm sm:text-base">
                                <FaCalendarAlt className="text-secondary" />
                                {marathonStartDate}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Left Column - Main Info */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        {/* Description Card */}
                        <div className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-lg sm:text-xl font-bold text-base-content mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <FaRunning className="text-primary" />
                                </span>
                                About This Marathon
                            </h2>
                            <p className="text-base-content/80 leading-relaxed text-sm sm:text-base">
                                {description}
                            </p>
                        </div>

                        {/* Countdown Timer Section */}
                        <div className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-lg sm:text-xl font-bold text-base-content mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                                    <FaClock className="text-secondary" />
                                </span>
                                Countdown to Race Day
                            </h2>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                                <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#16a34a"
                                    duration={daysDuration}
                                    initialRemainingTime={remainingTime}
                                >
                                    {({ elapsedTime, color }) => (
                                        <span
                                            style={{ color }}
                                            className="text-center"
                                        >
                                            {renderTime(
                                                "days",
                                                getTimeDays(
                                                    daysDuration - elapsedTime
                                                )
                                            )}
                                        </span>
                                    )}
                                </CountdownCircleTimer>
                                <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#ea580c"
                                    duration={daySeconds}
                                    initialRemainingTime={
                                        remainingTime % daySeconds
                                    }
                                    onComplete={(totalElapsedTime) => ({
                                        shouldRepeat:
                                            remainingTime - totalElapsedTime >
                                            hourSeconds,
                                    })}
                                >
                                    {({ elapsedTime, color }) => (
                                        <span
                                            style={{ color }}
                                            className="text-center"
                                        >
                                            {renderTime(
                                                "hours",
                                                getTimeHours(
                                                    daySeconds - elapsedTime
                                                )
                                            )}
                                        </span>
                                    )}
                                </CountdownCircleTimer>
                                <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#8b5cf6"
                                    duration={hourSeconds}
                                    initialRemainingTime={
                                        remainingTime % hourSeconds
                                    }
                                    onComplete={(totalElapsedTime) => ({
                                        shouldRepeat:
                                            remainingTime - totalElapsedTime >
                                            minuteSeconds,
                                    })}
                                >
                                    {({ elapsedTime, color }) => (
                                        <span
                                            style={{ color }}
                                            className="text-center"
                                        >
                                            {renderTime(
                                                "mins",
                                                getTimeMinutes(
                                                    hourSeconds - elapsedTime
                                                )
                                            )}
                                        </span>
                                    )}
                                </CountdownCircleTimer>
                                <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#06b6d4"
                                    duration={minuteSeconds}
                                    initialRemainingTime={
                                        remainingTime % minuteSeconds
                                    }
                                    onComplete={(totalElapsedTime) => ({
                                        shouldRepeat:
                                            remainingTime - totalElapsedTime >
                                            0,
                                    })}
                                >
                                    {({ elapsedTime, color }) => (
                                        <span
                                            style={{ color }}
                                            className="text-center"
                                        >
                                            {renderTime(
                                                "secs",
                                                getTimeSeconds(elapsedTime)
                                            )}
                                        </span>
                                    )}
                                </CountdownCircleTimer>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Registration Card */}
                        <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm sticky top-24">
                            <h3 className="text-lg font-bold text-base-content mb-6">
                                Event Details
                            </h3>

                            {/* Info Items */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaCalendarAlt className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 uppercase tracking-wide">
                                            Registration
                                        </p>
                                        <p className="text-sm font-semibold text-base-content">
                                            {startRegistrationDate} -{" "}
                                            {endRegistrationDate}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-xl">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 uppercase tracking-wide">
                                            Location
                                        </p>
                                        <p className="text-sm font-semibold text-base-content">
                                            {location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-xl">
                                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaRunning className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 uppercase tracking-wide">
                                            Distance
                                        </p>
                                        <p className="text-sm font-semibold text-base-content">
                                            {runningDistance}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-xl">
                                    <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaUsers className="text-info" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-base-content/50 uppercase tracking-wide">
                                            Registered
                                        </p>
                                        <p className="text-sm font-semibold text-base-content">
                                            {totalRegistrationCount}{" "}
                                            participants
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            {isRegistrationOpen() ? (
                                <Link
                                    to={`/marathon-register/${_id}`}
                                    className="group flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                                >
                                    Register Now
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <button
                                    className="w-full py-3.5 bg-base-300 text-base-content/50 font-semibold rounded-xl cursor-not-allowed"
                                    disabled
                                >
                                    Registration Closed
                                </button>
                            )}

                            {isRegistrationOpen() && (
                                <p className="text-center text-xs text-base-content/50 mt-3">
                                    Limited spots available. Register early!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;

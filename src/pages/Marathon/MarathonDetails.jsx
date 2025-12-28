import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
        // console.log('now: ', now);
        // console.log('startDate: ', startDate);
        // console.log('endDate: ', endDate);
        // console.log(now >= startDate && now <= endDate);
        return now >= startDate && now <= endDate;
    };

    const minuteSeconds = 60;
    const hourSeconds = 3600;
    const daySeconds = 86400;

    const timerProps = {
        isPlaying: true,
        size: typeof window !== 'undefined' && window.innerWidth < 640 ? 70 : 120,
        strokeWidth: typeof window !== 'undefined' && window.innerWidth < 640 ? 4 : 6,
    };
    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = new Date(marathonStartDate).getTime() / 1000; // convert to seconds
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="max-w-screen-xl mx-auto p-4 space-y-2 sm:space-y-3 px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
            <Helmet>
                <title>RunTrack | {marathonTitle}</title>
            </Helmet>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold mb-4">
                {marathonTitle}
            </h1>
            <img
                src={marathonImage}
                alt="Marathon"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover mb-4 rounded-lg"
            />
            <p className="text-sm sm:text-base lg:text-lg">Location: {location}</p>
            <p className="text-sm sm:text-base lg:text-lg">
                Registration Dates: {startRegistrationDate} -{" "}
                {endRegistrationDate}
            </p>
            <p className="text-sm sm:text-base lg:text-lg">Marathon Date: {marathonStartDate}</p>
            <p className="text-sm sm:text-base lg:text-lg">
                Total Registrations: {totalRegistrationCount}
            </p>
            <p className="text-sm sm:text-base lg:text-lg">Running Distance: {runningDistance}</p>
            <p className="text-sm sm:text-base lg:text-lg">Description: {description}</p>

            {/* CountdownCircleTimer component */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 py-2">
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#7E2E84"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(
                                "days",
                                getTimeDays(daysDuration - elapsedTime)
                            )}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#D14081"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat:
                            remainingTime - totalElapsedTime > hourSeconds,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(
                                "hours",
                                getTimeHours(daySeconds - elapsedTime)
                            )}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#EF798A"
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat:
                            remainingTime - totalElapsedTime > minuteSeconds,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime(
                                "minutes",
                                getTimeMinutes(hourSeconds - elapsedTime)
                            )}
                        </span>
                    )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors="#218380"
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > 0,
                    })}
                >
                    {({ elapsedTime, color }) => (
                        <span style={{ color }}>
                            {renderTime("seconds", getTimeSeconds(elapsedTime))}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>

            {isRegistrationOpen() ? (
                <Link
                    to={`/marathon-register/${_id}`}
                    className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                >
                    Register
                </Link>
            ) : (
                <button
                    className="btn bg-gray-400 text-white px-6 py-2 rounded-full"
                    disabled
                >
                    Registration Closed
                </button>
            )}
        </div>
    );
};

export default MarathonDetails;

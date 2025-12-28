import { useEffect, useState } from "react";
import { FaRunning } from "react-icons/fa";

const MarathonTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("https://marathon-event-api.vercel.app/marathonTips")
            .then((res) => res.json())
            .then((data) => {
                setTips(data);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
            <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                Marathon Tips
            </h6>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                Here are some tips to help you prepare for the marathon.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 lg:py-12">
                {tips.map((tip) => (
                    <div
                        key={tip._id}
                        className="card shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
                    >
                        <FaRunning className="text-primary text-2xl sm:text-3xl mb-2 sm:mb-3" />
                        <h3 className="text-lg sm:text-xl font-raleway font-semibold text-primary mb-2">
                            {tip.title}
                        </h3>
                        <p className="text-sm sm:text-base text-textSecondary">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarathonTips;

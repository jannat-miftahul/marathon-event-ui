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
        <div className="relative bg-base-100 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2" />
            <div className="absolute bottom-20 left-0 w-48 h-48 bg-secondary/5 rounded-full -translate-x-1/2" />
            
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-20">
                <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                    Marathon Tips
                </h6>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                    Here are some tips to help you prepare for the marathon.
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8">
                    {tips.map((tip) => (
                        <div
                            key={tip._id}
                            className="group bg-base-100 border border-base-300 rounded-xl p-5 sm:p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <FaRunning className="text-primary text-xl sm:text-2xl" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-raleway font-semibold text-base-content mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarathonTips;

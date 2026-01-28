import { useEffect, useState } from "react";
import { FaRunning, FaHeartbeat, FaTrophy, FaAppleAlt, FaWater, FaBed } from "react-icons/fa";

const MarathonTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("https://marathon-event-api.vercel.app/marathonTips")
            .then((res) => res.json())
            .then((data) => {
                setTips(data);
            });
    }, []);

    // Icon mapping for variety
    const iconMap = [FaRunning, FaHeartbeat, FaTrophy, FaAppleAlt, FaWater, FaBed];
    const colorMap = [
        { bg: "bg-primary/10", hover: "group-hover:bg-primary/20", icon: "text-primary", border: "border-primary/30", glow: "hover:shadow-primary/20" },
        { bg: "bg-secondary/10", hover: "group-hover:bg-secondary/20", icon: "text-secondary", border: "border-secondary/30", glow: "hover:shadow-secondary/20" },
        { bg: "bg-accent/10", hover: "group-hover:bg-accent/20", icon: "text-accent", border: "border-accent/30", glow: "hover:shadow-accent/20" },
        { bg: "bg-success/10", hover: "group-hover:bg-success/20", icon: "text-success", border: "border-success/30", glow: "hover:shadow-success/20" },
        { bg: "bg-info/10", hover: "group-hover:bg-info/20", icon: "text-info", border: "border-info/30", glow: "hover:shadow-info/20" },
        { bg: "bg-warning/10", hover: "group-hover:bg-warning/20", icon: "text-warning", border: "border-warning/30", glow: "hover:shadow-warning/20" },
    ];

    return (
        <div className="relative bg-base-100 overflow-hidden">
            {/* Enhanced Decorative elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-0 w-48 h-48 bg-secondary/5 rounded-full -translate-x-1/2 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Floating Icons */}
            <div
                className="absolute top-10 left-10 opacity-5 dark:opacity-10 hidden lg:block"
                style={{ animation: "float 8s ease-in-out infinite" }}
            >
                <FaRunning className="text-8xl text-primary" />
            </div>
            <div
                className="absolute bottom-10 right-10 opacity-5 dark:opacity-10 hidden lg:block"
                style={{ animation: "float 8s ease-in-out infinite", animationDelay: "4s" }}
            >
                <FaTrophy className="text-7xl text-secondary" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-20">
                {/* Keep existing heading design */}
                <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                    Marathon Tips
                </h6>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                    Here are some tips to help you prepare for the marathon
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-8">
                    {tips.map((tip, index) => {
                        const Icon = iconMap[index % iconMap.length];
                        const colors = colorMap[index % colorMap.length];

                        return (
                            <div
                                key={tip._id}
                                className="group relative bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/50 rounded-2xl p-6 sm:p-7 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                {/* Gradient Accent Bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${colors.icon.replace('text-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-base-200 dark:bg-base-200/50 rounded-full flex items-center justify-center text-xs font-bold text-base-content/40 dark:text-base-content/50 group-hover:text-base-content/60 dark:group-hover:text-base-content/70 transition-colors">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Icon Container with Animation */}
                                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md ${colors.glow}`}>
                                    <Icon className={`${colors.icon} text-2xl sm:text-3xl`} />

                                    {/* Pulse effect on hover */}
                                    <div className={`absolute inset-0 ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-raleway font-bold text-base-content mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                    {tip.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-base-content/70 dark:text-base-content/80 leading-relaxed mb-4">
                                    {tip.description}
                                </p>

                                {/* Decorative Bottom Element */}
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-base-300/50 dark:border-base-300/30">
                                    <div className={`flex-1 h-1 bg-gradient-to-r from-${colors.icon.replace('text-', '')} to-transparent opacity-30 group-hover:opacity-60 transition-opacity rounded-full`} />
                                    <div className={`w-2 h-2 ${colors.bg} rounded-full group-hover:scale-150 transition-transform`} />
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${colors.icon.replace('text-', '')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Inline Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-25px); }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
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

export default MarathonTips;

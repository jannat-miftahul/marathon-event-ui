import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaRunning } from "react-icons/fa";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        marathonTitle,
        marathonImage,
        location,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
        runningDistance,
    } = marathon;

    return (
        <div className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-300 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-48 sm:h-56 lg:h-60 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={marathonImage}
                    alt={marathonTitle}
                />
                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Date badge */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-base-100/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <FaCalendarAlt className="text-primary" />
                    {marathonStartDate}
                </div>

                {/* Distance badge */}
                {runningDistance && (
                    <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                        <FaRunning />
                        {runningDistance}
                    </div>
                )}

                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="font-bold text-lg sm:text-xl text-white drop-shadow-lg line-clamp-2 group-hover:text-primary-content transition-colors">
                        {marathonTitle}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex-grow flex flex-col">
                {/* Location */}
                <div className="flex items-start gap-3 mb-3 p-3 bg-base-200/50 rounded-xl border border-base-300/50">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaMapMarkerAlt className="text-primary text-sm" />
                    </div>
                    <div>
                        <p className="text-xs text-base-content/50 uppercase tracking-wide font-medium">Location</p>
                        <p className="text-sm font-semibold text-base-content truncate">{location}</p>
                    </div>
                </div>

                {/* Registration Period */}
                <div className="flex items-start gap-3 p-3 bg-base-200/50 rounded-xl border border-base-300/50 mb-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCalendarAlt className="text-secondary text-sm" />
                    </div>
                    <div>
                        <p className="text-xs text-base-content/50 uppercase tracking-wide font-medium">Registration</p>
                        <p className="text-sm font-semibold text-base-content">
                            {startRegistrationDate} <span className="text-base-content/50">→</span> {endRegistrationDate}
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                    <Link
                        to={`/marathons/${_id}`}
                        className="group/btn flex items-center justify-center gap-2 w-full py-2.5 px-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-all duration-300"
                    >
                        <span>View Details</span>
                        <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

MarathonCard.propTypes = {
    marathon: PropTypes.object.isRequired,
};

export default MarathonCard;

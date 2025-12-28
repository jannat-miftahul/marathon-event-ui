import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
        _id,
        marathonTitle,
        marathonImage,
        location,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
    } = marathon;

    return (
        <div className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-300 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-44 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    src={marathonImage}
                    alt="event-image"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Date badge */}
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {marathonStartDate}
                </div>
            </div>
            <div className="p-4 sm:p-5">
                <h3 className="font-bold text-lg sm:text-xl text-base-content mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {marathonTitle}
                </h3>
                <div className="space-y-2 text-sm text-base-content/70">
                    <p className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {location}
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                        Registration: {startRegistrationDate} - {endRegistrationDate}
                    </p>
                </div>
            </div>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <Link
                    to={`/marathons/${_id}`}
                    className="btn btn-primary w-full text-white font-semibold rounded-xl hover:scale-[1.02] transition-transform"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

MarathonCard.propTypes = {
    marathon: PropTypes.object.isRequired,
};

export default MarathonCard;

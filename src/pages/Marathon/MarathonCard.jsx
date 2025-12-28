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
        <div className="rounded-lg overflow-hidden shadow-lg border p-3 sm:p-4 hover:shadow-xl transition-shadow">
            <div>
                <img
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-md"
                    src={marathonImage}
                    alt="event-image"
                />
            </div>
            <div className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 text-textPrimary">
                <div className="font-bold text-lg sm:text-xl mb-2 line-clamp-2">{marathonTitle}</div>
                <p className="text-sm sm:text-base truncate">Location: {location}</p>
                <p className="text-sm sm:text-base text-textPrimary">
                    Registration: {startRegistrationDate} to{" "}
                    {endRegistrationDate}
                </p>
                <p className="text-sm sm:text-base">
                    Starts: {marathonStartDate}
                </p>
            </div>
            <div className="px-2 sm:px-4 lg:px-6 pt-2 sm:pt-4 pb-2">
                <Link
                    to={`/marathons/${_id}`}
                    className="btn bg-primary text-white font-bold px-3 sm:px-4 py-2 rounded hover:bg-secondary text-sm sm:text-base inline-block"
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

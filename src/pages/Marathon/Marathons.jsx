import { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import { Helmet } from "react-helmet-async";
import { FaSort, FaRunning, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Masonry from "react-masonry-css";
import Spinner from "../../components/Spinner";

// Masonry breakpoint columns configuration
const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
};

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState("desc");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://marathon-event-api.vercel.app/marathons?sort=${sortOrder}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>Marathons | RunTrack</title>
            </Helmet>

            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                        Marathons
                    </h6>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                        All the marathons happening around the world
                    </h3>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaRunning className="text-2xl sm:text-3xl text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-base-content">
                                {marathons.length}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Total Events
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaMapMarkerAlt className="text-2xl sm:text-3xl text-secondary" />
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-base-content">
                                {
                                    new Set(
                                        marathons.map(
                                            (m) => m.location?.split(",")[0]
                                        )
                                    ).size
                                }
                            </p>
                            <p className="text-sm text-base-content/60">
                                Locations
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaCalendarAlt className="text-2xl sm:text-3xl text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-bold text-base-content">
                                Open
                            </p>
                            <p className="text-sm text-base-content/60">
                                Registration Status
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FaSort className="text-lg text-primary" />
                            </div>
                            <div>
                                <p className="text-base-content font-semibold">
                                    Sort Events
                                </p>
                                <p className="text-sm text-base-content/60">
                                    Order by date
                                </p>
                            </div>
                        </div>
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="border border-base-300 bg-base-200 text-base-content rounded-xl px-4 py-2.5 font-medium text-sm sm:text-base w-full sm:w-auto cursor-pointer focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                            <option value="desc">Newest to Oldest</option>
                            <option value="asc">Oldest to Newest</option>
                        </select>
                    </div>
                </div>

                {/* Marathon Grid */}
                {isLoading ? (
                    <Spinner />
                ) : marathons.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaRunning className="text-3xl text-base-content/40" />
                        </div>
                        <p className="text-xl font-semibold text-base-content">
                            No marathons found
                        </p>
                        <p className="text-base-content/60 mt-2">
                            Check back later for upcoming events
                        </p>
                    </div>
                ) : (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex -ml-6 w-auto"
                        columnClassName="pl-6 bg-clip-padding"
                    >
                        {marathons.map((marathon, index) => (
                            <div
                                key={marathon._id}
                                className="animate-fadeIn mb-6"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <MarathonCard marathon={marathon} />
                            </div>
                        ))}
                    </Masonry>
                )}
            </div>
        </div>
    );
};

export default Marathons;

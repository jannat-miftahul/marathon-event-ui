import { useState, useEffect } from "react";
import MarathonData from "./MarathonData";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaRunning, FaMapMarkerAlt, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const MyMarathonList = () => {
    const { user } = useAuth();

    const [marathons, setMarathons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setIsLoading(true);
        axiosSecure
            .get(`/marathons?email=${user.email}`)
            .then((res) => {
                setMarathons(res.data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [user.email, axiosSecure]);

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>My Marathon List | RunTrack</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
                        My Marathon List
                    </h1>
                    <p className="text-base-content/60">
                        Manage marathons you&apos;ve created
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <FaTrophy className="text-2xl text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {marathons.length}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Total Events
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                            <FaMapMarkerAlt className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
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
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <FaRunning className="text-2xl text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {marathons.reduce(
                                    (sum, m) =>
                                        sum + (m.totalRegistrationCount || 0),
                                    0
                                )}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Total Registrations
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-info/30 transition-all">
                        <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center">
                            <FaCalendarAlt className="text-2xl text-info" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                Active
                            </p>
                            <p className="text-sm text-base-content/60">
                                Status
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden">
                    {isLoading ? (
                        <Spinner />
                    ) : marathons.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaTrophy className="text-2xl text-base-content/40" />
                            </div>
                            <p className="text-lg font-semibold text-base-content">
                                No marathons found
                            </p>
                            <p className="text-base-content/60 mt-2">
                                Create your first marathon event!
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-base-200/50 border-b border-base-300">
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Marathon
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden sm:table-cell">
                                            Start Date
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden md:table-cell">
                                            Location
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden lg:table-cell">
                                            Registrations
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-base-300">
                                    {marathons.map((marathon, index) => (
                                        <MarathonData
                                            key={marathon._id}
                                            marathon={marathon}
                                            marathons={marathons}
                                            setMarathons={setMarathons}
                                            index={index}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyMarathonList;

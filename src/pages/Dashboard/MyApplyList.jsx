import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ApplyData from "./ApplyData";
import {
    FaSearch,
    FaClipboardList,
    FaRunning,
    FaCalendarCheck,
} from "react-icons/fa";
import Spinner from "../../components/Spinner";

const MyApplyList = () => {
    const { user } = useAuth();
    const [registrations, setRegistrations] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchRegistrations = async () => {
            setIsLoading(true);
            const query = new URLSearchParams({ userId: user.uid });
            if (searchTitle) {
                query.append("title", searchTitle);
            }

            // * Using axios with custom hook
            axiosSecure
                .get(`/registrations?email=${user.email}&${query.toString()}`)
                .then((res) => {
                    setRegistrations(res.data);
                    setIsLoading(false);
                })
                .catch(() => setIsLoading(false));
        };

        if (user?.email) {
            fetchRegistrations();
        }
    }, [user, axiosSecure, searchTitle]);

    // const handleUpdateRegistration = (registration) => {
    //     setSelectedRegistration(registration);
    //     setIsUpdateModalOpen(true);
    // };

    // const handleUpdateSubmit = async (updatedRegistration) => {
    //     fetch(
    //         `https://marathon-event-api.vercel.app/registrations/${updatedRegistration._id}`,
    //         {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(updatedRegistration),
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 setRegistrations((prevRegistrations) =>
    //                     prevRegistrations.map((registration) =>
    //                         registration._id === updatedRegistration._id
    //                             ? updatedRegistration
    //                             : registration
    //                     )
    //                 );
    //                 Swal.fire(
    //                     "Updated!",
    //                     "Your registration has been updated.",
    //                     "success"
    //                 );
    //                 setIsUpdateModalOpen(false);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             Swal.fire(
    //                 "Error!",
    //                 "An error occurred while updating the registration",
    //                 "error"
    //             );
    //         });
    // };

    // const handleDeleteRegistration = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 const response = await axiosSecure.delete(
    //                     `/registrations/${id}`
    //                 );
    //                 if (response.data.deletedCount > 0) {
    //                     Swal.fire(
    //                         "Deleted!",
    //                         "Your registration has been deleted.",
    //                         "success"
    //                     );
    //                     setRegistrations(
    //                         registrations.filter(
    //                             (registration) => registration._id !== id
    //                         )
    //                     );
    //                 }
    //             } catch (error) {
    //                 console.error("Error deleting registration:", error);
    //             }
    //         }
    //     });
    // };

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>My Apply List | RunTrack</title>
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
                        My Apply List
                    </h1>
                    <p className="text-base-content/60">
                        View and manage your marathon registrations
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <FaClipboardList className="text-2xl text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {registrations.length}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Total Applications
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                            <FaRunning className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {
                                    new Set(
                                        registrations.map(
                                            (r) => r.marathonTitle
                                        )
                                    ).size
                                }
                            </p>
                            <p className="text-sm text-base-content/60">
                                Unique Marathons
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <FaCalendarCheck className="text-2xl text-accent" />
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

                {/* Search Bar */}
                <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 mb-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FaSearch className="text-lg text-primary" />
                            </div>
                            <div>
                                <p className="text-base-content font-semibold">
                                    Search
                                </p>
                                <p className="text-sm text-base-content/60">
                                    Find by marathon title
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search by Marathon Title..."
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                                className="w-full px-4 py-2.5 border border-base-300 bg-base-200 text-base-content rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden">
                    {isLoading ? (
                        <Spinner />
                    ) : registrations.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaClipboardList className="text-2xl text-base-content/40" />
                            </div>
                            <p className="text-lg font-semibold text-base-content">
                                No registrations found
                            </p>
                            <p className="text-base-content/60 mt-2">
                                Start by registering for a marathon!
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
                                            Marathon Title
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden sm:table-cell">
                                            Start Date
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden md:table-cell">
                                            Participant
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden lg:table-cell">
                                            Contact
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-base-300">
                                    {Array.isArray(registrations) &&
                                        registrations.map(
                                            (registration, index) => (
                                                <ApplyData
                                                    key={registration._id}
                                                    registration={registration}
                                                    registrations={
                                                        registrations
                                                    }
                                                    setRegistrations={
                                                        setRegistrations
                                                    }
                                                    index={index}
                                                />
                                            )
                                        )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyApplyList;

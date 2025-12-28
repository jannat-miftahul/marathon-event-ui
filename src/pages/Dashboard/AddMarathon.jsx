import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import {
    FaRunning,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaImage,
    FaUser,
    FaEnvelope,
    FaPlus,
    FaRuler,
    FaAlignLeft,
} from "react-icons/fa";

const AddMarathon = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [marathonDetails, setMarathonDetails] = useState({
        marathonTitle: "",
        startRegistrationDate: new Date(),
        endRegistrationDate: new Date(),
        marathonStartDate: new Date(),
        location: "",
        runningDistance: "",
        description: "",
        marathonImage: "",
        createdAt: new Date(),
        totalRegistrationCount: 0,
        email: user?.email || "anonymous@example.com",
        username: user?.displayName || "Anonymous",
    });
    // console.log(marathonDetails);

    const formattedDetails = {
        ...marathonDetails,
        startRegistrationDate: marathonDetails.startRegistrationDate
            .toISOString()
            .split("T")[0],
        endRegistrationDate: marathonDetails.endRegistrationDate
            .toISOString()
            .split("T")[0],
        marathonStartDate: marathonDetails.marathonStartDate
            .toISOString()
            .split("T")[0],
    };
    // console.log(formattedDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMarathonDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleDateChange = (date, name) => {
        setMarathonDetails((prevDetails) => ({
            ...prevDetails,
            [name]: date,
        }));
    };

    const handleAddMarathon = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch("https://marathon-event-api.vercel.app/marathons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Marathon added successfully!");
                    navigate("/dashboard/my-marathons");
                }
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>RunTrack | Add Marathon</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FaRunning className="text-3xl text-primary" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
                        Add New Marathon
                    </h1>
                    <p className="text-base-content/60">
                        Create a new marathon event for runners to join
                    </p>
                </div>

                <form
                    onSubmit={handleAddMarathon}
                    className="bg-base-100 p-6 sm:p-8 rounded-2xl border border-base-300 shadow-lg"
                >
                    {/* Section: Basic Info */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FaRunning className="text-primary text-sm" />
                            </span>
                            Basic Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaRunning className="text-primary" />
                                    Marathon Title
                                </label>
                                <input
                                    type="text"
                                    name="marathonTitle"
                                    value={marathonDetails.marathonTitle}
                                    onChange={handleChange}
                                    placeholder="Enter marathon title..."
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                        <FaMapMarkerAlt className="text-secondary" />
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={marathonDetails.location}
                                        onChange={handleChange}
                                        placeholder="City, Country"
                                        className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                        <FaRuler className="text-accent" />
                                        Running Distance
                                    </label>
                                    <input
                                        type="text"
                                        name="runningDistance"
                                        value={marathonDetails.runningDistance}
                                        onChange={handleChange}
                                        placeholder="e.g., 42km, Half Marathon"
                                        className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Dates */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                                <FaCalendarAlt className="text-secondary text-sm" />
                            </span>
                            Event Dates
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaCalendarAlt className="text-green-500" />
                                    Registration Start
                                </label>
                                <DatePicker
                                    selected={
                                        marathonDetails.startRegistrationDate
                                    }
                                    onChange={(date) =>
                                        handleDateChange(
                                            date,
                                            "startRegistrationDate"
                                        )
                                    }
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaCalendarAlt className="text-red-500" />
                                    Registration End
                                </label>
                                <DatePicker
                                    selected={
                                        marathonDetails.endRegistrationDate
                                    }
                                    onChange={(date) =>
                                        handleDateChange(
                                            date,
                                            "endRegistrationDate"
                                        )
                                    }
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaCalendarAlt className="text-primary" />
                                    Marathon Date
                                </label>
                                <DatePicker
                                    selected={marathonDetails.marathonStartDate}
                                    onChange={(date) =>
                                        handleDateChange(
                                            date,
                                            "marathonStartDate"
                                        )
                                    }
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Details */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                                <FaAlignLeft className="text-accent text-sm" />
                            </span>
                            Details & Media
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaAlignLeft className="text-accent" />
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={marathonDetails.description}
                                    onChange={handleChange}
                                    placeholder="Describe your marathon event..."
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] resize-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaImage className="text-info" />
                                    Marathon Image URL
                                </label>
                                <input
                                    type="url"
                                    name="marathonImage"
                                    value={marathonDetails.marathonImage}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Creator Info */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-info/10 rounded-lg flex items-center justify-center">
                                <FaUser className="text-info text-sm" />
                            </span>
                            Creator Information
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaEnvelope className="text-base-content/50" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={marathonDetails.email}
                                    readOnly
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-200 text-base-content/60 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-base-content/70 text-sm font-medium mb-2">
                                    <FaUser className="text-base-content/50" />
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={marathonDetails.username}
                                    readOnly
                                    className="w-full px-4 py-3 border border-base-300 rounded-xl bg-base-200 text-base-content/60 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin border-t-white"></div>
                                Adding Marathon...
                            </>
                        ) : (
                            <>
                                <FaPlus className="group-hover:rotate-90 transition-transform" />
                                Add Marathon
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;

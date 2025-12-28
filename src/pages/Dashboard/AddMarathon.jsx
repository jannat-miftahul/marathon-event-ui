import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddMarathon = () => {
    const { user } = useAuth();
    console.log(user);
    const navigate = useNavigate();
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
        // user who created the marathon
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
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-2 sm:p-4">
            <Helmet>
                <title>RunTrack | Add Marathon</title>
            </Helmet>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center mb-4 text-base-content">
                Add Marathon
            </h1>
            <form
                onSubmit={handleAddMarathon}
                className="bg-base-100 p-4 sm:p-6 rounded-lg border border-base-300 shadow-lg"
            >
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Marathon Title
                    </label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={marathonDetails.marathonTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                            Start Registration Date
                        </label>
                        <DatePicker
                            selected={marathonDetails.startRegistrationDate}
                            onChange={(date) =>
                                handleDateChange(date, "startRegistrationDate")
                            }
                            className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                            End Registration Date
                        </label>
                        <DatePicker
                            selected={marathonDetails.endRegistrationDate}
                            onChange={(date) =>
                                handleDateChange(date, "endRegistrationDate")
                            }
                            className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Marathon Start Date
                    </label>
                    <DatePicker
                        selected={marathonDetails.marathonStartDate}
                        onChange={(date) =>
                            handleDateChange(date, "marathonStartDate")
                        }
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={marathonDetails.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Running Distance
                    </label>
                    <input
                        type="text"
                        name="runningDistance"
                        value={marathonDetails.runningDistance}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={marathonDetails.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none min-h-[100px]"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                        Marathon Image URL
                    </label>
                    <input
                        type="url"
                        name="marathonImage"
                        value={marathonDetails.marathonImage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div>
                        <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={marathonDetails.email}
                            readOnly
                            className="w-full px-3 py-2 border border-base-300 rounded bg-base-200 text-base-content/60 text-sm sm:text-base cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-base-content/70 text-sm sm:text-base mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={marathonDetails.username}
                            readOnly
                            className="w-full px-3 py-2 border border-base-300 rounded bg-base-200 text-base-content/60 text-sm sm:text-base cursor-not-allowed"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary text-white px-8 py-2 rounded-lg hover:scale-105 transition-transform font-semibold"
                >
                    Add Marathon
                </button>
            </form>
        </div>
    );
};

export default AddMarathon;

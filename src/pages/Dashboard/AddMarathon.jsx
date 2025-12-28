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

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center mb-4">
                Add Marathon
            </h1>
            <form onSubmit={handleAddMarathon}>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-textSecondary text-sm sm:text-base">
                        Marathon Title
                    </label>
                    <input
                        type="text"
                        name="marathonTitle"
                        value={marathonDetails.marathonTitle}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            Start Registration Date
                        </label>
                        <DatePicker
                            selected={marathonDetails.startRegistrationDate}
                            onChange={(date) =>
                                handleDateChange(date, "startRegistrationDate")
                            }
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            End Registration Date
                        </label>
                        <DatePicker
                            selected={marathonDetails.endRegistrationDate}
                            onChange={(date) =>
                                handleDateChange(date, "endRegistrationDate")
                            }
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-textSecondary text-sm sm:text-base">
                        Marathon Start Date
                    </label>
                    <DatePicker
                        selected={marathonDetails.marathonStartDate}
                        onChange={(date) =>
                            handleDateChange(date, "marathonStartDate")
                        }
                        className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-textSecondary text-sm sm:text-base">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={marathonDetails.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-textSecondary">
                        Running Distance
                    </label>
                    <input
                        type="text"
                        name="runningDistance"
                        value={marathonDetails.runningDistance}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-textSecondary">Description</label>
                    <textarea
                        name="description"
                        value={marathonDetails.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-textSecondary">
                        Marathon Image URL
                    </label>
                    <input
                        type="url"
                        name="marathonImage"
                        value={marathonDetails.marathonImage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="flex justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <label className="block text-textSecondary">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={marathonDetails.email}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-100"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-textSecondary">Username</label>
                        <input
                            type="text"
                            name="name"
                            value={marathonDetails.name}
                            readOnly
                            className="w-full px-3 py-2 border rounded bg-gray-100"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                >
                    Add Marathon
                </button>
            </form>
        </div>
    );
};

export default AddMarathon;

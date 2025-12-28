import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const MarathonRegister = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { _id, marathonTitle, marathonImage, marathonStartDate } =
        useLoaderData();

    const [registrationDetails, setRegistrationDetails] = useState({
        email: user?.email || "",
        firstName: "",
        lastName: "",
        contactNumber: "",
        additionalInfo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegistrationDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const contactNumber = form.contactNumber.value;
        const additionalInfo = form.additionalInfo.value;

        const marathonRegister = {
            marathon_id: _id,
            marathonTitle,
            marathonStartDate,
            email,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        };

        fetch("https://marathon-event-api.vercel.app/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(marathonRegister),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Registered successfully");
                    navigate("/dashboard/my-applies");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 items-center px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
            {/* Register for marathon */}
            <div className="flex-1 w-full max-w-3xl p-2 sm:p-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    Register for {marathonTitle}
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={registrationDetails.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            Marathon Title
                        </label>
                        <input
                            type="text"
                            name="marathonTitle"
                            value={marathonTitle}
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            readOnly
                        />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            Marathon Start Date
                        </label>
                        <input
                            type="text"
                            name="marathonStartDate"
                            value={marathonStartDate}
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="mb-3 sm:mb-4">
                            <label className="block text-textSecondary text-sm sm:text-base">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={registrationDetails.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label className="block text-textSecondary text-sm sm:text-base">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={registrationDetails.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            name="contactNumber"
                            value={registrationDetails.contactNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                            required
                        />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label className="block text-textSecondary text-sm sm:text-base">
                            Additional Info
                        </label>
                        <textarea
                            name="additionalInfo"
                            value={registrationDetails.additionalInfo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary"
                    >
                        Register
                    </button>
                </form>
            </div>

            {/* Image */}
            <div className="flex-1">
                <img src={marathonImage} alt="" />
            </div>
        </div>
    );
};

export default MarathonRegister;

import { useState } from "react";
import PropTypes from "prop-types";

const UpdateRegistrationForm = ({ registration, onSubmit }) => {
    const [updatedRegistration, setUpdatedRegistration] = useState(registration);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRegistration((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(updatedRegistration);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-base-content">Update Registration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={updatedRegistration.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-3 sm:mb-4">
                    <label className="block text-base-content/70 text-sm sm:text-base mb-1">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={updatedRegistration.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                        required
                    />
                </div>
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-base-content/70 text-sm sm:text-base mb-1">Contact Number</label>
                <input
                    type="text"
                    name="contactNumber"
                    value={updatedRegistration.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                    required
                />
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-base-content/70 text-sm sm:text-base mb-1">Additional Info</label>
                <textarea
                    name="additionalInfo"
                    value={updatedRegistration.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary text-primary-content px-4 sm:px-6 py-2 rounded-full hover:opacity-90 w-full sm:w-auto text-sm sm:text-base"
            >
                Update Registration
            </button>
        </form>
    );
};

UpdateRegistrationForm.propTypes = {
    registration: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UpdateRegistrationForm;

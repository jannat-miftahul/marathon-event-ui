import { useState } from "react";
import PropTypes from "prop-types";

const UpdateMarathonForm = ({ marathon, onSubmit }) => {
    const [updatedMarathon, setUpdatedMarathon] = useState(marathon);

    console.log("marathon ", marathon);
    console.log("updatedMarathon ", updatedMarathon);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMarathon((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(updatedMarathon);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-base-content">Update Marathon</h3>
            <div className="mb-3 sm:mb-4">
                <label className="block text-base-content/70 text-sm sm:text-base mb-1">Marathon Title</label>
                <input
                    type="text"
                    name="marathonTitle"
                    value={marathon.marathonTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                    required
                />
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-base-content/70 text-sm sm:text-base mb-1">Start Date</label>
                <input
                    type="date"
                    name="marathonStartDate"
                    value={updatedMarathon.marathonStartDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                    required
                />
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-base-content/70 text-sm sm:text-base mb-1">Location</label>
                <input
                    type="text"
                    name="location"
                    value={updatedMarathon.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-base-300 rounded bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:outline-none"
                    required
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary text-primary-content px-4 sm:px-6 py-2 rounded-full hover:opacity-90 w-full sm:w-auto text-sm sm:text-base"
            >
                Update Marathon
            </button>
        </form>
    );
};

UpdateMarathonForm.propTypes = {
    marathon: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UpdateMarathonForm;

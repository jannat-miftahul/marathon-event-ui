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
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Update Marathon</h3>
            <div className="mb-3 sm:mb-4">
                <label className="block text-textSecondary text-sm sm:text-base">Marathon Title</label>
                <input
                    type="text"
                    name="marathonTitle"
                    value={marathon.marathonTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                    required
                />
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-textSecondary text-sm sm:text-base">Start Date</label>
                <input
                    type="date"
                    name="marathonStartDate"
                    value={updatedMarathon.marathonStartDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                    required
                />
            </div>
            <div className="mb-3 sm:mb-4">
                <label className="block text-textSecondary text-sm sm:text-base">Location</label>
                <input
                    type="text"
                    name="location"
                    value={updatedMarathon.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded text-sm sm:text-base"
                    required
                />
            </div>
            <button
                type="submit"
                className="btn bg-primary text-white px-4 sm:px-6 py-2 rounded-full hover:bg-secondary w-full sm:w-auto text-sm sm:text-base"
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

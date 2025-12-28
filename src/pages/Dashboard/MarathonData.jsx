import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateMarathonForm from "../../components/UpdateMarathonForm";
import { FaEdit, FaTrash, FaRunning, FaUsers } from "react-icons/fa";

const MarathonData = ({ marathon, marathons, setMarathons, index }) => {
    const { _id } = marathon;

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedMarathon, setSelectedMarathon] = useState({});
    // console.log(selectedMarathon);

    const handleUpdateMarathon = (marathon) => {
        setSelectedMarathon(marathon);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedMarathon) => {
        fetch(`https://marathon-event-api.vercel.app/marathons/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMarathon),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setMarathons((prevMarathons) =>
                        prevMarathons.map((marathon) =>
                            marathon._id === updatedMarathon._id
                                ? updatedMarathon
                                : marathon
                        )
                    );
                    toast.success("Marathon updated successfully!");
                    setIsUpdateModalOpen(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("An error occurred while updating the marathon");
            });
    };

    const handleDeleteMarathon = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://marathon-event-api.vercel.app/marathons/${_id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your marathon has been deleted.",
                                "success"
                            );
                            setMarathons(
                                marathons.filter(
                                    (marathon) => marathon._id !== id
                                )
                            );
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            }
        });
    };

    return (
        <tr className="hover:bg-base-200/50 transition-colors">
            <td className="py-4 px-4">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-semibold text-primary">
                    {index + 1}
                </span>
            </td>
            <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaRunning className="text-secondary" />
                    </div>
                    <div>
                        <p className="font-semibold text-base-content line-clamp-1">
                            {marathon.marathonTitle}
                        </p>
                        <p className="text-xs text-base-content/50 sm:hidden">
                            {marathon.marathonStartDate}
                        </p>
                    </div>
                </div>
            </td>
            <td className="py-4 px-4 hidden sm:table-cell">
                <span className="text-sm text-base-content/70">
                    {marathon.marathonStartDate}
                </span>
            </td>
            <td className="py-4 px-4 hidden md:table-cell">
                <span className="text-sm text-base-content/70">
                    {marathon.location}
                </span>
            </td>
            <td className="py-4 px-4 hidden lg:table-cell">
                <div className="flex items-center gap-2">
                    <FaUsers className="text-base-content/50" />
                    <span className="text-sm font-medium text-base-content">
                        {marathon.totalRegistrationCount || 0}
                    </span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleUpdateMarathon(_id)}
                        className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                        title="Edit"
                    >
                        <FaEdit className="text-sm" />
                    </button>
                    <button
                        onClick={() => handleDeleteMarathon(_id)}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                        title="Delete"
                    >
                        <FaTrash className="text-sm" />
                    </button>
                </div>
            </td>

            {isUpdateModalOpen && (
                <Modal onClose={() => setIsUpdateModalOpen(false)}>
                    <UpdateMarathonForm
                        marathon={selectedMarathon}
                        onSubmit={handleUpdateSubmit}
                    />
                </Modal>
            )}
        </tr>
    );
};

MarathonData.propTypes = {
    marathon: PropTypes.object.isRequired,
    marathons: PropTypes.array.isRequired,
    setMarathons: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default MarathonData;

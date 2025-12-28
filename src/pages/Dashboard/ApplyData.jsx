import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateRegistrationForm from "../../components/UpdateRegistrationForm";
import { FaEdit, FaTrash, FaRunning } from "react-icons/fa";

const ApplyData = ({ registration, registrations, setRegistrations, index }) => {
    const { _id } = registration;

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedRegistration, setSelectedRegistration] = useState({});
    // console.log(selectedRegistration);

    const handleUpdateRegistration = (registration) => {
        setSelectedRegistration(registration);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = (updatedRegistration) => {
        fetch(`https://marathon-event-api.vercel.app/registrations/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRegistration),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setRegistrations((prevregistrations) =>
                        prevregistrations.map((registration) =>
                            registration._id === updatedRegistration._id
                                ? updatedRegistration
                                : registration
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
                    `https://marathon-event-api.vercel.app/registrations/${_id}`,
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
                            setRegistrations(
                                registrations.filter(
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
                        <p className="font-semibold text-base-content line-clamp-1">{registration.marathonTitle}</p>
                        <p className="text-xs text-base-content/50 sm:hidden">{registration.marathonStartDate}</p>
                    </div>
                </div>
            </td>
            <td className="py-4 px-4 hidden sm:table-cell">
                <span className="text-sm text-base-content/70">{registration.marathonStartDate}</span>
            </td>
            <td className="py-4 px-4 hidden md:table-cell">
                <div>
                    <p className="font-medium text-base-content">{registration.firstName} {registration.lastName}</p>
                    <p className="text-xs text-base-content/50">{registration.email}</p>
                </div>
            </td>
            <td className="py-4 px-4 hidden lg:table-cell">
                <span className="text-sm text-base-content/70">{registration.contactNumber}</span>
            </td>
            <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleUpdateRegistration(_id)}
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
                    <UpdateRegistrationForm
                        registration={selectedRegistration}
                        onSubmit={handleUpdateSubmit}
                    />
                </Modal>
            )}
        </tr>
    );
};

ApplyData.propTypes = {
    registration: PropTypes.object.isRequired,
    registrations: PropTypes.array.isRequired,
    setRegistrations: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default ApplyData;

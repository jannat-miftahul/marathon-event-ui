import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateRegistrationForm from "../../components/UpdateRegistrationForm";

const ApplyData = ({ registration, registrations, setRegistrations }) => {
    const { _id } = registration;
    console.log("reg id", _id);

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
        <tr className="text-xs sm:text-sm lg:text-base">
            <td className="py-2 px-1 sm:px-2">{registrations.indexOf(registration) + 1}</td>
            <td className="py-2 px-1 sm:px-2 max-w-[80px] sm:max-w-[120px] truncate">{registration.marathonTitle}</td>
            <td className="py-2 px-1 sm:px-2 hidden sm:table-cell">{registration.marathonStartDate}</td>
            <td className="py-2 px-1 sm:px-2 hidden md:table-cell">{registration.firstName} {registration.lastName}</td>
            <td className="py-2 px-1 sm:px-2 hidden lg:table-cell">{registration.contactNumber}</td>
            <td className="py-2 px-1 sm:px-2">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <button
                        onClick={() => handleUpdateRegistration(_id)}
                        className="btn btn-xs sm:btn-sm bg-primary text-white px-2 sm:px-4 py-1 rounded-full hover:bg-secondary text-xs"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteMarathon(_id)}
                        className="btn btn-xs sm:btn-sm bg-red-500 text-white px-2 sm:px-4 py-1 rounded-full hover:bg-red-600 text-xs"
                    >
                        Delete
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
};

export default ApplyData;

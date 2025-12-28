import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal";
import UpdateMarathonForm from "../../components/UpdateMarathonForm";

const MarathonData = ({ marathon, marathons, setMarathons }) => {
    const { _id } = marathon;
    console.log("marathon id", _id);

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
                fetch(`https://marathon-event-api.vercel.app/marathons/${_id}`, {
                    method: "DELETE",
                })
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
        <tr className="text-xs sm:text-sm lg:text-base">
            <td className="py-2 px-1 sm:px-2">{marathons.indexOf(marathon) + 1}</td>
            <td className="py-2 px-1 sm:px-2 max-w-[100px] sm:max-w-[150px] truncate">{marathon.marathonTitle}</td>
            <td className="py-2 px-1 sm:px-2 hidden sm:table-cell">{marathon.marathonStartDate}</td>
            <td className="py-2 px-1 sm:px-2 hidden md:table-cell">{marathon.location}</td>
            <td className="py-2 px-1 sm:px-2">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <button
                        onClick={() => handleUpdateMarathon(_id)}
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
};

export default MarathonData;

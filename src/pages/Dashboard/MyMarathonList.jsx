import { useState, useEffect } from "react";
// import useAuth from "../../hooks/useAuth";
import MarathonData from "./MarathonData";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyMarathonList = () => {
    const { user } = useAuth();

    const [marathons, setMarathons] = useState([]);
    // console.log(marathons);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`https://marathon-event-api.vercel.app/marathons`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMarathons(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });

        //* Using axios with custom hook
        axiosSecure
            .get(`/marathons?email=${user.email}`)
            .then((res) => setMarathons(res.data));
    }, [user.email, axiosSecure]);

    return (
        <div className="mx-auto p-2 sm:p-4">
            <Helmet>
                <title>My Marathon List | RunTrack</title>
            </Helmet>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center mb-4">
                My Marathon List
            </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-xs sm:text-sm lg:text-base min-w-full">
                    <thead>
                        <tr>
                            <th className="text-xs sm:text-sm">#</th>
                            <th className="text-xs sm:text-sm">Title</th>
                            <th className="text-xs sm:text-sm hidden sm:table-cell">Starts</th>
                            <th className="text-xs sm:text-sm hidden md:table-cell">Location</th>
                            <th className="text-xs sm:text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marathons.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    No Marathons found
                                </td>
                            </tr>
                        )}

                        {marathons.map((marathon) => (
                            <MarathonData
                                key={marathon._id}
                                marathon={marathon}
                                marathons={marathons}
                                setMarathons={setMarathons}
                            ></MarathonData>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyMarathonList;

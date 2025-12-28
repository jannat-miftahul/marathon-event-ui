import { useEffect, useState } from "react";
import MarathonCard from "../Marathon/MarathonCard";

const UpcommingMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch("https://marathon-event-api.vercel.app/upcoming-marathons")
            .then((res) => res.json())
            .then((data) => {
                setMarathons(data);
                // console.log(data);
            });
    }, []);

    return (
        <div className="bg-backgroundDark">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
                <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                    upcomming marathons
                </h6>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                    Here are some of the marathons coming up in the near future
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 lg:py-12">
                    {marathons.map((marathon) => (
                        <MarathonCard key={marathon._id} marathon={marathon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcommingMarathons;

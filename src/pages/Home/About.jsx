import { FaMagnifyingGlassLocation, FaPersonRunning } from "react-icons/fa6";
import { TbShoe } from "react-icons/tb";

const About = () => {
    return (
        <div
            id="about"
            className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-24"
        >
            {/* image Section */}
            <div className="w-full lg:flex-1">
                <img
                    src="https://i.ibb.co.com/3f5jq2H/your-guide-to-the-2023-new-york-city-marathon.jpg"
                    alt="Marathon Runners"
                    className="shadow-lg object-cover w-full h-[300px] sm:h-[400px] lg:h-full rounded-lg"
                />
            </div>

            {/* content Section */}
            <div className="w-full lg:flex-1 space-y-4 sm:space-y-6">
                <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold uppercase text-textSecondary text-center lg:text-left">
                    About RunTrack
                </h6>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-bold mb-4 uppercase text-center lg:text-left">
                    where runners become{" "}
                    <span className="text-accent">champions</span>
                </h2>
                <p className="text-sm sm:text-base text-textSecondary mb-6 text-center lg:text-left">
                    RunTrack is the largest marathon event in the world. Every
                    year, more than 50,000 runners from around the world gather
                    in New York City to participate in the event.
                </p>

                <div className="flex flex-col space-y-4">
                    {/* Stats 1 */}
                    <div className="bg-gray-100 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 items-center text-textGray p-4 sm:p-6">
                        <div className="text-accent flex items-center justify-center">
                            <FaPersonRunning className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h5 className="text-accent text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                                273k+
                            </h5>
                            <p className="uppercase text-black text-sm sm:text-base">Runners</p>
                        </div>
                        <p className="sm:col-span-2 text-xs sm:text-sm text-center flex-1 text-black">
                            Cumulative total of runners throughout the
                            event&apos;s history.
                        </p>
                    </div>
                    {/* Stats 2 */}
                    <div className="bg-gray-100 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 items-center text-textGray p-4 sm:p-6">
                        <div className="text-accent flex flex-col items-center justify-center relative">
                            <TbShoe className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]" />
                            <FaMagnifyingGlassLocation
                                className="absolute bottom-0 sm:-bottom-2 w-8 h-8 sm:w-10 sm:h-10"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h5 className="text-accent text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                                30+
                            </h5>
                            <p className="uppercase text-black text-sm sm:text-base">Countries</p>
                        </div>
                        <p className="sm:col-span-2 text-xs sm:text-sm text-center flex-1 text-black">
                            Runners from over 30 countries participate in the
                            event.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                    <button className="btn bg-accent text-black mt-4 sm:mt-6 px-4 sm:px-6 py-2 font-bold rounded-lg uppercase text-sm sm:text-base">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

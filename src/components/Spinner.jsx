import { FaRunning } from "react-icons/fa";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/30 rounded-full animate-spin border-t-primary"></div>
                <FaRunning className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-xl" />
            </div>
        </div>
    );
};

export default Spinner;

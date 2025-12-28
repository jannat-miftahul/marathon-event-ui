import { FaCheck } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-backgroundDark px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <h6 className="text-lg sm:text-xl lg:text-2xl font-raleway font-bold mb-4 text-center">
                Subscribe to the RunTrack newsletter
            </h6>
            <ul className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-2 sm:gap-4 lg:gap-6 text-textSecondary mb-6">
                <li className="flex items-center gap-2 text-sm sm:text-base">
                    <FaCheck className="text-secondary flex-shrink-0" /> Deals and discounts
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                    <FaCheck className="text-secondary flex-shrink-0" /> Runner insights
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                    <FaCheck className="text-secondary flex-shrink-0" /> Event discovery
                </li>
            </ul>
            <form className="flex flex-col gap-4 w-full max-w-md px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition whitespace-nowrap text-sm sm:text-base"
                    >
                        Subscribe
                    </button>
                </div>
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 flex-shrink-0"
                        required
                    />
                    <label htmlFor="terms" className="text-xs sm:text-sm text-textSecondary">
                        I have read and accept RunTrack{" "}
                        <a href="#" className="text-secondary hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-secondary hover:underline">
                            Privacy Policy
                        </a>{" "}
                        and consent to the processing of personal data.
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;

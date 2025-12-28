import { FaCheck } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full" />
            </div>
            
            <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <h6 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-bold mb-3 text-center text-white">
                    Subscribe to the RunTrack newsletter
                </h6>
                <p className="text-white/80 text-center mb-6 max-w-xl">
                    Stay updated with the latest marathons, tips, and exclusive offers.
                </p>
                <ul className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3 sm:gap-6 lg:gap-8 text-white/90 mb-8">
                    <li className="flex items-center gap-2 text-sm sm:text-base font-medium">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                        </span>
                        Deals and discounts
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base font-medium">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                        </span>
                        Runner insights
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base font-medium">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                        </span>
                        Event discovery
                    </li>
                </ul>
                <form className="flex flex-col gap-4 w-full max-w-lg px-4 sm:px-0">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-white/95 text-base-content border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-sm sm:text-base shadow-lg placeholder:text-base-content/50"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-secondary hover:bg-secondary/90 text-white py-3 px-6 sm:px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                        >
                            Subscribe
                        </button>
                    </div>
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 flex-shrink-0 w-4 h-4 accent-secondary"
                            required
                        />
                        <label htmlFor="terms" className="text-xs sm:text-sm text-white/80">
                            I have read and accept RunTrack{" "}
                            <a href="#" className="text-white underline hover:text-secondary transition-colors">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-white underline hover:text-secondary transition-colors">
                                Privacy Policy
                            </a>{" "}
                            and consent to the processing of personal data.
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;

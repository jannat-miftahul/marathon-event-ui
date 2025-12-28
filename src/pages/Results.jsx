import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
    FaSearch,
    FaTrophy,
    FaMedal,
    FaUsers,
    FaClock,
    FaRunning,
    FaMale,
    FaFemale,
} from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

const Results = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("/results.json")
            .then((res) => res.json())
            .then((data) => {
                setResults(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching results:", error);
                setIsLoading(false);
            });
    }, []);

    const filteredResults = results.filter((result) => {
        return (
            result.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? result.category === selectedCategory : true)
        );
    });

    const getPositionBadge = (position) => {
        if (position === 1) {
            return (
                <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <FaTrophy className="text-sm" />
                    </span>
                    <span className="font-bold text-yellow-600">1st</span>
                </div>
            );
        } else if (position === 2) {
            return (
                <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <FaMedal className="text-sm" />
                    </span>
                    <span className="font-bold text-gray-500">2nd</span>
                </div>
            );
        } else if (position === 3) {
            return (
                <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <FaMedal className="text-sm" />
                    </span>
                    <span className="font-bold text-amber-700">3rd</span>
                </div>
            );
        }
        return (
            <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center text-base-content font-bold">
                    {position}
                </span>
                <span className="text-base-content/60">{position}th</span>
            </div>
        );
    };

    const mensCount = results.filter((r) => r.category === "Men's").length;
    const womensCount = results.filter((r) => r.category === "Women's").length;
    const bestTime = results.reduce(
        (best, r) => {
            const [h, m, s] = r.time.split(":").map(Number);
            const totalSecs = h * 3600 + m * 60 + s;
            return totalSecs < best.secs
                ? { time: r.time, secs: totalSecs }
                : best;
        },
        { time: "0:00:00", secs: Infinity }
    ).time;

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>Results | RunTrack</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FaTrophy className="text-3xl text-yellow-500" />
                    </div>
                    <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                        Marathon Results
                    </h6>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                        Check out the results of the latest marathon events here
                    </h3>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaUsers className="text-xl sm:text-2xl text-primary" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-base-content">
                                {results.length}
                            </p>
                            <p className="text-xs sm:text-sm text-base-content/60">
                                Finishers
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaMale className="text-xl sm:text-2xl text-blue-500" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-base-content">
                                {mensCount}
                            </p>
                            <p className="text-xs sm:text-sm text-base-content/60">
                                Men
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:border-pink-500/30 transition-all">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaFemale className="text-xl sm:text-2xl text-pink-500" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-base-content">
                                {womensCount}
                            </p>
                            <p className="text-xs sm:text-sm text-base-content/60">
                                Women
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:border-yellow-500/30 transition-all">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaClock className="text-xl sm:text-2xl text-yellow-500" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-base-content">
                                {bestTime}
                            </p>
                            <p className="text-xs sm:text-sm text-base-content/60">
                                Best Time
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FaSearch className="text-lg text-primary" />
                            </div>
                            <div>
                                <p className="text-base-content font-semibold">
                                    Search & Filter
                                </p>
                                <p className="text-sm text-base-content/60">
                                    Find specific results
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <div className="relative flex-1 sm:flex-none">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
                                <input
                                    type="text"
                                    className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-base-300 bg-base-200 text-base-content rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="Search by name..."
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>

                            <div className="relative flex-1 sm:flex-none">
                                <IoFilterOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
                                <select
                                    className="w-full sm:w-48 pl-10 pr-4 py-2.5 border border-base-300 bg-base-200 text-base-content rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                >
                                    <option value="">All Categories</option>
                                    <option value="Men's">Men&apos;s</option>
                                    <option value="Women's">
                                        Women&apos;s
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Table */}
                <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-primary/30 rounded-full animate-spin border-t-primary"></div>
                        </div>
                    ) : filteredResults.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaRunning className="text-2xl text-base-content/40" />
                            </div>
                            <p className="text-lg font-semibold text-base-content">
                                No results found
                            </p>
                            <p className="text-base-content/60 mt-2">
                                Try adjusting your search or filter
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-base-200/50 border-b border-base-300">
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Position
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Athlete
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider">
                                            Time
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden sm:table-cell">
                                            Category
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden md:table-cell">
                                            Country
                                        </th>
                                        <th className="text-left py-4 px-4 text-xs font-semibold text-base-content/70 uppercase tracking-wider hidden lg:table-cell">
                                            Event
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-base-300">
                                    {filteredResults.map((result, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-base-200/50 transition-colors"
                                        >
                                            <td className="py-4 px-4">
                                                {getPositionBadge(
                                                    result.position
                                                )}
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            result.category ===
                                                            "Men's"
                                                                ? "bg-blue-500/10"
                                                                : "bg-pink-500/10"
                                                        }`}
                                                    >
                                                        {result.category ===
                                                        "Men's" ? (
                                                            <FaMale className="text-blue-500" />
                                                        ) : (
                                                            <FaFemale className="text-pink-500" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-base-content">
                                                            {result.name}
                                                        </p>
                                                        <p className="text-xs text-base-content/50">
                                                            BIB: {result.bib}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-2">
                                                    <FaClock className="text-base-content/40 text-sm" />
                                                    <span className="font-mono font-semibold text-base-content">
                                                        {result.time}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 hidden sm:table-cell">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        result.category ===
                                                        "Men's"
                                                            ? "bg-blue-500/10 text-blue-600"
                                                            : "bg-pink-500/10 text-pink-600"
                                                    }`}
                                                >
                                                    {result.category}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 hidden md:table-cell">
                                                <span className="text-sm text-base-content/70">
                                                    {result.country}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 hidden lg:table-cell">
                                                <span className="text-sm text-base-content/70">
                                                    {result.event}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Results;

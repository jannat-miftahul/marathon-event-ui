// src/pages/Results.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import "tailwindcss/tailwind.css";

const results = [
    {
        name: "Mike Johnson",
        time: "2:45:30",
        position: 1,
        category: "Men's",
        event: "Marathon 2024",
    },
    {
        name: "Sarah Smith",
        time: "3:05:10",
        position: 2,
        category: "Women's",
        event: "Marathon 2024",
    },
    {
        name: "Steve Brown",
        time: "3:15:20",
        position: 3,
        category: "Men's",
        event: "Marathon 2024",
    },
    // Add more sample results here
];

const Results = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredResults = results.filter((result) => {
        return (
            result.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? result.category === selectedCategory : true)
        );
    });

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
            <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                Marathon Results
            </h6>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                Check out the results of the latest marathon events here
            </h3>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5 items-stretch sm:items-center">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <FaSearch className="text-gray-500 flex-shrink-0" />
                    <input
                        type="text"
                        className="input input-bordered w-full sm:w-48 lg:w-64 text-sm sm:text-base"
                        placeholder="Search by Name"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <IoFilterOutline className="text-gray-500 flex-shrink-0" />
                    <select
                        className="select select-bordered w-full sm:w-auto text-sm sm:text-base"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Filter by Category</option>
                        <option value="Men's">Men&apos;s</option>
                        <option value="Women's">Women&apos;s</option>
                    </select>
                </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-sm sm:text-base">
                    <thead>
                        <tr>
                            <th className="text-xs sm:text-sm">Position</th>
                            <th className="text-xs sm:text-sm">Name</th>
                            <th className="text-xs sm:text-sm">Time</th>
                            <th className="text-xs sm:text-sm hidden sm:table-cell">Category</th>
                            <th className="text-xs sm:text-sm hidden md:table-cell">Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((result, index) => (
                            <tr key={index}>
                                <td className="text-xs sm:text-sm">{result.position}</td>
                                <td className="text-xs sm:text-sm">{result.name}</td>
                                <td className="text-xs sm:text-sm">{result.time}</td>
                                <td className="text-xs sm:text-sm hidden sm:table-cell">{result.category}</td>
                                <td className="text-xs sm:text-sm hidden md:table-cell">{result.event}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* No Results Found */}
            {filteredResults.length === 0 && (
                <p className="text-center text-lg text-gray-500 mt-5">
                    No results found
                </p>
            )}
        </div>
    );
};

export default Results;

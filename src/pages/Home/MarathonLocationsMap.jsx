import { useState } from 'react';
import { FaMapMarkerAlt, FaGlobeAmericas, FaRunning, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const MarathonLocationsMap = () => {
    const [selectedRegion, setSelectedRegion] = useState('all');

    // Group marathons by region/continent
    const regions = ['all', 'Americas', 'Europe', 'Asia', 'Africa', 'Oceania'];
    // Featured locations with coordinates for visual representation
    const featuredLocations = [
        {
            id: 1,
            city: "Boston",
            country: "USA",
            continent: "Americas",
            events: 3,
            participants: "25K+",
            nextEvent: "April 2026",
            color: "primary",
            position: { top: '35%', left: '20%' }
        },
        {
            id: 2,
            city: "London",
            country: "UK",
            continent: "Europe",
            events: 4,
            participants: "40K+",
            nextEvent: "May 2026",
            color: "secondary",
            position: { top: '28%', left: '48%' }
        },
        {
            id: 3,
            city: "Tokyo",
            country: "Japan",
            continent: "Asia",
            events: 2,
            participants: "35K+",
            nextEvent: "March 2026",
            color: "accent",
            position: { top: '32%', left: '82%' }
        },
        {
            id: 4,
            city: "Berlin",
            country: "Germany",
            continent: "Europe",
            events: 3,
            participants: "45K+",
            nextEvent: "September 2026",
            color: "success",
            position: { top: '30%', left: '52%' }
        },
        {
            id: 5,
            city: "New York",
            country: "USA",
            continent: "Americas",
            events: 5,
            participants: "50K+",
            nextEvent: "November 2026",
            color: "info",
            position: { top: '33%', left: '22%' }
        },
        {
            id: 6,
            city: "Sydney",
            country: "Australia",
            continent: "Oceania",
            events: 2,
            participants: "20K+",
            nextEvent: "August 2026",
            color: "warning",
            position: { top: '70%', left: '85%' }
        }
    ];

    const filteredLocations = selectedRegion === 'all'
        ? featuredLocations
        : featuredLocations.filter(loc => loc.continent === selectedRegion);

    return (
        <div className="relative bg-gradient-to-br from-base-200 via-base-200 to-base-300/30 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '1s' }} />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-20">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                        Global Events
                    </h6>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                        Marathon Locations Worldwide
                    </h3>
                </div>

                {/* Region Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
                                ${selectedRegion === region
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                                    : 'bg-base-100 dark:bg-base-100/95 text-base-content/70 border-2 border-base-300 dark:border-base-300/30 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {region.charAt(0).toUpperCase() + region.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Interactive World Map Visualization */}
                <div className="relative bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/30 rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 overflow-hidden">
                    {/* Decorative Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                        style={{
                            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Globe Icon Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05]">
                        <FaGlobeAmericas className="text-[400px]" />
                    </div>

                    {/* Map Container */}
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                        {/* Animated Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {filteredLocations.map((location, index) => {
                                if (index === 0) return null;
                                const prevLocation = filteredLocations[index - 1];
                                return (
                                    <line
                                        key={`line-${location.id}`}
                                        x1={prevLocation.position.left}
                                        y1={prevLocation.position.top}
                                        x2={location.position.left}
                                        y2={location.position.top}
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeDasharray="5,5"
                                        className="text-primary/20 dark:text-primary/30"
                                        style={{
                                            animation: 'dash 20s linear infinite'
                                        }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Location Markers */}
                        {filteredLocations.map((location, index) => (
                            <div
                                key={location.id}
                                className="absolute group cursor-pointer"
                                style={{
                                    top: location.position.top,
                                    left: location.position.left,
                                    transform: 'translate(-50%, -50%)',
                                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Pulsing Ring */}
                                <div className={`absolute inset-0 w-16 h-16 bg-${location.color} rounded-full opacity-20 animate-ping`}
                                    style={{ animationDuration: '2s' }} />

                                {/* Marker Pin */}
                                <div className={`relative w-12 h-12 bg-gradient-to-br from-${location.color} to-${location.color}/80 rounded-full 
                                    flex items-center justify-center shadow-xl border-4 border-base-100 
                                    group-hover:scale-125 transition-transform duration-300 z-10`}>
                                    <FaMapMarkerAlt className="text-white text-xl" />
                                </div>

                                {/* Info Card (appears on hover) */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                    transition-all duration-300 z-20">
                                    <div className="bg-base-100 dark:bg-base-100/98 border-2 border-base-300 dark:border-base-300/30 
                                        rounded-xl shadow-2xl p-4 backdrop-blur-sm">
                                        <h4 className="font-bold text-lg text-base-content mb-1">
                                            {location.city}
                                        </h4>
                                        <p className="text-sm text-base-content/60 dark:text-base-content/70 mb-3">
                                            {location.country} • {location.continent}
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaRunning className="text-primary" />
                                                <span className="text-base-content/80">
                                                    {location.events} Events
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaUsers className="text-secondary" />
                                                <span className="text-base-content/80">
                                                    {location.participants} Participants
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaCalendarAlt className="text-accent" />
                                                <span className="text-base-content/80">
                                                    Next: {location.nextEvent}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Arrow pointer */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-base-100 dark:bg-base-100/98 
                                        border-l-2 border-t-2 border-base-300 dark:border-base-300/30 rotate-45" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLocations.map((location, index) => (
                        <div
                            key={location.id}
                            className="group bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/30 
                                rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Location Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 bg-gradient-to-br from-${location.color} to-${location.color}/80 
                                        rounded-xl flex items-center justify-center shadow-lg 
                                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        <FaMapMarkerAlt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-base-content group-hover:text-primary transition-colors">
                                            {location.city}
                                        </h3>
                                        <p className="text-sm text-base-content/60 dark:text-base-content/70">
                                            {location.country}
                                        </p>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 bg-${location.color}/10 dark:bg-${location.color}/20 rounded-full`}>
                                    <span className={`text-xs font-bold text-${location.color}`}>
                                        {location.continent}
                                    </span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <FaRunning className="text-primary" />
                                        <span>Events</span>
                                    </div>
                                    <span className="font-bold text-base-content">{location.events}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <FaUsers className="text-secondary" />
                                        <span>Participants</span>
                                    </div>
                                    <span className="font-bold text-base-content">{location.participants}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-base-content/70">
                                        <FaCalendarAlt className="text-accent" />
                                        <span>Next Event</span>
                                    </div>
                                    <span className="font-bold text-base-content">{location.nextEvent}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline CSS for animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes fadeInScale {
                        from {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0);
                        }
                        to {
                            opacity: 1;
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
                    @keyframes dash {
                        to {
                            stroke-dashoffset: -1000;
                        }
                    }
                `
            }} />
        </div>
    );
};

export default MarathonLocationsMap;

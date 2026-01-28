import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaCamera, FaVideo, FaPlay, FaImages, FaExpand, FaTimes } from "react-icons/fa";
import Spinner from "../components/Spinner";

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch("/gallery.json");
                const data = await response.json();
                setGalleryItems(data);
            } catch (error) {
                console.error("Error fetching gallery:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGallery();
    }, []);

    const filteredItems =
        filter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.type === filter);

    const photoCount = galleryItems.filter(
        (item) => item.type === "photo"
    ).length;
    const videoCount = galleryItems.filter(
        (item) => item.type === "video"
    ).length;

    const openLightbox = (item) => {
        if (item.type === "photo") {
            setSelectedItem(item);
            setLightboxOpen(true);
        }
    };

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>Gallery | RunTrack</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FaImages className="text-3xl text-primary" />
                    </div>
                    <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                        Event Gallery
                    </h6>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                        Check out the photos and videos from the latest marathon
                        events here
                    </h3>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <FaImages className="text-2xl text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {galleryItems.length}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Total Items
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                            <FaCamera className="text-2xl text-secondary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {photoCount}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Photos
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <FaVideo className="text-2xl text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-base-content">
                                {videoCount}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Videos
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FaImages className="text-lg text-primary" />
                            </div>
                            <div>
                                <p className="text-base-content font-semibold">
                                    Filter Gallery
                                </p>
                                <p className="text-sm text-base-content/60">
                                    View by type
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-base-200 p-1.5 rounded-xl">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${filter === "all"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-base-content/60 hover:text-base-content hover:bg-base-300"
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setFilter("photo")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${filter === "photo"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-base-content/60 hover:text-base-content hover:bg-base-300"
                                    }`}
                            >
                                <FaCamera /> Photos
                            </button>
                            <button
                                onClick={() => setFilter("video")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${filter === "video"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-base-content/60 hover:text-base-content hover:bg-base-300"
                                    }`}
                            >
                                <FaVideo /> Videos
                            </button>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden">
                                    {item.type === "photo" ? (
                                        <>
                                            <img
                                                src={item.url}
                                                alt={item.title}
                                                className="w-full h-52 sm:h-60 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            {/* Expand button */}
                                            <button
                                                onClick={() =>
                                                    openLightbox(item)
                                                }
                                                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-base-content opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
                                            >
                                                <FaExpand />
                                            </button>
                                            {/* Type badge */}
                                            <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                                <FaCamera className="text-[10px]" />
                                                Photo
                                            </div>
                                            {/* Category badge */}
                                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-base-content text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                                {item.category}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="relative w-full h-52 sm:h-60 lg:h-64">
                                            <iframe
                                                src={item.url}
                                                title={item.title}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                            {/* Type badge */}
                                            <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 z-10 pointer-events-none">
                                                <FaPlay className="text-[10px]" />
                                                Video
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <h2 className="text-lg font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-base-content/60">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaImages className="text-2xl text-base-content/40" />
                        </div>
                        <p className="text-lg font-semibold text-base-content">
                            No items found
                        </p>
                        <p className="text-base-content/60 mt-2">
                            Try selecting a different filter
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && selectedItem && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                    <div
                        className="max-w-5xl max-h-[85vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedItem.url}
                            alt={selectedItem.title}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <h3 className="text-xl font-bold text-white mb-1">
                                {selectedItem.title}
                            </h3>
                            <p className="text-white/70 text-sm">
                                {selectedItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

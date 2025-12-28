const galleryItems = [
    {
        type: "photo",
        url: "https://i.ibb.co.com/Vjq3Y01/66250786d88a84-78124202.jpg",
        title: "Marathon 2024 Finish Line",
        description: "Runners crossing the finish line.",
    },
    {
        type: "video",
        url: "https://www.youtube.com/embed/BgV9r1IuOaE?si=zUzYVaNAhMyYjXsy",
        title: "Event Highlights 2024",
        description: "Watch the highlights from the marathon event.",
    },
    {
        type: "photo",
        url: "https://i.ibb.co.com/zHMVyNw/silhouette-young-man-running-sprinting-600nw-1978910810.jpg",
        title: "Runners in Action",
        description: "Athletes pushing their limits on the racecourse.",
    },
];

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10 lg:py-12">
            <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                Event Gallery
            </h6>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                Check out the photos and videos from the latest marathon events
                here
            </h3>

            {/* Gallery Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className="card card-compact w-full shadow-lg rounded-lg hover:shadow-xl transition-shadow"
                    >
                        {item.type === "photo" ? (
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-lg"
                            />
                        ) : (
                            <div className="relative w-full h-48 sm:h-56 lg:h-64">
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    className="w-full h-full rounded-t-lg"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                        <div className="card-body p-3 sm:p-4">
                            <h2 className="card-title text-lg sm:text-xl font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-sm sm:text-base text-textSecondary">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

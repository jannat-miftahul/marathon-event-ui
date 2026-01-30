// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { FaRunning, FaTrophy, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        image: "https://i.ibb.co.com/VDG2tmc/151121-Marathon-01.jpg",
        title: "Run Your Best Race",
        subtitle: "Join thousands of runners worldwide",
        badge: "500+ Events",
    },
    {
        image: "https://i.ibb.co.com/t3zVcPy/i-E2e8-Qm-T5r-U75-D7-RGCs26-1200-80.jpg",
        title: "Push Your Limits",
        subtitle: "Discover marathons near you",
        badge: "10K+ Runners",
    },
    {
        image: "https://i.ibb.co.com/QbX6wn6/marathon-header.jpg",
        title: "Every Step Counts",
        subtitle: "From first-timers to champions",
        badge: "50+ Countries",
    },
    {
        image: "https://i.ibb.co.com/B4G8h3D/sr-lcw-220924-199.jpg",
        title: "Cross The Finish Line",
        subtitle: "Your marathon journey starts here",
        badge: "Premium Support",
    },
];

const Slider = () => {
    return (
        <div className="relative slider-container">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
                            {/* Background Image with Ken Burns Effect */}
                            <div className="absolute inset-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={slide.image}
                                    alt={`slide-${index + 1}`}
                                    style={{
                                        animation: "kenBurns 20s ease-in-out infinite"
                                    }}
                                />
                            </div>

                            {/* Multi-layer Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

                            {/* Animated Decorative Elements */}
                            <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                            <div
                                className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse"
                                style={{ animationDelay: "0.7s" }}
                            />

                            {/* Floating Running Icons */}
                            <div
                                className="absolute top-1/4 right-10 opacity-10"
                                style={{ animation: "float 6s ease-in-out infinite" }}
                            >
                                <FaRunning className="text-7xl text-white" />
                            </div>
                            <div
                                className="absolute bottom-1/4 left-10 opacity-10"
                                style={{ animation: "float 6s ease-in-out infinite", animationDelay: "3s" }}
                            >
                                <FaTrophy className="text-6xl text-white" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                                {/* Top Badge */}
                                <div
                                    className="mb-4 sm:mb-6"
                                    style={{ animation: "fadeInDown 1s ease-out" }}
                                >
                                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                                        <FaMapMarkerAlt className="text-primary text-sm sm:text-base" />
                                        <span className="text-white font-semibold text-sm sm:text-base">
                                            {slide.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Title */}
                                <h2
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-raleway font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl max-w-4xl"
                                    style={{ animation: "fadeInUp 1s ease-out" }}
                                >
                                    {slide.title}
                                </h2>

                                {/* Subtitle */}
                                <p
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-2 sm:mb-3 drop-shadow-lg max-w-2xl"
                                    style={{ animation: "fadeInUp 1s ease-out 0.2s backwards" }}
                                >
                                    {slide.subtitle}
                                </p>

                                {/* CTA Buttons */}
                                <div
                                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                                    style={{ animation: "fadeInUp 1s ease-out 0.4s backwards" }}
                                >
                                    <a
                                        href="/marathons"
                                        className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm sm:text-base rounded-xl shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <FaRunning className="text-lg sm:text-xl" />
                                            Explore Events
                                            <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </a>

                                    <a
                                        href="/results"
                                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
                                    >
                                        <FaTrophy className="text-base sm:text-lg" />
                                        View Results
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes kenBurns {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

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
            `}} />
        </div>
    );
};

export default Slider;

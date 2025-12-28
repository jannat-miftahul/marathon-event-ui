// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
    {
        image: "https://i.ibb.co.com/VDG2tmc/151121-Marathon-01.jpg",
        title: "Run Your Best Race",
        subtitle: "Join thousands of runners worldwide",
    },
    {
        image: "https://i.ibb.co.com/t3zVcPy/i-E2e8-Qm-T5r-U75-D7-RGCs26-1200-80.jpg",
        title: "Push Your Limits",
        subtitle: "Discover marathons near you",
    },
    {
        image: "https://i.ibb.co.com/QbX6wn6/marathon-header.jpg",
        title: "Every Step Counts",
        subtitle: "From first-timers to champions",
    },
    {
        image: "https://i.ibb.co.com/B4G8h3D/sr-lcw-220924-199.jpg",
        title: "Cross The Finish Line",
        subtitle: "Your marathon journey starts here",
    },
];

const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                        <img
                            className="w-full h-full object-cover"
                            src={slide.image}
                            alt={`slide-${index + 1}`}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                                {slide.title}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                            <a
                                href="#about"
                                className="btn btn-primary btn-md sm:btn-lg text-white border-0 shadow-lg hover:scale-105 transition-transform"
                            >
                                Explore Events
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;

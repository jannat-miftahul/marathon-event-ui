// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/VDG2tmc/151121-Marathon-01.jpg"
                        alt="slide-1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/t3zVcPy/i-E2e8-Qm-T5r-U75-D7-RGCs26-1200-80.jpg"
                        alt="slide-2"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/QbX6wn6/marathon-header.jpg"
                        alt="slide-3"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/B4G8h3D/sr-lcw-220924-199.jpg"
                        alt="slide-4"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;

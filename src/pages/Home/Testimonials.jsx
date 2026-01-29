import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaMedal, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mock testimonial data - replace with API data later
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            event: "Boston Marathon 2025",
            rating: 5,
            comment: "This platform made registration so easy! The real-time updates during the race were incredible. Best marathon experience I&apos;ve ever had!",
            position: "1st Place - Women's Division",
            location: "Boston, USA"
        },
        {
            id: 2,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            event: "Tokyo Marathon 2025",
            rating: 5,
            comment: "Amazing organization and user-friendly interface. The training tips helped me achieve my personal best. Highly recommend this platform!",
            position: "Top 10 Finisher",
            location: "Tokyo, Japan"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            event: "London Marathon 2024",
            rating: 5,
            comment: "From registration to race day, everything was seamless. The community support and gallery features made it even more special!",
            position: "2nd Place - Women's Division",
            location: "London, UK"
        },
        {
            id: 4,
            name: "David Thompson",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            event: "New York Marathon 2024",
            rating: 5,
            comment: "The race results were updated instantly, and the analytics dashboard helped me track my progress. This is the future of marathon events!",
            position: "Top 50 Finisher",
            location: "New York, USA"
        },
        {
            id: 5,
            name: "Priya Sharma",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
            event: "Mumbai Marathon 2025",
            rating: 5,
            comment: "First-time marathon runner here! The tips section and event information made me feel prepared and confident. Thank you!",
            position: "Completed Full Marathon",
            location: "Mumbai, India"
        },
        {
            id: 6,
            name: "James Wilson",
            image: "https://randomuser.me/api/portraits/men/6.jpg",
            event: "Berlin Marathon 2024",
            rating: 5,
            comment: "Professional platform with all the features a serious runner needs. The event gallery brought back amazing memories!",
            position: "3rd Place - Men's Division",
            location: "Berlin, Germany"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <div className="relative bg-gradient-to-br from-base-100 via-base-100 to-secondary/5 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '2s' }} />

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-20">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h6 className="text-base sm:text-lg lg:text-xl font-raleway font-bold text-center text-textSecondary mb-2 sm:mb-4 uppercase">
                        Testimonials
                    </h6>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-raleway font-semibold text-center text-textPrimary mb-6 sm:mb-8 lg:mb-10 uppercase px-2">
                        What Runners Say About Us
                    </h3>
                </div>

                {/* Desktop Carousel (3 cards) */}
                <div className="hidden lg:block relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`group relative bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/30 rounded-2xl p-6 sm:p-8 
                                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
                                    ${index === 1 ? 'scale-105 shadow-xl' : 'scale-100'}`}
                                style={{
                                    animation: 'fadeInUp 0.6s ease-out',
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-primary/10 dark:text-primary/20">
                                    <FaQuoteLeft className="text-5xl" />
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-warning text-lg" />
                                    ))}
                                </div>

                                {/* Comment */}
                                <p className="text-base-content/80 dark:text-base-content/90 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                                    &quot;{testimonial.comment}&quot;
                                </p>

                                {/* Event Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
                                    <FaMedal className="text-primary text-sm" />
                                    <span className="text-xs font-semibold text-primary">
                                        {testimonial.event}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent mb-6" />

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-base-100 flex items-center justify-center">
                                            <FaMedal className="text-white text-xs" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base-content text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-base-content/60 dark:text-base-content/70">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-xs text-base-content/50 dark:text-base-content/60">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-base-100 dark:bg-base-100/95 border-2 border-primary/30 rounded-full 
                            flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary 
                            transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-base-100 dark:bg-base-100/95 border-2 border-primary/30 rounded-full 
                            flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary 
                            transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Mobile/Tablet Carousel (1 card) */}
                <div className="lg:hidden relative">
                    <div className="relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`${index === currentIndex ? 'block' : 'hidden'
                                    } bg-base-100 dark:bg-base-100/95 border-2 border-base-300 dark:border-base-300/30 rounded-2xl p-6 sm:p-8 shadow-xl`}
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-primary/10 dark:text-primary/20">
                                    <FaQuoteLeft className="text-4xl sm:text-5xl" />
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-warning text-base sm:text-lg" />
                                    ))}
                                </div>

                                {/* Comment */}
                                <p className="text-base-content/80 dark:text-base-content/90 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                                    &quot;{testimonial.comment}&quot;
                                </p>

                                {/* Event Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
                                    <FaMedal className="text-primary text-sm" />
                                    <span className="text-xs font-semibold text-primary">
                                        {testimonial.event}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent mb-6" />

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-primary/20"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-success rounded-full border-2 border-base-100 flex items-center justify-center">
                                            <FaMedal className="text-white text-xs" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base-content text-base sm:text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-base-content/60 dark:text-base-content/70">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-xs text-base-content/50 dark:text-base-content/60">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons - Mobile */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-base-100 dark:bg-base-100/95 border-2 border-primary/30 rounded-full 
                                flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary 
                                transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-base-content/30 hover:bg-base-content/50'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-base-100 dark:bg-base-100/95 border-2 border-primary/30 rounded-full 
                                flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary 
                                transition-all duration-300 hover:scale-110 shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
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
                `
            }} />
        </div>
    );
};

export default Testimonials;

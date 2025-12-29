import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaRunning,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaHeart,
    FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
    const quickLinks = [
        { to: "/", label: "Home" },
        { to: "/marathons", label: "Marathons" },
        { to: "/gallery", label: "Gallery" },
        { to: "/results", label: "Results" },
    ];

    const supportLinks = [
        { to: "/", label: "About Us" },
        { to: "/", label: "Contact" },
        { to: "/", label: "FAQ" },
        { to: "/", label: "Privacy Policy" },
    ];

    const socialLinks = [
        {
            icon: FaFacebookF,
            href: "#",
            label: "Facebook",
            color: "hover:bg-blue-600",
        },
        {
            icon: FaTwitter,
            href: "#",
            label: "Twitter",
            color: "hover:bg-sky-500",
        },
        {
            icon: FaInstagram,
            href: "#",
            label: "Instagram",
            color: "hover:bg-pink-600",
        },
        {
            icon: FaYoutube,
            href: "#",
            label: "YouTube",
            color: "hover:bg-red-600",
        },
    ];

    return (
        <footer
            id="contact"
            className="relative bg-base-200/50 border-t border-base-300"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 sm:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link
                                to="/"
                                className="flex items-center gap-3 group mb-4"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="relative w-12 h-12 transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl tracking-tight flex items-baseline">
                                        <span className="font-black italic bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent">
                                            Run
                                        </span>
                                        <span className="font-black italic bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                                            Track
                                        </span>
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full ml-0.5"></span>
                                    </h2>
                                    <div className="flex items-center gap-1">
                                        <span className="h-px w-3 bg-gradient-to-r from-secondary to-transparent"></span>
                                        <p className="text-[9px] text-base-content/50 font-semibold tracking-[0.2em] uppercase">
                                            Marathon Events
                                        </p>
                                        <span className="h-px w-3 bg-gradient-to-l from-primary to-transparent"></span>
                                    </div>
                                </div>
                            </Link>
                            <p className="text-sm text-base-content/60 leading-relaxed mb-6">
                                Join thousands of runners in our community.
                                Track your marathons, discover new events, and
                                achieve your running goals with RunTrack.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className={`w-10 h-10 rounded-xl bg-base-300/50 flex items-center justify-center text-base-content/60 transition-all duration-300 hover:text-white ${social.color}`}
                                    >
                                        <social.icon className="text-sm" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-base font-semibold text-base-content mb-4 flex items-center gap-2">
                                <FaRunning className="text-primary" />
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="text-sm text-base-content/60 hover:text-primary transition-colors flex items-center gap-2 group"
                                        >
                                            <FaArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="text-base font-semibold text-base-content mb-4">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="text-sm text-base-content/60 hover:text-primary transition-colors flex items-center gap-2 group"
                                        >
                                            <FaArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-base font-semibold text-base-content mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-primary text-sm" />
                                    </div>
                                    <span className="text-sm text-base-content/60">
                                        123 Running Street,
                                        <br />
                                        Marathon City, MC 12345
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-primary text-sm" />
                                    </div>
                                    <a
                                        href="mailto:info@runtrack.com"
                                        className="text-sm text-base-content/60 hover:text-primary transition-colors"
                                    >
                                        info@runtrack.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-primary text-sm" />
                                    </div>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-sm text-base-content/60 hover:text-primary transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-base-300 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-base-content/50 flex items-center gap-1">
                            &copy; {new Date().getFullYear()} RunTrack. Made
                            with
                            <FaHeart className="text-red-500 text-xs mx-1" />
                            for runners.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                to="/"
                                className="text-xs text-base-content/50 hover:text-primary transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/"
                                className="text-xs text-base-content/50 hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/"
                                className="text-xs text-base-content/50 hover:text-primary transition-colors"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

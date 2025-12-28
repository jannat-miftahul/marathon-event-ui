import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="footer-center bg-background pt-8 sm:pt-10 lg:pt-12 pb-4 px-4 sm:px-6"
        >
            <div className="flex flex-col items-center space-y-2">
                <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                <h1 className="text-xl sm:text-2xl font-raleway font-bold">RunTrack</h1>
                <p className="text-center text-sm sm:text-base max-w-md px-4">
                    This is a brief description of the website. It provides
                    information about the purpose and content of the site.
                </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
                <Link to="/" className="link link-hover text-sm sm:text-base">
                    About us
                </Link>
                <Link to="/" className="link link-hover text-sm sm:text-base">
                    Contact
                </Link>
                <Link to="/marathons" className="link link-hover text-sm sm:text-base">
                    Marathons
                </Link>
            </nav>
            <p className="mt-4 text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} RunTrack. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;

import { NavLink, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import {
    FaSignOutAlt,
    FaUser,
    FaHome,
    FaRunning,
    FaImages,
    FaTrophy,
    FaTachometerAlt,
} from "react-icons/fa";

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleSignout = () => {
        signOutUser()
            .then(() => {
                toast.success("Signed out successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const navItems = [
        { to: "/", label: "Home", icon: FaHome },
        { to: "/marathons", label: "Marathons", icon: FaRunning },
        { to: "/gallery", label: "Gallery", icon: FaImages },
        { to: "/results", label: "Results", icon: FaTrophy },
    ];

    const links = (
        <>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-2 ${isActive
                            ? "text-primary bg-primary/10"
                            : "text-base-content/70 hover:text-primary hover:bg-primary/5"
                        }`
                    }
                >
                    <item.icon className="text-sm" />
                    {item.label}
                </NavLink>
            ))}

            {user && user?.email ? (
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-2 ${isActive
                            ? "text-primary bg-primary/10"
                            : "text-base-content/70 hover:text-primary hover:bg-primary/5"
                        }`
                    }
                >
                    <FaTachometerAlt className="text-sm" />
                    Dashboard
                </NavLink>
            ) : null}
        </>
    );

    return (
        <nav className="sticky top-0 z-50 border-b border-base-200/50 bg-base-100/80 backdrop-blur-xl">
            <div className="navbar max-w-screen-xl mx-auto py-2 px-4 sm:px-6 lg:px-8 xl:px-0">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden p-2 hover:bg-primary/10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6 text-base-content"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 border border-base-200 rounded-2xl z-[10] mt-3 w-56 p-3 shadow-xl space-y-1"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 sm:gap-3 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img
                                src={logo}
                                alt="Logo"
                                className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-base sm:text-lg lg:text-xl tracking-tight flex items-baseline">
                                <span className="font-black italic bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                                    Run
                                </span>
                                <span className="font-black italic bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                                    Track
                                </span>
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full ml-0.5 animate-pulse"></span>
                            </h2>
                            <div className="flex items-center gap-1">
                                <span className="h-px w-4 bg-gradient-to-r from-secondary to-transparent"></span>
                                <span className="text-[9px] text-base-content/50 font-semibold tracking-[0.2em] uppercase hidden sm:block">
                                    Marathon Events
                                </span>
                                <span className="h-px w-4 bg-gradient-to-l from-primary to-transparent hidden sm:block"></span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Navbar Center - Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-1 bg-base-200/50 p-1.5 rounded-xl">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2 sm:gap-3">
                    <ThemeToggle />

                    {user && user?.email ? (
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* User Profile */}
                            <div className="hidden sm:flex items-center gap-3 bg-base-200/50 pl-1 pr-3 py-1 rounded-full">
                                <div className="relative">
                                    <img
                                        src={
                                            user?.photoURL ||
                                            "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                        }
                                        alt="user"
                                        className="w-8 h-8 rounded-full ring-2 ring-primary/20 object-cover"
                                    />
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-base-100 rounded-full" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-semibold text-base-content leading-tight">
                                        {user?.displayName || "User"}
                                    </p>
                                    <p className="text-xs text-base-content/50 leading-tight">
                                        Runner
                                    </p>
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={handleSignout}
                                className="btn btn-sm bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary hover:text-white hover:border-secondary gap-2 transition-all duration-300"
                            >
                                <FaSignOutAlt className="text-sm" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <NavLink
                                to="/auth/signin"
                                className="btn btn-sm btn-ghost text-base-content/70 hover:text-primary hover:bg-primary/10"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to="/auth/register"
                                className="btn btn-sm bg-primary border-primary text-white hover:bg-primary/90 gap-2"
                            >
                                <FaUser className="text-xs" />
                                <span className="hidden sm:inline">
                                    Register
                                </span>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

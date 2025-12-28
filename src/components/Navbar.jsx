import { NavLink, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
// import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

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

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/marathons"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Marathons
            </NavLink>
            <NavLink
                to="/gallery"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Gallery
            </NavLink>
            <NavLink
                to="/results"
                className={({ isActive }) =>
                    `tab text-base ${
                        isActive ? "text-secondary" : "hover:text-secondary"
                    }`
                }
            >
                Results
            </NavLink>

            {user && user?.email ? (
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `tab text-base ${
                            isActive ? "text-secondary" : "hover:text-secondary"
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            ) : null}

            {/* <Link
                to="contact"
                smooth={true}
                duration={500}
                className="tab text-base cursor-pointer hover:text-secondary"
            >
                Contact
            </Link> */}
        </>
    );

    return (
        <nav className="bg-background sticky top-0 backdrop-blur-md bg-opacity-40 z-10">
            <div className="navbar max-w-screen-xl mx-auto py-2 px-4 sm:px-6 lg:px-8 xl:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden p-1 sm:p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow font-medium"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="text-lg sm:text-xl lg:text-2xl text-textPrimary font-bold flex items-center gap-1 sm:gap-2"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
                        />
                        <h2 className="font-raleway text-secondary uppercase text-sm sm:text-base lg:text-xl">
                            Run<span className="text-primary">Track</span>
                        </h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-1 sm:gap-2 lg:gap-4">
                    <ThemeToggle />

                    <div>
                        {user && user?.email ? (
                            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                                <div className="hidden sm:flex flex-col items-center">
                                    <img
                                        src={
                                            user?.photoURL ||
                                            "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                        }
                                        alt="user"
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                                    />
                                    <p className="text-xs sm:text-sm hidden md:block">
                                        {user?.displayName}
                                    </p>
                                </div>

                                <button
                                    onClick={handleSignout}
                                    className="btn btn-outline text-secondary hover:bg-secondary btn-xs sm:btn-sm lg:btn-md"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
                                <NavLink
                                    to="/auth/register"
                                    className="btn btn-outline text-secondary hover:bg-secondary btn-xs sm:btn-sm lg:btn-md"
                                >
                                    Register
                                </NavLink>

                                <NavLink
                                    to="/auth/signin"
                                    className="btn btn-outline text-secondary hover:bg-secondary btn-xs sm:btn-sm lg:btn-md"
                                >
                                    Sign In
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlus, FaTrophy, FaClipboardList, FaRunning } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();

    const navItems = [
        { to: "/dashboard/add-marathon", label: "Add Marathon", icon: FaPlus },
        {
            to: "/dashboard/my-marathons",
            label: "My Marathons",
            icon: FaTrophy,
        },
        {
            to: "/dashboard/my-applies",
            label: "My Applications",
            icon: FaClipboardList,
        },
    ];

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>Dashboard | RunTrack</title>
            </Helmet>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="bg-base-100 border border-base-300 rounded-2xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-24">
                            {/* User Profile Section */}
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-base-300">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName}
                                            className="w-full h-full rounded-xl object-cover"
                                        />
                                    ) : (
                                        <FaRunning className="text-2xl text-white" />
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <h2 className="font-bold text-base-content truncate">
                                        {user?.displayName || "Runner"}
                                    </h2>
                                    <p className="text-sm text-base-content/60 truncate">
                                        {user?.email || "runner@example.com"}
                                    </p>
                                </div>
                            </div>

                            {/* Dashboard Title */}
                            <h1 className="text-lg font-bold text-base-content mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <BiSolidDashboard className="text-primary text-sm" />
                                </span>
                                Dashboard
                            </h1>

                            {/* Navigation Links */}
                            <nav className="space-y-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                                isActive
                                                    ? "bg-primary text-white shadow-md shadow-primary/25"
                                                    : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                                            }`
                                        }
                                    >
                                        <item.icon className="text-lg flex-shrink-0" />
                                        <span className="truncate">
                                            {item.label}
                                        </span>
                                    </NavLink>
                                ))}
                            </nav>

                            {/* Quick Stats */}
                            <div className="mt-6 pt-6 border-t border-base-300">
                                <p className="text-xs text-base-content/50 uppercase tracking-wider mb-3">
                                    Quick Info
                                </p>
                                <div className="bg-base-200/50 rounded-xl p-4">
                                    <p className="text-sm text-base-content/70">
                                        Manage your marathon events and track
                                        your registrations all in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-6 sm:py-8 lg:py-12">
            <Helmet>
                <title>Dashboard | RunTrack</title>
            </Helmet>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10">
                <nav className="nav lg:col-span-2 flex flex-row lg:flex-col gap-2 sm:gap-4 items-center lg:items-start lg:border-r border-b lg:border-b-0 border-gray-500 pb-4 lg:pb-0 font-medium overflow-x-auto">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center lg:text-left whitespace-nowrap">
                        Dashboard
                    </h1>

                    <div className="flex flex-row lg:flex-col gap-2 sm:gap-4">
                        <NavLink
                            to="/dashboard/add-marathon"
                            className={({ isActive }) =>
                                `tab text-sm sm:text-base lg:text-lg p-0 whitespace-nowrap ${
                                    isActive ? "text-secondary" : "hover:text-secondary"
                                }`
                            }
                        >
                            Add Marathon
                        </NavLink>
                        <NavLink
                            to="/dashboard/my-marathons"
                            className={({ isActive }) =>
                                `tab text-sm sm:text-base lg:text-lg p-0 whitespace-nowrap ${
                                    isActive ? "text-secondary" : "hover:text-secondary"
                                }`
                            }
                        >
                            My Marathon List
                        </NavLink>
                        <NavLink
                            to="/dashboard/my-applies"
                            className={({ isActive }) =>
                                `tab text-sm sm:text-base lg:text-lg p-0 whitespace-nowrap ${
                                    isActive ? "text-secondary" : "hover:text-secondary"
                                }`
                            }
                        >
                            My Apply List
                        </NavLink>
                    </div>
                </nav>

                <div className="lg:col-span-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register";
import Signin from "../pages/Auth/Signin";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMarathon from "../pages/Dashboard/AddMarathon";
import MyMarathonList from "../pages/Dashboard/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MarathonDetails from "../pages/Marathon/MarathonDetails";
import MarathonRegister from "../pages/Marathon/MarathonRegister";
import Marathons from "../pages/Marathon/Marathons";
import Gallery from "../pages/Gallery";
import Results from "../pages/Results";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "marathons",
                element: <Marathons />,
            },
            {
                path: "marathons/:id",
                element: <MarathonDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://marathon-event-api.vercel.app/marathons/${params.id}`
                    ),
            },
            {
                path: "marathon-register/:id",
                element: (
                    <PrivateRoute>
                        <MarathonRegister />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://marathon-event-api.vercel.app/marathons/${params.id}`
                    ),
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
            {
                path: "results",
                element: <Results />,
            },
            {
                path: "dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="my-marathons" replace />,
                    },
                    {
                        path: "add-marathon",
                        element: <AddMarathon />,
                    },
                    {
                        path: "my-marathons",
                        element: <MyMarathonList />,
                    },
                    {
                        path: "my-applies",
                        element: <MyApplyList />,
                    },
                ],
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "signin",
                element: <Signin />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default AppRoutes;

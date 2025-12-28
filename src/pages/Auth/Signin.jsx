import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Signin = () => {
    const { signinUser } = useAuth();
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        // console.log(email, password);

        signinUser(email, password)
            .then((userCredential) => {
                // Signed in
                const userData = userCredential.userData;
                console.log(userData);

                const user = { email: email };
                axios
                    .post("https://marathon-event-api.vercel.app/jwt", user, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });

                // setUser(userData);
                toast.success(`Welcome back, ${user?.displayName || "User"}`);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-base-200">
            <Helmet>
                <title>Sign In | RunTrack</title>
            </Helmet>

            <div className="card bg-base-100 shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg shrink-0 rounded-lg p-4 sm:p-6 lg:p-10 border border-base-300">
                <form onSubmit={handleSignin} className="card-body p-2 sm:p-4">
                    <div className="form-control">
                        <h3 className="text-xl sm:text-2xl text-base-content font-raleway font-semibold text-center pb-4">
                            Sign In Now!
                        </h3>

                        {/* email */}
                        <label className="label">
                            <span className="label-text font-semibold text-sm sm:text-base">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold text-sm sm:text-base">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered bg-base-100 text-base-content text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                        {error?.login && (
                            <label className="label text-error text-xs sm:text-sm">
                                {error.login}
                            </label>
                        )}

                        <label className="label">
                            <Link
                                to="/auth/register"
                                className="label-text-alt link link-hover text-xs sm:text-sm text-secondary"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn btn-primary text-primary-content px-6 py-2 rounded-full hover:opacity-90">
                            Sign In
                        </button>

                        {/* sign up with google */}
                        <GoogleLogin />
                    </div>
                </form>
                <p className="text-center text-base-content">
                    Don&apos;t Have An Account?{" "}
                    <Link
                        to="/auth/register"
                        className="text-secondary font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;

import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { FaEnvelope, FaLock, FaRunning } from "react-icons/fa";
import logo from "../../assets/logo.png";

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

        signinUser(email, password)
            .then((userCredential) => {
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

                toast.success(`Welcome back, ${user?.displayName || "User"}`);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex justify-center items-center px-4 py-8 bg-base-200">
            <Helmet>
                <title>Sign In | RunTrack</title>
            </Helmet>

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>
            </div>

            {/* Animated Running Icons - Theme Aware */}
            <div className="absolute top-20 left-10 opacity-5 dark:opacity-10 animate-bounce">
                <FaRunning className="text-9xl text-primary" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-5 dark:opacity-10 animate-pulse">
                <FaRunning className="text-9xl text-secondary" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Branding */}
                <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-6 p-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
                        <img
                            src={logo}
                            alt="RunTrack Logo"
                            className="relative w-48 h-48 object-contain drop-shadow-2xl"
                        />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content drop-shadow-lg">
                        Welcome to <span className="text-primary">RunTrack</span>
                    </h1>
                    <p className="text-xl text-base-content/70 dark:text-base-content/80 max-w-md">
                        Your journey to marathon excellence starts here. Sign in to track your progress and join events worldwide.
                    </p>
                    <div className="flex gap-8 mt-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary">500+</div>
                            <div className="text-sm text-base-content/60 dark:text-base-content/70">Events</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-secondary">10K+</div>
                            <div className="text-sm text-base-content/60 dark:text-base-content/70">Runners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent">50+</div>
                            <div className="text-sm text-base-content/60 dark:text-base-content/70">Countries</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Sign In Form */}
                <div className="w-full">
                    <div className="bg-base-100 dark:bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 lg:p-10 border border-base-300 dark:border-base-300/30 hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4 shadow-lg dark:shadow-primary/30">
                                <FaRunning className="text-3xl text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-base-content mb-2">
                                Sign In
                            </h2>
                            <p className="text-base-content/60 dark:text-base-content/70">
                                Welcome back! Continue your marathon journey
                            </p>
                        </div>

                        <form onSubmit={handleSignin} className="space-y-6">
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaEnvelope className="text-primary" />
                                        Email Address
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 dark:focus:shadow-primary/30"
                                        required
                                    />
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-primary transition-colors" />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaLock className="text-primary" />
                                        Password
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 dark:focus:shadow-primary/30"
                                        required
                                    />
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-primary transition-colors" />
                                </div>
                                {error?.login && (
                                    <label className="label">
                                        <span className="label-text-alt text-error font-medium">
                                            {error.login}
                                        </span>
                                    </label>
                                )}
                                <label className="label justify-end">
                                    <Link
                                        to="/auth/register"
                                        className="label-text-alt link link-hover text-primary dark:text-primary font-medium hover:text-secondary dark:hover:text-secondary transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-8 space-y-4">
                                <button className="btn btn-primary text-white dark:text-primary-content text-lg h-14 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 bg-gradient-to-r from-primary to-secondary border-none">
                                    <FaRunning className="text-xl" />
                                    Sign In to RunTrack
                                </button>

                                {/* Divider */}
                                <div className="divider text-base-content/50 dark:text-base-content/60">OR</div>

                                {/* Google Login */}
                                <GoogleLogin />
                            </div>
                        </form>

                        {/* Sign Up Link */}
                        <div className="mt-8 text-center">
                            <p className="text-base-content/70 dark:text-base-content/80">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/auth/register"
                                    className="text-primary dark:text-primary font-semibold hover:text-secondary dark:hover:text-secondary transition-colors hover:underline"
                                >
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

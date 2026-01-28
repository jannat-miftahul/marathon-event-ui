import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaLock, FaRunning, FaUser, FaImage } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        const name = formData.name.value;
        const photo = formData.photoUrl.value;

        // validate password
        if (!passwordPattern.test(password)) {
            setError({
                password:
                    "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.",
            });
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError({ ...error, general: errorMessage });
                toast.error(errorMessage);
            });
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex justify-center items-center px-4 py-8 bg-base-200">
            <Helmet>
                <title>Register | RunTrack</title>
            </Helmet>

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,88,12,0.05),transparent_50%)]"></div>
            </div>

            {/* Animated Running Icons - Theme Aware */}
            <div className="absolute top-20 right-10 opacity-5 dark:opacity-10 animate-bounce">
                <FaRunning className="text-9xl text-secondary" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-5 dark:opacity-10 animate-pulse">
                <FaRunning className="text-9xl text-primary" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Branding */}
                <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-6 p-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
                        <img
                            src={logo}
                            alt="RunTrack Logo"
                            className="relative w-48 h-48 object-contain drop-shadow-2xl"
                        />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content drop-shadow-lg">
                        Join <span className="text-secondary">RunTrack</span> Community
                    </h1>
                    <p className="text-xl text-base-content/70 dark:text-base-content/80 max-w-md">
                        Start your marathon journey today! Connect with runners worldwide and achieve your fitness goals.
                    </p>
                    <div className="space-y-4 mt-8 w-full max-w-md">
                        <div className="flex items-center gap-4 bg-base-100/70 dark:bg-base-100/50 backdrop-blur-sm rounded-2xl p-4 border border-base-300/50 dark:border-base-300/30">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg dark:shadow-primary/30">
                                <FaRunning className="text-2xl text-white" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-base-content">Track Progress</div>
                                <div className="text-sm text-base-content/60 dark:text-base-content/70">Monitor your marathon journey</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-base-100/70 dark:bg-base-100/50 backdrop-blur-sm rounded-2xl p-4 border border-base-300/50 dark:border-base-300/30">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg dark:shadow-secondary/30">
                                <FaUser className="text-2xl text-white" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-base-content">Join Events</div>
                                <div className="text-sm text-base-content/60 dark:text-base-content/70">Register for global marathons</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Register Form */}
                <div className="w-full">
                    <div className="bg-base-100 dark:bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 lg:p-10 border border-base-300 dark:border-base-300/30 hover:shadow-secondary/10 dark:hover:shadow-secondary/20 transition-all duration-300 max-h-[90vh] overflow-y-auto">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl mb-4 shadow-lg dark:shadow-secondary/30">
                                <FaRunning className="text-3xl text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-base-content mb-2">
                                Create Account
                            </h2>
                            <p className="text-base-content/60 dark:text-base-content/70">
                                Join thousands of runners worldwide
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-5">
                            {/* Full Name Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaUser className="text-secondary" />
                                        Full Name
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 dark:focus:shadow-secondary/30"
                                        required
                                    />
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-secondary transition-colors" />
                                </div>
                                {error.name && (
                                    <label className="label">
                                        <span className="label-text-alt text-error font-medium">
                                            {error.name}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Photo URL Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaImage className="text-secondary" />
                                        Photo URL
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="url"
                                        name="photoUrl"
                                        placeholder="Enter your photo URL"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 dark:focus:shadow-secondary/30"
                                        required
                                    />
                                    <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-secondary transition-colors" />
                                </div>
                                {error.photoUrl && (
                                    <label className="label">
                                        <span className="label-text-alt text-error font-medium">
                                            {error.photoUrl}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaEnvelope className="text-secondary" />
                                        Email Address
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 dark:focus:shadow-secondary/30"
                                        required
                                    />
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-secondary transition-colors" />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2 text-base-content">
                                        <FaLock className="text-secondary" />
                                        Password
                                    </span>
                                </label>
                                <div className="relative group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create a strong password"
                                        className="input input-bordered w-full bg-base-200 dark:bg-base-200/50 focus:bg-base-100 dark:focus:bg-base-100 text-base-content transition-all duration-300 pl-12 border-2 border-base-300 dark:border-base-300/50 focus:border-secondary focus:shadow-lg focus:shadow-secondary/20 dark:focus:shadow-secondary/30"
                                        required
                                    />
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 dark:text-base-content/50 group-focus-within:text-secondary transition-colors" />
                                </div>
                                {error.password && (
                                    <p className="text-error text-sm mt-2 font-medium">
                                        {error.password}
                                    </p>
                                )}
                                <label className="label">
                                    <span className="label-text-alt text-base-content/60 dark:text-base-content/70">
                                        Must be 6+ characters with uppercase & lowercase
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-8 space-y-4">
                                <button className="btn btn-secondary text-white dark:text-secondary-content text-lg h-14 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 bg-gradient-to-r from-secondary to-primary border-none">
                                    <FaRunning className="text-xl" />
                                    Create RunTrack Account
                                </button>

                                {/* Divider */}
                                <div className="divider text-base-content/50 dark:text-base-content/60">OR</div>

                                {/* Google Login */}
                                <GoogleLogin />
                            </div>
                        </form>

                        {/* Sign In Link */}
                        <div className="mt-8 text-center">
                            <p className="text-base-content/70 dark:text-base-content/80">
                                Already have an account?{" "}
                                <Link
                                    to="/auth/signin"
                                    className="text-secondary dark:text-secondary font-semibold hover:text-primary dark:hover:text-primary transition-colors hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { TbMoonStars } from "react-icons/tb";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-all duration-300 hover:scale-105 border border-base-300"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <span className={`absolute transition-all duration-300 ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <TbMoonStars className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </span>
            <span className={`absolute transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
                <MdOutlineWbSunny className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            </span>
        </button>
    );
};

export default ThemeToggle;

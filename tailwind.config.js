import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                backgroundDark: "var(--background-dark)",
                textPrimary: "var(--text-primary)",
                textSecondary: "var(--text-secondary)",
                textGray: "var(--text-gray)",
            },

            fontFamily: {
                nunito: ["Nunito", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    // Main brand colors - vibrant greens for marathon/running theme
                    primary: "#16a34a", // Vibrant green
                    "primary-content": "#ffffff",
                    secondary: "#ea580c", // Warm orange for CTAs
                    "secondary-content": "#ffffff",
                    accent: "#22c55e", // Light green accent
                    "accent-content": "#ffffff",

                    // Neutral & base colors
                    neutral: "#374151",
                    "neutral-content": "#f9fafb",
                    "base-100": "#ffffff", // Main background
                    "base-200": "#f3f4f6", // Secondary background
                    "base-300": "#e5e7eb", // Tertiary background
                    "base-content": "#1f2937", // Main text

                    // Semantic colors
                    info: "#3b82f6",
                    success: "#22c55e",
                    warning: "#f59e0b",
                    error: "#ef4444",

                    // Custom CSS variables for extended colors
                    "--background": "#f8faf8",
                    "--background-dark": "#e8f5e9",
                    "--text-primary": "#1f2937",
                    "--text-secondary": "#6b7280",
                    "--text-gray": "#9ca3af",

                    // Rounded corners
                    "--rounded-box": "0.75rem",
                    "--rounded-btn": "0.5rem",
                },
            },
            {
                dark: {
                    // Main brand colors - adjusted for dark mode visibility
                    primary: "#22c55e", // Brighter green for dark bg
                    "primary-content": "#052e16",
                    secondary: "#fb923c", // Brighter orange
                    "secondary-content": "#431407",
                    accent: "#4ade80", // Light green accent
                    "accent-content": "#052e16",

                    // Neutral & base colors
                    neutral: "#1f2937",
                    "neutral-content": "#d1d5db",
                    "base-100": "#111827", // Main background (darker)
                    "base-200": "#1f2937", // Secondary background
                    "base-300": "#374151", // Tertiary background
                    "base-content": "#f3f4f6", // Main text

                    // Semantic colors
                    info: "#60a5fa",
                    success: "#4ade80",
                    warning: "#fbbf24",
                    error: "#f87171",

                    // Custom CSS variables for extended colors
                    "--background": "#111827",
                    "--background-dark": "#0d1117",
                    "--text-primary": "#f3f4f6",
                    "--text-secondary": "#9ca3af",
                    "--text-gray": "#6b7280",

                    // Rounded corners
                    "--rounded-box": "0.75rem",
                    "--rounded-btn": "0.5rem",
                },
            },
        ],
    },
};

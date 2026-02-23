/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0D0D0D",
                accent: "#0F3D2E",
                highlight: "#C6A75E",
                luxury: "#F5F5F5",
            },
            fontFamily: {
                heading: ["Playfair Display", "serif"],
                body: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
}

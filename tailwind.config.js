/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Figma-based brand palette
        accent: "#7E22CE", // violet accent
        peach: "#f7ebe2",  // warm background tone
        cream: "#fdf9f3",  // light cream sections
        dark: "#2c2c2c",   // dark text
        graylight: "#9ca3af", // subtle gray text
      },
      backgroundImage: {
        // for subtle mandala pattern or hero gradients
        pattern: "url('/src/assets/mandala.jpg')",
        gradient: "linear-gradient(135deg, #f7ebe2 0%, #fdf9f3 100%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(126, 34, 206, 0.2)",
      },
      animation: {
        pulseSlow: "pulse 3s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

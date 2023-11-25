/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      keyframes: {
        ping: {
          "75%,100%": {
            transform: "scale(1.3)",
            opacity: "0",
          },
        },
      },

      animation: {
        ripple: "ripple 2s cubic-bezier(0.65, 0, 0.34, 1) infinite",
        winggle: "ping 2s cubic-bezier(0.65, 0, 0.34, 1) infinite",
      },
    },
  },
  // plugins: [require("daisyui"), require("tailgrids/plugin")],
};

/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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

      colors: {
        primary: {
          light: "#f4f7fe",
          default: "#4318ff",
          dark: "#152c70",
        },
        gray: {
          light: "#a3aed0",
          default: "#707EAE",
          dark: "#818E9B",
        },
        border: "#E9EDF7",
        button: "#3965FF",
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require("tailgrids/plugin")],
};

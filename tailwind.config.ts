import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        widget: "0 8px 32px 0 hsla(0, 0%, 0%, 0.1)",
      },
      backgroundImage: {
        "starry-night-mobile": `
          radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0.05)),
          linear-gradient(135deg, #121A2E 0%, #1A2540 20%, #223050 40%, #2A3B60 60%, #324570 80%, #3A5080 100%)
        `,
        "starry-night-desktop": `
          radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0.05)),
          radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0.05)),
          radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0.05)),
          linear-gradient(135deg, #121A2E 0%, #1A2540 20%, #223050 40%, #2A3B60 60%, #324570 80%, #3A5080 100%)
        `,
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        drop: "drop 350ms infinite",
        float: "float 3s ease-in-out  infinite",
        "twinkle-mobile": "twinkle-mobile 10s ease-in-out infinite alternate",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        drop: {
          "50%": { height: "45px", opacity: "0" },
          "51%": { opacity: "0" },
          "100%": { height: "1px", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "twinkle-mobile": {
          to: {
            "background-position": "-50px -50px, 0 0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

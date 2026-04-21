/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bynd: {
          orange: {
            DEFAULT: "#FF5F0F",
            50: "#FFF5EF",
            100: "#FFE6D5",
            200: "#FFC8A6",
            300: "#FFA56E",
            400: "#FF823A",
            500: "#FF5F0F",
            600: "#E64F00",
            700: "#BF4200",
            800: "#993500",
            900: "#7A2A00",
          },
          black: {
            DEFAULT: "#1D1D1B",
            50: "#E9E9E9",
            100: "#D2D2D2",
            200: "#A5A5A5",
            300: "#787878",
            400: "#4B4B4B",
            500: "#1D1D1B",
            600: "#1A1A18",
            700: "#161614",
            800: "#121210",
            900: "#0F0F0D",
          },
          paper: {
            DEFAULT: "#F4F3E6", // Base
            light: "#F9F8F2",
            dark: "#E8E6D3",
            darker: "#DAD7BF",
          },
        },
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        logo: ["var(--font-hubot-sans)", "sans-serif"],
        heading: ["var(--font-titillium-web)", "sans-serif"],
        body: ["var(--font-goudy-old-style)", "serif"],
        signature: ["var(--font-lavishly-yours)", "cursive"],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-1": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.25" }],
        "heading-3": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3" }],
        "body-lg": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        signature: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1" }],
      },
      spacing: {
        "section-sm": "clamp(2rem, 5vw, 4rem)",
        section: "clamp(4rem, 10vw, 8rem)",
        "section-lg": "clamp(6rem, 15vw, 12rem)",
      },
      boxShadow: {
        card: "0 10px 40px -15px rgba(29, 29, 27, 0.1)",
        "card-hover": "0 20px 60px -20px rgba(29, 29, 27, 0.15)",
        photo: "0 20px 80px -20px rgba(29, 29, 27, 0.25)",
        btn: "0 4px 14px 0 rgba(255, 95, 15, 0.39)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        snap: "cubic-bezier(0, 1, 0, 1)",
      },
    },
  },
  plugins: [],
};

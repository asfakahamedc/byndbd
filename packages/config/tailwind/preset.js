/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bynd: {
          // PRIMARY PALETTE
          flame: {
            DEFAULT: "#FF5F0F",
            light: "#FF7A3D",
            pale: "#FF9D71",
            deep: "#C24B0A",
            darker: "#B83D08",
          },
          amber: "#E8A830",
          gold: "#F0C060",
          wheat: "#F5DFA0",
          
          // NEUTRAL PALETTE
          ink: "#1D1D1B",
          charcoal: "#2A1510",
          stone: "#4A4A48",
          pewter: "#5E5E5C",
          ash: "#7A7A78",
          silver: "#A1A1A0",
          mist: "#C8C8C7",
          border: "#D9D8C3",

          // SURFACE PALETTE
          cream: "#FAF9F2",
          parchment: "#F4F3E6",
          linen: "#E8E7D4",
          ivory: "#FFFAF0",
          blush: "#FFE4D4",
          peach: "#FFC5A8",
          
          // Legacy aliases to prevent breaking existing classes
          orange: {
            DEFAULT: "#FF5F0F",
            500: "#FF5F0F",
            600: "#FF7A3D",
            700: "#C24B0A",
            400: "#FF9D71",
          },
          black: {
            DEFAULT: "#1D1D1B",
            900: "#1D1D1B",
            800: "#2A1510",
          },
          paper: {
            DEFAULT: "#FAF9F2",
            dark: "#F4F3E6",
          }
        },
      },
      fontFamily: {
        heading: ["var(--font-titillium-web)", "sans-serif"],
        display: ["var(--font-cormorant-garamond)", "serif"],
        body: ["var(--font-cormorant-garamond)", "serif"], // Reskin rules use Display for body prose
        signature: ["var(--font-lavishly-yours)", "cursive"],
      },
      fontSize: {
        "label-micro": ["11px", { lineHeight: "1", letterSpacing: "0.25em", fontWeight: "700" }],
      },
      boxShadow: {
        "soft": "0 2px 8px rgba(0,0,0,0.06)",
        "card": "0 4px 20px rgba(0,0,0,0.08)",
        "elevated": "0 8px 40px rgba(0,0,0,0.10)",
        "heavy": "0 12px 40px rgba(0,0,0,0.20)",
        "flame": "0 4px 15px rgba(255,95,15,0.30)",
        "flame-lg": "0 8px 25px rgba(255,95,15,0.45)",
        "dark-btn": "0 4px 20px rgba(42,21,16,0.40)",
      },
      borderRadius: {
        'btn': '2px',
        'card': '4px',
        'panel': '6px',
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif", ...defaultTheme.fontFamily.sans],
        "dm-mono": ["'DM Mono', monospace", ...defaultTheme.fontFamily.mono],
        "noto-sans-display": ["'Noto Sans Display', sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: "#6366f1",
        blue: "#519df3",
        "light-gray": "#f1f5f9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

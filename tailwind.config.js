module.exports = {
  darkMode: "class",
  content: ["./index.html", "./personalize-news.html"],
  theme: {
    extend: {
      screens: {
        lmd: "843px",
        ssm: "618px",
      },
      colors: {
        "pmr-color": "#5677AC",
        "pmr-color-opc-15": "#e6ebf3",
        "gray-color": "#333333",
        "light-gray-color": "#616161",
        "extra-gray-color": "#121212",
        "medium-gray-color": "#E6EBF3",
      },
      fontSize: {
        "5xl": "40px",
      },
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};

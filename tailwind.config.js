module.exports = {
  darkMode : "class",
  content: ["./src/**/*.{html, js}", "./public/*.html"],
  colors: {
    "my-gray" : "#555"
  },
  theme: {
    extend: {
      screens: {
        sm : "480px",
        md : "768px",
        lg : "1024px",
        xl : "1280px",
        

      },
      spacing: {
        "big" : "40rem"
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
}


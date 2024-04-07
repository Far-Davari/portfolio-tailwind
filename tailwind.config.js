module.exports = {
  content: ["./src/**/*.{html, js}", "./public/*.html"],
  colors: {
    "my-gray" : "#555"
  },
  theme: {
    extend: {
      screens: {
        "sm" : "480px",
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [],
}


module.exports = {
  content: ["./src/**/*.{html, js}", "./public/*.html"],
  colors: {
    "my-gray" : "#555"
  },
  theme: {
    extend: {
      screens: {
        "sm" : "480px",
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


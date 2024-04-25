const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerItems = document.getElementById("hamburger-items");
const body = document.querySelector("body");
const moonBtn = document.querySelector("#moon-btn");
const hLinks = document.querySelectorAll("#hLink");

hamburgerMenu.addEventListener("click", () => {
  hamburgerItems.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white")
});

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburgerItems.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white")
  });
});

moonBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});


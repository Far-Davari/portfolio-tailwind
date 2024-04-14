const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerItems = document.getElementById("hamburger-items");

hamburgerMenu.addEventListener("click", () => {
  hamburgerItems.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white")
})
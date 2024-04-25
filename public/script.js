const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerItems = document.getElementById("hamburger-items");
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


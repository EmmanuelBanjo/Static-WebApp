document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const greetButton = document.getElementById("greet-btn");
  if (greetButton) {
    greetButton.addEventListener("click", () => {
      alert("Welcome to Emmanuel's Paradise! ❤️😎");
    });
  }
});
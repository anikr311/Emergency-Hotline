document.getElementById("menu-btn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");

  const isExpanded = !mobileMenu.classList.contains("hidden");
  this.setAttribute("aria-expanded", isExpanded ? "true" : "false");
});

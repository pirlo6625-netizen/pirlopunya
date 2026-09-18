// PIRLOFIG — main.js
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");

  if (menu && links) {
    menu.addEventListener("click", () => {
      links.classList.toggle("mobile");
      menu.setAttribute("aria-expanded", links.classList.contains("mobile"));
    });

    links.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => links.classList.remove("mobile"));
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

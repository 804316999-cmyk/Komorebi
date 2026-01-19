const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mainMenu");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

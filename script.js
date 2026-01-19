const toggle = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// close menu after clicking a link (mobile)
nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

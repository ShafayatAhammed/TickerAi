const smallNavbarToggler = document.getElementsByClassName("sm-nav-toggler")[0];
const smallNavbar = document.getElementsByClassName("sm-nav")[0];
const html = document.getElementById("html");
const themeToggler1 = document.getElementsByClassName("theme-toggler")[0];
const themeToggler2 = document.getElementsByClassName("theme-toggler")[1];

themeToggler1.addEventListener("click", () => {
  html.classList.toggle("dark");
});

themeToggler2.addEventListener("click", () => {
  html.classList.toggle("dark");
});

const toggleSmallNavbar = () => {
  smallNavbar.classList.toggle("hidden");
};

const smallNavbarBigToggler = () => {
  if (window.innerWidth > 842 && !smallNavbar.classList.contains("hidden")) {
    smallNavbar.classList.add("hidden");
  }
};

window.addEventListener("load", () => {
  window.addEventListener("resize", smallNavbarBigToggler);
});

smallNavbarToggler.addEventListener("click", toggleSmallNavbar);

const check = document.getElementById("check");
const menu = document.querySelector(".menu-list");

check.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const navList = document.getElementById("nav-list");

const menuBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

const menuHandler = (event) => {
  navList.classList.toggle("hidden");
  //   navList.classList.toggle("translate-x-full");
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
};

menuBtn.addEventListener("click", menuHandler);
closeBtn.addEventListener("click", menuHandler);

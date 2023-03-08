// Navigation menu
const humb = document.querySelector("#humb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#header__items").cloneNode(1);
const logo = document.querySelector("#logo").cloneNode(1);
const body = document.body;

humb.addEventListener("click", humbHendler);

function humbHendler(e) {
  e.preventDefault();
  popup.classList.toggle("active");
  humb.classList.toggle("active");
  body.classList.toggle("noscroll");
  addMenu();
}

function addMenu() {
  popup.prepend(logo);
  popup.append(menu);
}

menu.addEventListener("click", (event) => {
  if (event.target.dataset.gone === "menu-link") {
    humb.classList.contains("active");
    humb.classList.remove("active");
    popup.classList.remove("active");
    body.classList.remove("noscroll");
  }
});

// Accordion
const boxes = Array.from(document.querySelectorAll(".accordion__box"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHundler);
});

function boxHundler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".accordion__box");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("accordion__active");
  if (currentBox.classList.contains("accordion__active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}
// Animation of page
AOS.init({ disable: "mobile" });

// Anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// ScrollTop
const scrollTop = document.querySelector(".arrow-show");

scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTop.classList.remove("arrow-show_hide");
  } else {
    scrollTop.classList.add("arrow-show_hide");
  }
});

// Mode
const themeSwitchers = document.querySelectorAll(".mode_img");

themeSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    applyMode(this.dataset.mode);
    localStorage.setItem("theme", this.dataset.mode);
  });
});

function applyMode(modeName) {
  let modeUrl = `css/${modeName}.css`;
  document.querySelector('[title="theme"]').setAttribute("href", modeUrl);
}

let activeTheme = localStorage.getItem("theme");

if (activeTheme === null) {
  applyMode("light");
} else {
  applyMode(activeTheme);
}
// Swiper

new Swiper(".customers", {
  slidesPerView: 1,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  }
});
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
// Slider
const sliderLine = document.querySelector(".women-slider__line"),
  nextBtn = document.querySelector(".women-btn__next"),
  prevBtn = document.querySelector(".women-btn__prev"),
  dots = document.querySelectorAll(".women-dot");

let position = 0,
  dotIndex = 0;

const nextSlide = () => {
  if (position < (dots.length - 1) * 120) {
    position += 120;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }
  sliderLine.style.left = -position + "px";
  dotSlide(dotIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= 120;
    dotIndex--;
  } else {
    position = (dots.length - 1) * 120;
    dotIndex = dots.length - 1;
  }
  sliderLine.style.left = -position + "px";
  dotSlide(dotIndex);
};

const dotSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("dot_active");
  }
  dots[index].classList.add("dot_active");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 120 * index;
    sliderLine.style.left = -position + "px";
    dotIndex = index;
    dotSlide(dotIndex);
  });
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(() => {
  nextSlide();
}, 3000);

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

// scrollTop
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
const themeSwitchers = document.querySelectorAll(".mode_img"); //Находим элементы иконок

themeSwitchers.forEach((switcher) => {
  //Перебираем наши иконки через forEach
  switcher.addEventListener("click", function () {
    //По клику присваиваем функцию котороя будет переключать тему согластно атрибута data-theme
    applyMode(this.dataset.mode); // Вызываем ф-цию которая отображает тему согластно CSS стиля
  });
});

function applyMode(modeName) {
  // Создаём функцию котороя отображает тему согластно CSS стиля
  let modeUrl = `css/${modeName}.css`;
  document.querySelector('[title="theme"]').setAttribute("href", modeUrl);
}

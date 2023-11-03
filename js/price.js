import "../globaljs/navbar.js";
import "../globaljs/anime.js";
import "../globaljs/modalSec.js";

// price tab section
const price = document.querySelector(".price");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

price.addEventListener("click", (e) => {
  const element = e.target;
  const id = element.dataset.id;
  const newElement = document.getElementById(id);
  console.log(newElement);

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    element.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    newElement.classList.add("active");
  }
});

// modal form section
const formInput = document.querySelectorAll("input");
const formT = document.querySelector(".form-textarea");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formInput.forEach((input) => {
    input.value = "";
  });
  formT.value = "";
  modal.classList.remove("open-modal");
});

// animate js section
let lastKnownScrollPosition = 0;
let ticking = false;

let singleOneAnimated = false;
let singleTwoAnimated = false;
let footerIntroAnimated = false;
let footerContactsAnimated = false;
let footerNewsletterAnimated = false;

//  view port
const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// do animation

const doAnimation = (scroll) => {
  // about-image section
  const singleOneEl = document.getElementById("singleOne");
  if (isInViewport(singleOneEl) && !singleOneAnimated) {
    singleOneEl.classList.add(
      "animate__animated",
      "animate__fadeInLeft",
      "animate__delay-1s"
    );
    singleOneEl.classList.remove("hide");
    singleOneAnimated = true;
  }

  const singleTwoEl = document.getElementById("singleTwo");
  if (isInViewport(singleTwoEl) && !singleTwoAnimated) {
    singleTwoEl.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-1s"
    );
    singleTwoEl.classList.remove("hide");
    singleTwoAnimated = true;
  }
  // footer(footer intro) section
  const introEl = document.getElementById("footer-intro");
  if (isInViewport(introEl) && !footerIntroAnimated) {
    introEl.classList.add(
      "animate__animated",
      "animate__fadeInLeft",
      "animate__delay-2s"
    );
    introEl.classList.remove("hide");
    footerIntroAnimated = true;
  }
  // footer contact section
  const contactsEl = document.getElementById("footer-contacts");
  if (isInViewport(contactsEl) && !footerContactsAnimated) {
    contactsEl.classList.add(
      "animate__animated",
      "animate__fadeInDown",
      "animate__delay-1s"
    );
    contactsEl.classList.remove("hide");
    footerContactsAnimated = true;
  }
  // footer newletter section
  const newsletterEl = document.getElementById("footer-newslater");
  if (isInViewport(newsletterEl) && !footerNewsletterAnimated) {
    newsletterEl.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-2s"
    );
    newsletterEl.classList.remove("hide");
    footerNewsletterAnimated = true;
  }
};

document.addEventListener("scroll", (e) => {
  e.preventDefault();
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doAnimation(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

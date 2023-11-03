import "../globaljs/navbar.js";
import "../globaljs/anime.js";
import "../globaljs/modalSec.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 340: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 1024: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    display: 2500,
    disableOninteraction: false,
  },
});

// animate js section
let lastKnownScrollPosition = 0;
let ticking = false;

let singleOneAnimated = false;
let singleTwoAnimated = false;
let footerIntroAnimated = false;
let footerContactsAnimated = false;
let footerNewsletterAnimated = false;
let oneAnimated = false;
let twoAnimated = false;

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

  // ul one section
  const ulOneEl = document.getElementById("ulOne");
  if (isInViewport(ulOneEl) && !oneAnimated) {
    ulOneEl.classList.add(
      "animate__animated",
      "animate__fadeInLeft",
      "animate__delay-2s"
    );
    ulOneEl.classList.remove("hide");
    oneAnimated = true;
  }
  // ul two section
  const ulTwoEl = document.getElementById("ulTwo");
  if (isInViewport(ulTwoEl) && !twoAnimated) {
    ulTwoEl.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-2s"
    );
    ulTwoEl.classList.remove("hide");
    twoAnimated = true;
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

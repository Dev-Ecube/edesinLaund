// *****close link*****
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log({ linksHeight, containerHeight });
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// *** Fixed Nav
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // console.log({ scrollHeight, navHeight });

  // setUp back to top link
  if (scrollHeight > 700) {
    // console.log("first")
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// **** smooth scrolling

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // navigate to specific spot
    const id = e.target.dataset.id;
    const element = document.getElementById(id);
    console.log(element);

    // get the height
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains("fixed-nav");
    // const p = element.offsetTop;
    let position = element.offsetTop - navHeight;
    console.log({ navHeight, containerHeight });

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// styling my business title
const textWrapper = document.querySelector(".e3 .letter");
// console.log(textWrapper);

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".e3 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".e3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// const people1 = [
//   {
//     img: "./img/laundry/clothes-4617456_1280.png",
//     title: "product manager",
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
//   },
//   {
//     img: "./img/laundry/clothes-4617456_1280.png",
//     title: "developer",
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
//   },
//   {
//     img: "./img/laundry/daniele-bissoli-u25sfT6lv-Q-unsplash.jpg",
//     title: "designer",
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
//   },
//   {
//     img: "./img/laundry/pxfuel.jpg",
//     title: "designer",
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
//   },
// ];
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

// Modal buttons
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
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
      "animate__delay-3s"
    );
    singleOneEl.classList.remove("hide");
    singleOneAnimated = true;
  }

  const singleTwoEl = document.getElementById("singleTwo");
  if (isInViewport(singleTwoEl) && !singleTwoAnimated) {
    singleTwoEl.classList.add(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-3s"
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
      "animate__delay-4s"
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
      "animate__delay-4s"
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
      "animate__delay-5s"
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
      "animate__delay-5s"
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
      "animate__delay-5s"
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

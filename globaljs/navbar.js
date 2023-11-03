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

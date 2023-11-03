// animation section using animate css

const elements = document.querySelectorAll(".animate-animated");
console.log(elements);

// function to check if the element in the viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      const animation = element.getAttribute("data-animation");
      element.classList.add("animate__animated", `animate__${animation}`);
      element.classList.remove("hide");
    }
  });
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // Initial check when the page loads

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check wen the page loads
handleScroll();

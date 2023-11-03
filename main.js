import "./globaljs/navbar.js";
import "./globaljs/anime.js";
import "./globaljs/modalSec.js";
import "./globaljs/animatecss.js";

import { items } from "./data.js";

const questions = document.querySelector(".questions-center");

questions.innerHTML = items
  .map((item) => {
    // console.log(item);
    return `<article class="question " >
      <div class="question-title " >
        <p>${item.question}</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="${item.class2}"></i>
          </span>
          <span class="minus-icon">
            <i class="${item.class1}"></i>
          </span>
        </button>
      </div>

      <div class="question-text">
        <p>${item.answer}</p>
      </div>
    </article>`;
  })
  .join("");

const qst = document.querySelectorAll(".question");

qst.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  // console.log(btn);

  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");

    qst.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});

// about section
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    console.log(element);
  }
});

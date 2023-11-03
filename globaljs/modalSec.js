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

const formInput = document.querySelectorAll("input");
const formT = document.querySelector(".form-textarea");
const submitBtn = document.querySelector(".submit-btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const form = document.querySelector(".form");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formInput.forEach((input) => {
    input.value = "";
  });
  formT.value = "";
  // modal.classList.remove("open-modal");
});

// show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-row error";
  const small = formControl.querySelector("small");
  console.log(small);
  small.innerText = message;
};
// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkRequired([name, email, number, formT])) {
    checkLength(name, 3, 15);
    checkLength(formT, 6, 25);
    checkLength(number, 6, 25);
    checkEmail(email);
  }
});

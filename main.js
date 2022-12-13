const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const loginButton = document.querySelector(".login-button");
const formWrapper = document.querySelector(".container");
const formHeading = document.querySelector(".form-heading");
const signInText = document.querySelector(".form-heading.sign-in");
const createAccountText = document.querySelector(
  ".form-heading.create-account"
);
let inputs = document.querySelectorAll("form input");

signUpButton.addEventListener("click", () => {
  formWrapper.classList.toggle("right-panel-active");
  formHeading.classList.toggle("show-text");
});

signInButton.addEventListener("click", () => {
  formWrapper.classList.toggle("right-panel-active");
  formHeading.classList.toggle("show-text");
});

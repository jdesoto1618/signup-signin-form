const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const loginButton = document.querySelector(".login-button");
const container = document.querySelector("#container");
const signInText = document.querySelector(".form-heading.sign-in");
const createAccountText = document.querySelector(
  ".form-heading.create-account"
);
let inputs = document.querySelectorAll("form input");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  createAccountText.classList.add("show-text");
  signInText.classList.remove("show-text");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  signInText.classList.add("show-text");
  createAccountText.classList.remove("show-text");
});

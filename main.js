const formButtons = document.querySelectorAll(".overlay-button");
const formWrapper = document.querySelector(".container");
const formHeading = document.querySelector(".form-heading");

formButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formWrapper.classList.toggle("right-panel-active");
    formHeading.classList.toggle("show-text");
  });
});

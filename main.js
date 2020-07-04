const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');
const signInText = document.querySelector('.sign-in-text');
const createAccountText = document.querySelector('.create-account-text');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
  createAccountText.classList.add('show-text');
  signInText.classList.remove('show-text');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
  signInText.classList.add('show-text');
  signInText.style.transitionDelay = '0.35s';
  createAccountText.classList.remove('show-text');
});

window.onload = () => {
  signInText.classList.add('show-text');
}

const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');
const signInText = document.querySelector('.sign-in-text');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active')
);

window.onload = () => {
  console.log(signInText.classList);
  signInText.classList.add('show-sign-in-text');
}

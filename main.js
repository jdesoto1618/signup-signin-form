// store dom objects
var signUpButton  = document.getElementById('signUp');
var signInButton  = document.getElementById('signIn');
var container     = document.getElementById('container');

// sign up button event listener
signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')
);

// sign in button event listener
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active')
);

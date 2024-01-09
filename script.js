const visibilityIconPath = 'images/icon-visibility.svg';
const visibilityOffIconPath = 'images/icon-visibility-off.svg';

const allCancelButtons = document.querySelectorAll('.js-btn-cancel');
const passwordInput = document.querySelector('#input-password');
const passwordIcon = document.querySelector('#input-password ~ button img');
const passwordMessage = document.querySelector('#password-message');
const btnTogglePassword = document.querySelector('.js-btn-password');

function togglePasswordVisibility() {
    if (passwordInput.getAttribute("type") === "text") {
        passwordInput.setAttribute("type", "password");
        passwordIcon.setAttribute("src", visibilityIconPath);
        passwordMessage.textContent = 'show password';
    }
    else {
        passwordInput.setAttribute("type", "text");
        passwordIcon.setAttribute("src", visibilityOffIconPath);
        passwordMessage.textContent = 'hide password';
    }
}

allCancelButtons.forEach( btn => btn.addEventListener('click', ({ target }) => target.previousElementSibling.value = ""));
btnTogglePassword.addEventListener('click', togglePasswordVisibility);
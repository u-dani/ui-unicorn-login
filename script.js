const visibilityIconPath = 'images/icon-visibility.svg';
const visibilityOffIconPath = 'images/icon-visibility-off.svg';

const allCancelButtons = document.querySelectorAll('.js-btn-cancel');
const passwordInput = document.querySelector('#input-password');
const passwordIcon = document.querySelector('.js-btn-password > img');
const btnTogglePassword = document.querySelector('.js-btn-password');

function togglePasswordVisibility() {
    if (passwordInput.getAttribute("type") === "text") {
        passwordInput.setAttribute("type", "password");
        passwordIcon.setAttribute("src", visibilityIconPath);
        btnTogglePassword.setAttribute("aria-checked", "false");
    }
    else {
        passwordInput.setAttribute("type", "text");
        passwordIcon.setAttribute("src", visibilityOffIconPath);
        btnTogglePassword.setAttribute("aria-checked", "true");
    }
}

allCancelButtons.forEach( btn => btn.addEventListener('click', ({ target }) => target.previousElementSibling.value = ""));
btnTogglePassword.addEventListener('click', togglePasswordVisibility);
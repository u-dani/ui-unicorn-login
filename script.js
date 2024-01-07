const visibilityIconPath = 'images/icon-visibility.svg';
const visibilityOffIconPath = 'images/icon-visibility-off.svg';

const passwordInput = document.querySelector('#input-password');
const passwordIcon = document.querySelector('#input-password ~ button img')

const btnCancel = document.querySelector('.js-btn-cancel');
const btnTogglePassword = document.querySelector('.js-btn-password');

function togglePasswordVisibility() {
    if (passwordInput.getAttribute("type") === "text") {
        passwordInput.setAttribute("type", "password");
        passwordIcon.setAttribute("src", visibilityIconPath);
    }
    else {
        passwordInput.setAttribute("type", "text");
        passwordIcon.setAttribute("src", visibilityOffIconPath);
    }
}

btnCancel.addEventListener('click', ({ target }) => target.previousElementSibling.value = "");
btnTogglePassword.addEventListener('click', togglePasswordVisibility);
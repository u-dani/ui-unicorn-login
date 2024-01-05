const visibilityIconPath = 'images/icon-visibility.svg';
const visibilityOffIconPath = 'images/icon-visibility-off.svg';

const inputPassword = document.querySelector('#input-password');
const btnCancel = document.querySelector('.js-btn-cancel');
const btnTogglePassword = document.querySelector('.js-icon-password');

function togglePasswordVisibility({ target }) {
    const input = target.previousElementSibling;
    
    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        target.setAttribute("src", visibilityIconPath);
    }
    else {
        inputPassword.setAttribute("type", "text");
        target.setAttribute("src", visibilityOffIconPath);
    }
}

btnCancel.addEventListener('click', ({ target }) => target.previousElementSibling.value = "");
btnTogglePassword.addEventListener('click', togglePasswordVisibility);
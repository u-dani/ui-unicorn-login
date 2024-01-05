const inputPassword = document.querySelector('#input-password');
const btnCancel = document.querySelector('.js-btn-cancel');
const btnTogglePassword = document.querySelector('.js-icon-password');

btnCancel.addEventListener('click', ({ target }) => target.previousElementSibling.value = "");
btnTogglePassword.addEventListener('click', () => {
    inputPassword.getAttribute("type") === "text"
        ? inputPassword.setAttribute("type", "password")
        : inputPassword.setAttribute("type", "text");
});
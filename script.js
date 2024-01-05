const inputLogin = document.querySelector('#input-login')
const btnCancel = document.querySelector('.js-btn-cancel')

btnCancel.addEventListener('click', ({ target }) => target.previousElementSibling.value = "")
const btnMenu = document.querySelector('.btn-menu')
const menuLateral = document.querySelector('.menu-lateral')

btnMenu.addEventListener('click', function() {
    menuLateral.classList.toggle('ativo')
})
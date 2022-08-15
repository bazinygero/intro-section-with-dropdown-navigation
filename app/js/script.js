const dropdownBtns = document.querySelectorAll('.dropdown-toggle');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        event.preventDefault();
        event.currentTarget.parentElement.classList.toggle('open');
    })
})

const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnImg = document.querySelector('.burger-btn img');
const burgerMenu = document.querySelector('.navbar-container');

burgerBtn.addEventListener('click', event => {
    burgerMenu.classList.toggle('show');

    if (burgerMenu.classList.contains('show')) {
        burgerBtnImg.src = './images/icon-close-menu.svg';
    } else {
        burgerBtnImg.src = './images/icon-menu.svg';
    }
})
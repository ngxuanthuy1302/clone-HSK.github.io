const menu = document.querySelector('.main_header')

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 400) {
        menu.classList.add('scroll')
    }
    else {
        menu.classList.remove('scroll')
    }
});
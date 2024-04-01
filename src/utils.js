
function mobileNav() {
    const openMenuBtn = document.querySelector('.header__menu-bars')
    const closeMenuBtn = document.querySelector('.mobile__close-btn')
    const mobileNav = document.querySelector('.header__nav')
    openMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('nav-visible')
    })
    closeMenuBtn.addEventListener('click', () => {
        mobileNav.classList.remove('nav-visible')
    })
}

function responsiveImg() {
    const img = document.getElementById('front-page-img');
    window.addEventListener('resize', () => {
        if (window.innerWidth < 650) {
            img.src = './assets/images/image-web-3-mobile.jpg';
        } else {
            img.src = './assets/images/image-web-3-desktop.jpg';
        }
    })
}

export { mobileNav, responsiveImg }
// Controll mobile nav
const homeIconBtn = document.getElementById('home-icon');
const iconBtnMobileNav = document.querySelectorAll('.mobile-nav .navbar__item:not(:first-child)');
const formsMobileNav = document.querySelectorAll('.mobile-nav .navbar__form');

iconBtnMobileNav.forEach((iconButton, index) => {
    iconButton.addEventListener('click', () => {
        formsMobileNav.forEach((form, i) => {
            if (i != index) {
                iconBtnMobileNav[i].classList.remove('active');
                form.classList.remove('active');
            }
        });
    
        homeIconBtn.classList.remove('active');
        iconButton.classList.toggle('active');
        formsMobileNav[index].classList.toggle('active');
    });
});
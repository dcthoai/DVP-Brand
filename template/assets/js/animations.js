
const serviceItemButton = document.querySelectorAll('.expertise .service__item .accordion .accordion-button');
const plusRotateIcon = document.querySelectorAll('.expertise .service__item .accordion .plus-rotate-icon');
const circleRotateIcon = document.querySelectorAll('.expertise .service__item .accordion .circle-rotate-icon');

serviceItemButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (serviceItemButton[index].classList.contains('active-custom')){
            serviceItemButton[index].classList.remove('active-custom');
            plusRotateIcon[index].classList.remove('active');
            circleRotateIcon[index].classList.remove('active');
        } else {
            serviceItemButton[index].classList.add('active-custom');
            plusRotateIcon[index].classList.add('active');
            circleRotateIcon[index].classList.add('active');
        }
    })
})
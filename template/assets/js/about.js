
const staffs = document.querySelectorAll('.staff .staff__content .staff__content-item');

staffs.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (staffs[index].classList.contains('active')){
            staffs[index].classList.remove('active');
            staffs[index].classList.remove('plus-rotate-icon-active');
        } else {
            staffs[index].classList.add('active');
            staffs[index].classList.add('plus-rotate-icon-active');
        }
    });
});
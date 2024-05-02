const buttonSelectService = document.getElementById('category-service-button');
const serviceInput = buttonSelectService.querySelector('#service-selected');
const categoryServices = document.getElementById('category-service');
const listServices = categoryServices.querySelectorAll('.services__item');

function openServicesForm(){
    categoryServices.style.display = 'block';
    buttonSelectService.classList.add('plus-rotate-icon-active');

    setTimeout(() => {
        categoryServices.classList.add('active');
    }, 100);
}

function closeServicesForm(){
    categoryServices.classList.remove('active');
    buttonSelectService.classList.remove('plus-rotate-icon-active');

    setTimeout(() => {
        categoryServices.style.display = 'none';
    }, 500);
}

buttonSelectService.addEventListener('click', () => {
    if (buttonSelectService.classList.contains('plus-rotate-icon-active')){
        closeServicesForm();
    } else {
        openServicesForm();
    }
});

listServices.forEach((button, index) => {
    button.addEventListener('click', () => {
        let value = button.innerText.trim();

        serviceInput.innerText = value;
        closeServicesForm();
    });
});
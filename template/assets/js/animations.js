
const serviceItemButton = document.querySelectorAll('.expertise .service__item .accordion .accordion-button');
const plusRotateIcon = document.querySelectorAll('.expertise .service__item .accordion .plus-rotate-icon');
const circleRotateIcon = document.querySelectorAll('.expertise .service__item .accordion .circle-rotate-icon');

serviceItemButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (serviceItemButton[index].classList.contains('active-custom')) {
            serviceItemButton[index].classList.remove('active-custom');
            plusRotateIcon[index].classList.remove('active');
            circleRotateIcon[index].classList.remove('active');
        } else {
            serviceItemButton[index].classList.add('active-custom');
            plusRotateIcon[index].classList.add('active');
            circleRotateIcon[index].classList.add('active');
        }
    })
});

// Animation move partners list by mouse move
const partnersWrapper = document.getElementById('partners-wrapper');
const partnerLinks = document.getElementById('partners-list');
let mouseMoveX = 0;
let isMouseDown = false;
let minMoveX = partnersWrapper.offsetWidth - partnerLinks.offsetWidth;

console.log(minMoveX)

function getCurrentTranslateX(){
    let transformStyle = window.getComputedStyle(partnerLinks).getPropertyValue("transform");

    if (transformStyle && transformStyle !== 'none') {
        let transformMatrix = transformStyle.split('(')[1].split(')')[0].split(',');
        let translateX = parseInt(transformMatrix[4]);
        
        return translateX;
    } else {
        return 0;
    }
}

partnersWrapper.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    mouseMoveX = event.clientX;
});

partnersWrapper.addEventListener("mouseup", function () {
    isMouseDown = false;
});

partnersWrapper.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

partnersWrapper.addEventListener("mousemove", function (e) {
    if(isMouseDown){
        let newMouseMoveX = e.clientX;
        let translateX = newMouseMoveX - mouseMoveX + getCurrentTranslateX();

        if (translateX <= 0 && translateX >= minMoveX) {
            partnerLinks.style.transform = `translateX(${translateX}px)`;
        }
        // Cập nhật giá trị của mouseMoveX
        mouseMoveX = newMouseMoveX;
    }
});
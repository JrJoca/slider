let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.heigth = 
    `${document.querySelector('.slider').clientHeight}px`;
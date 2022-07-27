const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const firstIndex = 0;

let firstSlide, lastSlide;

const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = '';

for ( let i = 0; i < slides.length; i++ ) {
    const src = slides[i];
    
    // creando li
    const liEl = document.createElement('li');
    liEl.className = 'slide';
    if ( i === firstIndex ) {
        liEl.classList.add('active');
    }

    // creando img
    const imgEl = document.createElement('img');
    imgEl.src = src;

    // inseriamo img dentro li
    liEl.append(imgEl);

    // inseriamo li dentro la lista 'slidesWrapperEl'
    slidesWrapperEl.append(liEl);

    // salvo primo li
    if ( i === 0 ) {
        firstSlide = liEl;
    }

    // salvo ultimo li
    if ( i === slides.length - 1 ) {
        lastSlide = liEl;
    }
}

const nextArrowEl = document.querySelector('.arrow-next');

nextArrowEl.addEventListener('click', function() {
    const activeEl = document.querySelector('.slide.active');
    activeEl.classList.remove('active');
    if ( activeEl.nextElementSibling != null ) { // se c'è un elemento successivo lo visualizzo
        const nextLiEl = activeEl.nextElementSibling;
        nextLiEl.classList.add('active');
    } else { // altrimenti visualizzo il primo
        firstSlide.classList.add('active');
    }
});

const prevArrowEl = document.querySelector('.arrow-prev');

prevArrowEl.addEventListener('click', function() {
    const activeEl = document.querySelector('.slide.active');
    activeEl.classList.remove('active');
    if ( activeEl.previousElementSibling != null ) { // se c'è un elemento precedente lo visualizzo
        const prevLiEl = activeEl.previousElementSibling;
        prevLiEl.classList.add('active');
    } else { // altrimenti visualizzo l'ultimo
        lastSlide.classList.add('active');
    }
});
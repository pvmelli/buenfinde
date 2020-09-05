let count = 1;
let automatization = setInterval(automaticSlideshow, 3000);

export function initializeSlideshow() {
    const arrows = document.querySelectorAll('.opinion-arrow');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', changeSlide)
    })

    displaySlide(1);
    window.automatization;
}

function automaticSlideshow() {
    count = count + 1;
    displaySlide(1);
};

function changeSlide(e) {
    const slideDirection = e.target.dataset.arrow;
    count = count + Number(slideDirection);
    displaySlide(Number(slideDirection));

    window.clearInterval(automatization); 
    automatization = setInterval(automaticSlideshow, 3000);
};

function displaySlide(direction) {
    const allSlides = document.querySelectorAll('.opinion-slide');
    allSlides.forEach((slide) => {
        slide.classList.add('not-display');
    });
    accomodateCount(allSlides);

    const selectedSlide = document.querySelector(`.opinion-slide[data-number="${count}"]`);
    selectedSlide.classList.remove('not-display');

    if(direction === 1) {
        selectedSlide.classList.remove('slide-right');
        selectedSlide.classList.add('slide-left');
    } else {
        selectedSlide.classList.remove('slide-left');
        selectedSlide.classList.add('slide-right');
    }

};

function accomodateCount (allSlides) {
    if(count > allSlides.length ) {
        count = 1;
    }
    if(count < 1) {
        count = allSlides.length;
    }
}
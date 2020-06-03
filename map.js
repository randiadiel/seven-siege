const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_btn--right');
const prevButton = document.querySelector('.carousel_btn--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const textTrack = document.querySelector('.text_track');
const texts = Array.from(textTrack.children);



const slideWidth = slides[0].getBoundingClientRect().width;
const textWidth = '600px';

/* texts[0].style.left = 0;
texts[1].style.left = '600px';
texts[2].style.left = '1200px';
texts[3].style.left = '1800px';
texts[4].style.left = '2400px';
texts[5].style.left = '3000px'; */


//console.log(slideWidth);

//arrange slides next to one another
/* slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */

const setSlidePosition =(slide,index) => {
    slide.style.left = slideWidth * index + 'px';
    
};

const setTextPosition =(text,index) =>{
    text.style.left = 600 * index + 'px';
};

slides.forEach(setSlidePosition);
texts.forEach(setTextPosition);

const moveToSlide = (track,currentSlide,targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//switching text when current slide moves
const moveToText = (track,currenText,targetText) => {
    track.style.transform =  'translateX(-'+ targetText.style.left + ')';
    currenText.classList.remove('current-text');
    targetText.classList.add('current-text');
}



const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideRevealArrows = (slides,prevButton,nextButton,targetIndex) =>{
    if (targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
} 


//when click left, move slide to left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentText = textTrack.querySelector('.current-text');
    const prevText = currentText.previousElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToText(textTrack,currentText,prevText);

    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,nextDot);

    hideRevealArrows(slides,prevButton,nextButton,prevIndex)
    
});

//when click right, move slide to right
nextButton.addEventListener('click',e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentText = textTrack.querySelector('.current-text');
    const nextText = currentText.nextElementSibling;
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    
    moveToText(textTrack,currentText,nextText);

    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
    hideRevealArrows(slides,prevButton,nextButton,nextIndex)
});

//when click nav, move slide

dotsNav.addEventListener('click',e =>{
    //what's indicating what was clicked?
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;
    
    const currentText = textTrack.querySelector('.current-text');
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    const targetText = texts[targetIndex];

    moveToText(textTrack,currentText,targetText);
    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);

    hideRevealArrows(slides,prevButton,nextButton,targetIndex);
    
});




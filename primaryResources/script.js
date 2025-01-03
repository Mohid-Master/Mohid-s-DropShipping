let slidesContainer = document.querySelector(".slidesContainer")
function next() {
let slides = document.querySelectorAll(".slides");
    slidesContainer.appendChild(slides[0])
    updateOnclick()
    // console.log("next")
}
function prev(){
    slides = document.querySelectorAll(".slides");
    slidesContainer.prepend(slides[slides.length-1])
    updateOnclick()
    // console.log("prev")


}
function updateOnclick(slides = document.querySelectorAll(".slides")){
    slides.forEach(slide => {
        slide.removeEventListener('click',next)
        slide.removeEventListener('click',prev)
    });
slides[0].addEventListener('click',prev)
slides[1].addEventListener('click',prev)
// slides[2].addEventListener('click',prev)
// slides[1].addEventListener('click',next)
// slides[2].addEventListener('click',next)
// slides[3].addEventListener('click',next)
slides[3].addEventListener('click',next)
slides[4].addEventListener('click',next)
slides[slides.length-1].addEventListener('click',prev)
// slides[slides.length-2].addEventListener('click',next)
// slides[slides.length-3].addEventListener('click',next)
}
updateOnclick()
prev();
prev();
// setInterval(next, 10000);


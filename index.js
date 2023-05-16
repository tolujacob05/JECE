const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressCheck = document.querySelectorAll(".step2 .check");
const bullet = document.querySelectorAll(".step2 .bullet");
const bullet2 = document.querySelectorAll(".step .icon");

let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", function() {
    slidePage.style.marginTop = "-133%"
    bullet[current - 1].classList.add("active");
    bullet2[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function() {
    slidePage.style.marginTop = "-264%"
    bullet[current - 1].classList.add("active");
    bullet2[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function() {
    slidePage.style.marginTop = "-398%"
    bullet[current - 1].classList.add("active");
    bullet2[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnFourth.addEventListener("click", function() {
    slidePage.style.marginTop = "-530%"
    bullet[current - 1].classList.add("active");
    bullet2[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function() {
    bullet[current - 1].classList.add("active");
    bullet2[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        alert("Thanks for your time, we will get back to you shortly");
        location.reload();
    }, 800);
});

prevBtnSec.addEventListener("click", function() {
    slidePage.style.marginTop = "0%"
    bullet[current - 2].classList.remove("active");
    bullet2[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function() {
    slidePage.style.marginTop = "-132%"
    bullet[current - 2].classList.remove("active");
    bullet2[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function() {
    slidePage.style.marginTop = "-265%"
    bullet[current - 2].classList.remove("active");
    bullet2[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFifth.addEventListener("click", function() {
    slidePage.style.marginTop = "-399%"
    bullet[current - 2].classList.remove("active");
    bullet2[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});

const mediaQuery = window.matchMedia("(max-width: 480px)")
if (mediaQuery.matches) {
    firstNextBtn.addEventListener("click", function() {
        slidePage.style.marginTop = "-310%"
    });

    nextBtnSec.addEventListener("click", function(){
        slidePage.style.marginTop = "-82.1rem"
    })

    nextBtnThird.addEventListener("click", function() {
        slidePage.style.marginTop = "-123.1rem"
    })

    nextBtnFourth.addEventListener("click", function(){
        slidePage.style.marginTop = "-164.1rem"
    })


    prevBtnSec.addEventListener("click", function(){
        slidePage.style.marginTop = "15%"
    })

    prevBtnThird.addEventListener("click", function(){
        slidePage.style.marginTop = "-41.1rem"
    })

    prevBtnFourth.addEventListener("click", function(){
        slidePage.style.marginTop = "-82.1rem"
    })

    prevBtnFifth.addEventListener("click", function() {
        slidePage.style.marginTop = "-123.1rem"
    })
}

// const mediaQuery2 = window.matchMedia("(max-width: 1200px)")
// if (mediaQuery2.matches) {
//     firstNextBtn.addEventListener("click", function() {
//         slidePage.style.marginTop = "-280%"
//     });

//     nextBtnSec.addEventListener("click", function(){
//         slidePage.style.marginTop = "-82.1rem"
//     })

//     nextBtnThird.addEventListener("click", function() {
//         slidePage.style.marginTop = "-123.1rem"
//     })

//     nextBtnFourth.addEventListener("click", function(){
//         slidePage.style.marginTop = "-164.1rem"
//     })


//     prevBtnSec.addEventListener("click", function(){
//         slidePage.style.marginTop = "15%"
//     })

//     prevBtnThird.addEventListener("click", function(){
//         slidePage.style.marginTop = "-41.1rem"
//     })

//     prevBtnFourth.addEventListener("click", function(){
//         slidePage.style.marginTop = "-82.1rem"
//     })

//     prevBtnFifth.addEventListener("click", function() {
//         slidePage.style.marginTop = "-123.1rem"
//     })
// }
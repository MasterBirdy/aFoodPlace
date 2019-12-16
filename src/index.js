import gsap from "gsap";
let t1 = gsap.timeline();

const icon = document.querySelector("i");
const nav = document.querySelector("nav");
const list = document.querySelector("ul");
const listings = document.querySelectorAll("li");

const slider = (() => {
     const dots = document.querySelectorAll("#dots span");
     let slideIndex = 1;
     
     function fadeFromSlide(){
          t1.to("#food" + slideIndex, {duration: .85, opacity: 0, ease: "power2.out"});
     }

     function goToSlide(number){
          t1.to("#food" + number, {duration: .85, opacity: 1, ease: "power2.out"}, "-=1");
     }

     function clearCircles(number)
     {
          let array = Array.from(dots);
          for (let i = 0; i < array.length; i++)
          {
            array[i].classList.remove("colored")
          }
          switch (arguments.length){
               case 1:
                   array[number - 1].classList.add("colored");
               break;
           default:
               break;
          }
     }

     function incrementSlide(number)
     {
          fadeFromSlide()
          slideIndex += number;
          slideIndex > 3 ? slideIndex = 1 : slideIndex = slideIndex;
          slideIndex < 1? slideIndex =  3 : slideIndex = slideIndex;
          clearCircles(slideIndex);
          goToSlide(slideIndex);
     }

     function changeSlide(number)
     {
          clearCircles();
          fadeFromSlide();
          slideIndex = number;
          goToSlide(slideIndex);
     }

     return {incrementSlide, changeSlide};
})();

window.showSlides = function(number) {
     slider.incrementSlide(number);
}



document.querySelectorAll("#dots span").forEach(element => {
    element.addEventListener("click", function() {
          let number = parseInt(element.getAttribute("data-number"), 10);
          slider.changeSlide(number);
          element.classList.add("colored");
    }); 
});




document.addEventListener("click", function(e) {
     console.log(e);
});

icon.addEventListener("click", function (){
     nav.classList.toggle("open");
     list.classList.toggle("open");
});

t1.from("h1", {duration: 1.5, x: -300, opacity: 0, ease: "power1.out"}, "+=0.5");
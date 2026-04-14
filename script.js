const dabao = document.querySelector(".toggleTheme");
const lightLogo = document.getElementById("lightLogo");
const darkLogo = document.getElementById("darkLogo");
const themeIcon = document.getElementById("themeIcon");

// Page load hone par theme check karo
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.documentElement.classList.add("dark");
  lightLogo.classList.add("hidden");
  darkLogo.classList.remove("hidden");
  themeIcon.classList.remove("ri-moon-line");
  themeIcon.classList.add("ri-sun-line");
} else {
  document.documentElement.classList.remove("dark");
  lightLogo.classList.remove("hidden");
  darkLogo.classList.add("hidden");
  themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-moon-line");
}

// Button click par theme toggle karo aur localStorage update karo
dabao.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    lightLogo.classList.add("hidden");
    darkLogo.classList.remove("hidden");
    themeIcon.classList.remove("ri-moon-line");
  themeIcon.classList.add("ri-sun-line");
  } else {
    localStorage.setItem("theme", "light");
    lightLogo.classList.remove("hidden");
    darkLogo.classList.add("hidden");
     themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-moon-line");
  }
});


const itemHeader = document.querySelectorAll(".accordion-item-header");
// console.log(itemHeader)

itemHeader.forEach((accordion) => {
    accordion.addEventListener("click", collapseAccordion);

    function collapseAccordion() {
        const activeAccordion = document.querySelector(".accordion-item-header.active");
        if(activeAccordion && activeAccordion !== accordion) {
            activeAccordion.classList.toggle("active");
            activeAccordion.nextElementSibling.style.maxHeight = 0;
        }
        accordion.classList.toggle("active");
        const accordionItemBody = accordion.nextElementSibling;

        if(accordion.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }  else {  
            accordionItemBody.style.maxHeight = 0;
        }


    }
})



// Testimonials 

const slides = document.querySelectorAll("#testim-content .slide");
const dots = document.querySelectorAll("#dots .dot");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let index = 0;
const totalSlides = slides.length;

function showSlide(i) {

  if (i >= totalSlides) index = 0;
  else if (i < 0) index = totalSlides - 1;
  else index = i;

  // hide all slides
  slides.forEach(slide => slide.classList.add("hidden"));

  // reset dots
  dots.forEach(dot => {
    dot.classList.remove("bg-(--text)");
    dot.classList.add("bg-white/30");
  });

  // show current
  slides[index].classList.remove("hidden");

  // active dot
  dots[index].classList.remove("bg-white/30");
  dots[index].classList.add("bg-(--text)");
}

// arrows
rightArrow.addEventListener("click", () => showSlide(index + 1));
leftArrow.addEventListener("click", () => showSlide(index - 1));

// dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// auto slide
setInterval(() => showSlide(index + 1), 4000);

// init
showSlide(0);


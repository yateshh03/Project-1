const dabao = document.querySelector(".toggleTheme");

dabao.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  console.log(dabao)
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



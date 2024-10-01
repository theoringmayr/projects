//Making elements clickable to reveal translations on mobile
const bookContentElement = document.getElementById("book-content");
const bookChildren = bookContentElement.children;

for (const child of bookChildren) {
    console.log(child);
    child.addEventListener("click", () => {
        child.classList.toggle("show");
    } );
}

//Using Slider to set Text Width on Desktop
const widthSlider = document.getElementById("widthSlider");

  widthSlider.addEventListener("input", () => {
  
  for (const child of bookChildren) {
    child.style.gridTemplateColumns = widthSlider.value + "% auto";
  }
});

//Resize Event to Prevent Spill Over, Fix Layout on Resize
window.addEventListener("resize", () => {

    if(window.innerWidth < 992){

        // Set children to template columns 1fr
        for (const child of bookChildren) {
            child.style.gridTemplateColumns = "1fr";
            child.classList.remove("show");
          }

    }
    else{
        // Set children to template columns based on input slider value
        for (const child of bookChildren) {
            child.style.gridTemplateColumns = widthSlider.value + "% auto";
            child.classList.add("show");
          }
    }
});
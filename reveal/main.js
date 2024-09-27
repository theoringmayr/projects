//Listen for clicks on original text
const originalText = document.querySelectorAll(".original");
const simpleText = document.querySelectorAll(".translation");

originalText.forEach(element => {
    element.addEventListener("click", () => {
        // element.nextSibling.classList.add("show");
        console.log(element.nextElementSibling);
        element.nextElementSibling.classList.toggle("show");
    });
});

console.log("siuuuu");
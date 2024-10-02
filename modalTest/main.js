const myModal = document.getElementById("myModal");
const modalBody = document.getElementById("modalBody");

const paragraphs = document.querySelectorAll(".paragraph");

paragraphs.forEach(paragraph => {
  const translationParagraph = paragraph.querySelector(".translation p");
  const originalParagraph = paragraph.querySelector(".original p");

  //Add modal triggers to paragraphs
    translationParagraph.setAttribute("data-bs-toggle", "modal");
    translationParagraph.setAttribute("data-bs-target", "#myModal");

  translationParagraph.addEventListener("click", () => {
    const originalText = originalParagraph.textContent;
    console.log("Original text:", originalText);

    //Add the original paragraph content to Modal Body
    modalBody.innerHTML = originalText;
  });
});
const bodyElement = document.body;

const bodyHeight = bodyElement.offsetHeight;
const leading = 24;

const createGridContainer = document.createElement("div");
createGridContainer.id = "griddy";
bodyElement.appendChild(createGridContainer);

const gridContainer = document.getElementById("griddy");

console.log(gridContainer);

bodyElement.style.position = "relative";

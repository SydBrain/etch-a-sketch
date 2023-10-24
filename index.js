document.addEventListener('DOMContentLoaded', () => {

    generateGrid(16);

    document.getElementById("grid-container").addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "gray";
        }
    });
})

function generateGrid(size) {
    resetGrid();

    const gridContainer = document.getElementById("grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}

function resetGrid() {
    const gridElements = document.querySelectorAll('.grid-item');
    gridElements.forEach(element => element.remove());
}
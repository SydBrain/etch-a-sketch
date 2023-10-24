document.addEventListener('DOMContentLoaded', () => {

    let currentGridSize;
    generateGrid(16);

    // DOM Elements
    const gridContainer = document.querySelector('#grid-container');
    const toyContainer = document.querySelector('.toy-container');
    const eraseButton = document.querySelector('#erase-btn');

    // Event Listeners
    gridContainer.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "gray";
        }

    });

    eraseButton.addEventListener('click', () => {
        const gridElements = document.querySelectorAll('.grid-item');
        gridElements.forEach(element => {
            element.style.backgroundColor = "#fff";
            element.classList.add("erasing");
        });

        toyContainer.classList.add("shaking");
        setTimeout(() => {
            gridElements.forEach(element => element.classList.remove("erasing"));
            toyContainer.classList.remove("shaking");
        }, 500);
    });

    function generateGrid(size) {
        resetGrid();

        currentGridSize = size;
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
})

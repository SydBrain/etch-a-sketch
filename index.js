document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 16;

    const gridContainer = document.querySelector("#grid-container");
    const toyContainer = document.querySelector(".toy-container");
    const eraseButton = document.querySelector("#erase-btn");
    const sizeControls = document.querySelector(".size-controls");

    generateGrid(gridSize);

    // Event Listeners
    gridContainer.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.backgroundColor = "gray";
        }
    });

    eraseButton.addEventListener('click', () => {
        erase();
        shakeToy();
    });
    sizeControls.addEventListener('click', (event) => {
        if (event.target.value) {
            handleSizeSelection(event.target.value)
        }
    });

    // Main Logic
    function generateGrid(size) {
        resetGrid();

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

    function handleSizeSelection(newGridSize) {
        erase();
        generateGrid(newGridSize);
    }

    function erase() {
        const gridElements = document.querySelectorAll('.grid-item');
        gridElements.forEach(element => {
            element.classList.add("erasing");
            element.style.backgroundColor = "#fff";
            setTimeout(() => {
                element.classList.remove("erasing");
            }, 500);
        });
    }

    function shakeToy() {
        toyContainer.classList.add("shaking");
        setTimeout(() => {
            toyContainer.classList.remove("shaking");
        }, 500);
    }
});

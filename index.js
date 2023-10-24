document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 64;
    let colorMode = "classic";
    let isDrawing = false;

    // Constants
    const classicColor = "#707070";
    const randomPalette = ['#EF476F', '#FF5733', '#FFD166', '#33FF57', '#06D6A0', '#118AB2', '#6200EA'];

    // DOM Elements
    const gridContainer = document.querySelector("#grid-container");
    const toyContainer = document.querySelector(".toy-container");
    const sizeControls = document.querySelector(".size-controls");
    const modeControls = document.querySelector(".mode-controls");
    const toyControls = document.querySelector(".toy-controls");

    generateGrid(gridSize);

    // Event Listeners
    gridContainer.addEventListener("mousedown", (event) => {
        isDrawing = true;
    });

    gridContainer.addEventListener("mouseup", (event) => {
        isDrawing = false;
    });

    gridContainer.addEventListener("mouseover", function (event) {
        if (!isDrawing) return;
        if (event.target.classList.contains("grid-item")) {
            if (colorMode === 'classic') {
                event.target.style.backgroundColor = classicColor;
            } else if (colorMode === 'random') {
                const randomColor = Math.floor(Math.random() * randomPalette.length);
                event.target.style.backgroundColor = randomPalette[randomColor];
            }
        };
    });

    toyContainer.addEventListener('click', (event) => {
        if (event.target === toyContainer) {
            erase();
            shakeToy();
        }
    });

    toyControls.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    sizeControls.addEventListener('click', (event) => {
        if (event.target.value) {
            handleSizeSelection(event.target.value)
        }
    });

    modeControls.addEventListener('click', (event) => {
        if (event.target.value) {
            handleModeChange(event.target.value);
        }
    })

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

    function handleModeChange(mode) {
        colorMode = mode;
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

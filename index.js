document.addEventListener('DOMContentLoaded', () => {

    // DOM elements
    const [gridContainer] = ['#grid_container'].map(selector => document.querySelector(selector));

    generateGrid(16, 16);

    function generateGrid(cols, rows) {
        gridContainer.style.setProperty('--grid-rows', rows);
        gridContainer.style.setProperty('--grid-cols', cols);
        for (let c = 0; c < (rows * cols); c++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-item');
            gridContainer.appendChild(cell);
        }
    }
})
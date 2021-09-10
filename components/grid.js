import { createGridCell } from "./grid-cell.js";

function createGrid(width, height) {
    let gridCellContainer = [];

    for (let i = 0; i < width; i++) {
        let gridRow = []
        for (let j = 0; j < height; j++) {
            if (j % 2 === 0) {
                gridRow.push(createGridCell(i*3.01, j*0.02, "red"))
            } else {
                gridRow.push(createGridCell(i*3.01, j*0.02, "yellow"))
            }
        }
        gridCellContainer.push(gridRow);
    }

    return gridCellContainer;
}

export { createGrid }
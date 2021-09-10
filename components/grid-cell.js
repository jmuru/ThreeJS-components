import { PlaneGeometry, MeshStandardMaterial, MathUtils, Mesh } from "../node_modules/three/build/three.module.js";

function createGridCell(gridPositionX, gridPositionY, color)  {

    const geometry = new PlaneGeometry(3, 5);
    const material = new MeshStandardMaterial({ color: color });
    const gridCell = new Mesh(geometry, material);

    gridCell.position.x  = gridPositionX + 10;
    gridCell.position.y = gridPositionY;

    // const degToRadians = MathUtils.degToRad(30);

    gridCell.tick = (delta) => { }

    return gridCell;
}

export { createGridCell };
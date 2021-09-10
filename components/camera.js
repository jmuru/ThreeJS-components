import { PerspectiveCamera } from "../node_modules/three/build/three.module.js"
let maxZPosition = 90;
let minZPosition = 10;

let startXPosition = 0;
let endXPosition = -10;

let startYPosition = -7;
let endYPosition = 200;
function createCamera() {
    const camera = new PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,5000);

    // move the camera back so we can view the scene
    camera.position.set(startXPosition, startYPosition, maxZPosition);

    let tempX = startXPosition;
    let tempY = startYPosition;
    camera.tick = (delta) => {
        if (tempY < endYPosition && tempX > endXPosition) {
            // camera.position.setX(tempX-=0.1)
            // camera.position.setY(tempY+=0.01)
        } else {
            // camera.position.setX(startXPosition)
            // camera.position.setY(startYPosition)
            //
            // tempX = startXPosition;
            // tempY = startYPosition;
        }

    }

    return camera;
}

export { createCamera };
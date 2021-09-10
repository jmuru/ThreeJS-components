import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from "../node_modules/three/build/three.module.js";

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'purple' });
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);

    /*internally this value is being interpreted as 0.01 radians,
    which is roughly half a degree. So, we’re rotating the cube by about half a degree on each axis every frame.
    At sixty frames a second, this means our cube will rotate 60×0.5=30
    each second, or one full rotation around each of the X, Y and Z axes approximately every twelve seconds.*/

    // above ^^^ we can see that based on our assumption of viewing this animation of a 60hz display will yield
    // a 30 degree rotation on each frame but this will change if the frame rate of the display changes. so how to we
    // keep the 30 degree rotation consistent across all different displays?
    //We scale our animation with delta (see animation-loop.js)

    const degToRadians = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        cube.rotation.z += degToRadians * delta;
        cube.rotation.x += degToRadians * delta;
        cube.rotation.y += degToRadians * delta;
    }

    return cube;
}

export { createCube };
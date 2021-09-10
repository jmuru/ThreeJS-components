import { PlaneGeometry, MeshStandardMaterial, MathUtils, Mesh } from "../node_modules/three/build/three.module.js";

function createPlane() {
    const geometry = new PlaneGeometry(2, 2);
    const material = new MeshStandardMaterial({ color: 'red' });
    const plane = new Mesh(geometry, material);

    plane.position.y = -4;

    plane.rotation.set(-0.4, -0.1, 0.8);


    const degToRadians = MathUtils.degToRad(30);

    plane.tick = (delta) => {
        plane.rotation.z += degToRadians * delta;
        plane.rotation.x += degToRadians * delta;
        plane.rotation.y += degToRadians * delta;
    }

    return plane;
}

export { createPlane };
import { BoxBufferGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader, MeshBasicMaterial } from "../node_modules/three/build/three.module.js";

function createImageCube() {
    const geometry = new BoxBufferGeometry(3, 3, 3);
    let imageUrl = "./images/cat1.png";
    let texture = new TextureLoader().load(imageUrl)
    // const material = new MeshStandardMaterial({ color: 'purple' });
    const material = new MeshBasicMaterial({map: texture})
    const imageCube = new Mesh(geometry, material);


    imageCube.rotation.set(-0.5, -0.1, 0.8);

    const degToRadians = MathUtils.degToRad(30);

    imageCube.tick = (delta) => {
        imageCube.rotation.z += degToRadians * delta;
        imageCube.rotation.x += degToRadians * delta;
        imageCube.rotation.y += degToRadians * delta;
    }

    return imageCube;
}

export { createImageCube };
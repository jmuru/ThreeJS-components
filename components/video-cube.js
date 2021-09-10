import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    MathUtils,
    FrontSide,
    VideoTexture,
    MeshBasicMaterial,
    PlaneGeometry
} from "../node_modules/three/build/three.module.js";

function createVideoCube(sourceVideo) {
    const geometry = new BoxBufferGeometry(10, 10, 10);
    let texture = new VideoTexture(sourceVideo);
    // const material = new MeshStandardMaterial({ color: 'purple' });
    const material = new MeshBasicMaterial({map: texture, side: FrontSide, toneMapped: false})
    const videoCube = new Mesh(geometry, material);


    videoCube.rotation.set(-0.1, -0.1, 0.1);

    const degToRadians = MathUtils.degToRad(30);

    videoCube.tick = (delta) => {
        videoCube.rotation.z += degToRadians * delta;
        videoCube.rotation.x += degToRadians * delta;
        videoCube.rotation.y += degToRadians * delta;
    }
    return videoCube;
}

export { createVideoCube };
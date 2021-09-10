import { DirectionalLight } from "../node_modules/three/build/three.module.js";

function createLights() {
    // Create a directional light
    const light = new DirectionalLight('white', 8);

    // move the light right, up, and towards us
    light.position.set(5, 5, 10);

    return light;
}

export { createLights };

import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createPlane } from "./components/plane.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/light.js";
import { createImageCube } from "./components/image-cube.js";
import { createVideoCube } from "./components/video-cube.js"
import { AnimationLoop } from "./system/animation-loop.js";

import { createRenderer } from './system/renderer.js';
import { Resizer } from './system/resizer.js';

let scene;
let camera;
let renderer;
let loop;

class SceneInit {
    constructor(container, opt={}) {
        this.video = opt["video"];
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new AnimationLoop(camera, scene, renderer)
        container.append(renderer.domElement);



        const cube = createCube();
        const imageCube = createImageCube();
        const videoCube = createVideoCube(opt["video"]);
        // const plane = createPlane();
        const lights = createLights();

        // loop.updateComponentList.push(imageCube);
        loop.updateComponentList.push(videoCube);
        // loop.updateComponentList.push(plane);
        loop.updateComponentList.push(camera)

        // scene.add(plane);
        scene.add(videoCube);
        // scene.add(imageCube, lights);

        scene.add(lights);

        const resizer = new Resizer(container, camera, renderer);
        /*
        Now that the loop is running, whenever we resize the window a new frame will be produced on the next iteration of the loop.
        This is fast enough that you won’t notice any delay so we don’t need to manually redraw the scene on resizing anymore.
        */

        // need to call this when rendering static geometry in the scene
        // resizer.onResize = () => {
        //     this.render()
        // };
    }

    render() {
        renderer.render(scene, camera)
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
};

export {SceneInit};
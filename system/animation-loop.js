import { Clock, WebGLRenderer } from "../node_modules/three/build/three.module.js";

const clock = new Clock(); // used to help decouple animation speed from frame rate

class AnimationLoop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updateComponentList = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });

    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        /*by deault three is animating under the assumption that the fram rate of the display in 60Hz i.e. 60 fps,
        but frame rate across different devices can change for example some gaming monitors operate at 240Hz and VR
        usually operates at 90Hz. For the animation to work the same across all possible displays we need to decouple
        the animation speed from the frame rate. In order to do this we’ll scale the size of the movement by how long the previous frame took.
        */

        //.getDelta tells us how much time has passed since the last time we called .getDelta.
        // If we call it once, and only once, at the start of each frame, it will tell us how long the previous frame took
        const delta = clock.getDelta(); // Only call .getDelta once at the very start of a frame!


        /*
        this tick method is used in order to tell each component that will we animated to render their state in the next frame
        theres two methods of thinking you can go about implementing this tick method:
        Centralized: within this tick function you can explicitly alter each component to render its state in the next frame, this approach could work well
        for a small number of geometry components but a drawback is that the Animation loop claas will have to hold specific animation logic for each component
        you want to render (for complex scenes this could be a lot)

        Decentralized: instead of defining all of the different animations per component, you can instead define a tick function on each component class itself
        rather than having all of the logic in the animation class, therefore you would be able to populate a list of components and in this tick function,
        loop through call component.tick() top render to appropriate animation for each component that is self contained by the component
        */

        for (const object of this.updateComponentList) {
            object.tick(delta);
        }
    }
}

export {AnimationLoop};

import {SceneInit} from "./sceneInit.js";

function main() {
    let options = {};
    const container = document.querySelector('#scene-container');
    const video = document.getElementById("video");
    options["video"] = video;
    const sceneInstance = new SceneInit(container, options);

    // sceneInstance.start();
    document.addEventListener("keydown", (event) => {
        if (event.key === "p") {
            sceneInstance.start();
            video.play();
        }

    }, false);


}
main();
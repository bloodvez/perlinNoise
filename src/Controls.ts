import { AbstractRenderer, InteractionManager, Renderer } from "pixi.js";

export class ControlsManager{
    manager: InteractionManager;

    constructor(renderer: Renderer | AbstractRenderer){
        this.manager = renderer.plugins.interaction
    }
}
import { GameObject } from "./GameObject";
import { ControlsManager } from "./Controls";
import { Sprite } from "pixi.js";
import { spriteFromSpritesheet } from "./utils";
import { game } from "./Game";
import { PIXEL_SIZE } from "./Constants";

class Cursor extends GameObject {
  controlsManager: ControlsManager;
  sprite: Sprite;

  constructor(controlsManager: ControlsManager) {
    super();
    this.controlsManager = controlsManager;
    this.sprite = spriteFromSpritesheet("red.png");
    this.sprite.alpha = 0.5;
    game.app.stage.addChild(this.sprite);
  }

  update(): void {
    let points = this.controlsManager.manager.mouse.global;
    let localX = ~~(points.x / PIXEL_SIZE);
    let localY = ~~(points.y / PIXEL_SIZE);
    this.sprite.x = localX * PIXEL_SIZE + PIXEL_SIZE / 2;
    this.sprite.y = localY * PIXEL_SIZE + PIXEL_SIZE / 2;
  }
}

export default Cursor;

import { GameObject } from "./GameObject";
import { ControlsManager } from "./Controls";
import { Sprite } from "pixi.js";
import { spriteFromSpritesheet } from "./utils";
import { game } from "./Game";

class Cursor extends GameObject {
  controlsManager: ControlsManager;
  sprite: Sprite;

  constructor(controlsManager: ControlsManager) {
    super();
    this.controlsManager = controlsManager;
    this.sprite = spriteFromSpritesheet("red.png");
    this.sprite.alpha = 0.5
    game.app.stage.addChild(this.sprite)
  }

  update(): void {
    let points = this.controlsManager.manager.mouse.global
    let localX = (~~(points.x/game.pixelSize))
    let localY = (~~(points.y/game.pixelSize))
    this.sprite.x = localX * game.pixelSize + game.pixelSize / 2
    this.sprite.y = localY * game.pixelSize + game.pixelSize / 2
  }
}

export default Cursor;

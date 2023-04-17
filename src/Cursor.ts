import { GameObject } from "./GameObject";
import { ControlsManager } from "./Controls";
import { Sprite } from "pixi.js";
import { spriteFromSpritesheet } from "./utils";
import { Game, game } from "./Game";

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
    let localX = (~~(points.x/Game.pixelSize))
    let localY = (~~(points.y/Game.pixelSize))
    this.sprite.x = localX * Game.pixelSize + Game.pixelSize / 2
    this.sprite.y = localY * Game.pixelSize + Game.pixelSize / 2
  }
}

export default Cursor;

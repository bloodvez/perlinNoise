import { Sprite } from "pixi.js";
import Entity from "./Entity";
import { Game, game } from "./Game";
import { TileTextures } from "./interfaces";
import { spriteFromSpritesheet, textureFromSpritesheet } from "./utils";

export default class Drawable extends Entity {
  sprite: Sprite;

  constructor(x: number, y: number, texture: TileTextures) {
    super(x, y);
    this.sprite = spriteFromSpritesheet(texture);
    game.app.stage.addChild(this.sprite);
    this.setPos(x, y);
  }

  setTexture(texture: TileTextures) {
    this.sprite.texture = textureFromSpritesheet(texture);
  }

  setRotation(angle: number) {
    this.sprite.rotation = (angle * Math.PI) / 180;
  }

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.sprite.x = this.x * Game.pixelSize + Game.pixelSize / 2;
    this.sprite.y = this.y * Game.pixelSize + Game.pixelSize / 2;
  }

  destroy(): boolean {
    game.app.stage.removeChild(this.sprite);
    this.sprite.destroy();
    return this.sprite.destroyed;
  }
}

import { Sprite } from "pixi.js";
import Entity from "./Entity";
import { game } from "./Game";
import { TileTextures } from "./interfaces";
import { spriteFromSpritesheet, textureFromSpritesheet } from "./utils";
import { PIXEL_SIZE } from "./Constants";

export default class Drawable extends Entity {
  sprite: Sprite;

  constructor(x: number, y: number, texture: TileTextures) {
    super(x, y);
    this.sprite = spriteFromSpritesheet(texture);
    game.gameContainers.get("mainContainer")?.addChild(this.sprite);
    this.setPos(x, y);
  }

  setTexture(texture: TileTextures): void {
    this.sprite.texture = textureFromSpritesheet(texture);
  }

  setRotation(angle: number): void {
    this.sprite.rotation = (angle * Math.PI) / 180;
  }

  setPos(x: number, y: number): void {
    super.setPos(x, y);
    this.sprite.x = this.x * PIXEL_SIZE + PIXEL_SIZE / 2;
    this.sprite.y = this.y * PIXEL_SIZE + PIXEL_SIZE / 2;
  }

  destroy(): void {
    super.destroy();
    game.gameContainers.get("mainContainer")?.removeChild(this.sprite);
    this.sprite.destroy();
  }
}

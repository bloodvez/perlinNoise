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
    this.sprite.x = this.hitbox.position.x;
    this.sprite.y = this.hitbox.position.y;
    game.gameContainers.get("mainContainer")?.addChild(this.sprite);
    this.setPos(x, y);
  }

  setTexture(texture: TileTextures): void {
    this.sprite.texture = textureFromSpritesheet(texture);
  }

  setRotation(angle: number): void {
    this.sprite.rotation = (angle * Math.PI) / 180;
  }

  destroy(): void {
    super.destroy();
    game.gameContainers.get("mainContainer")?.removeChild(this.sprite);
    this.sprite.destroy();
  }

  update(): void {
    this.sprite.x = this.hitbox.position.x;
    this.sprite.y = this.hitbox.position.y;
  }
}

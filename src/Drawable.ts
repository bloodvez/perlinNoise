import { Sprite } from "pixi.js";
import Entity, { bodyTypes } from "./Entity";
import { game } from "./Game";
import { TileTextures } from "./interfaces";
import { spriteFromSpritesheet, textureFromSpritesheet } from "./utils";

export default class Drawable extends Entity {
  sprite: Sprite;

  constructor(
    x: number,
    y: number,
    bodyType: bodyTypes,
    texture: TileTextures
  ) {
    super(x, y, bodyType);
    this.sprite = spriteFromSpritesheet(texture);
    this.sprite.anchor.set(0);
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

  update(delta: number): void {
    this.sprite.x = this.hitbox.position.x;
    this.sprite.y = this.hitbox.position.y;
    // this.sprite.rotation = this.hitbox.angle;
  }
}

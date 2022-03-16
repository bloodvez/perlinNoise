import { Sprite } from "pixi.js";
import { game } from "./Game";
import { GameObject } from "./GameObject";
import { spriteFromSpritesheet, textureFromSpritesheet } from "./utils";

export default class Entity extends GameObject {
  x: number;
  y: number;
  sprite: Sprite;
  health: number;

  constructor(x: number, y: number, texture:string) {
    super();
    this.x = x;
    this.y = y;
    this.sprite = spriteFromSpritesheet(texture);
    this.setPos(x, y);
    // this.sprite.rotation = 0;
    game.app.stage.addChild(this.sprite);
    this.health = 100;
  }

  setTexture(texture: string) {
    this.sprite.texture = textureFromSpritesheet(texture);
  }

  setRotation(angle: number) {
    this.sprite.rotation = (angle * Math.PI) / 180;
  }

  setPos(x: number, y: number) {
    this.x = x;
    this.sprite.x = this.x * game.pixelSize + game.pixelSize / 2;

    this.y = y;
    this.sprite.y = this.y * game.pixelSize + game.pixelSize / 2;
  }

  pickNewPosition() {
    let randX = Math.floor(Math.random() * game.width);
    let randY = Math.floor(Math.random() * game.height);
    this.setPos(randX, randY);
  }

  //   async init() {
  //     // Checking if player spawn position is inside of a wall
  //     // if so, pick new position
  //     this.pickNewPosition();
  //     while (
  //       game.gameMap.mapArr.filter(
  //         (elem) => elem.x === this.x && elem.y === this.y
  //       ).length > 0
  //     ) {
  //       this.pickNewPosition();
  //     }
  //   }
}

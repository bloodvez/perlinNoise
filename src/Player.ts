import { Sprite } from "pixi.js";
import { GameObject } from "./GameObject";
import { spriteFromSpritesheet, textureFromSpritesheet } from "./utils";

// type playerDirection = {
//   x: number;
//   y: number;
//   dir: string;
// };

export default class Player extends GameObject {
  x: number;
  y: number;
  sprite: Sprite;
  //target: any;
  //direction: playerDirection;
  health: number;
  damage: number;
  resources: any;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.sprite = spriteFromSpritesheet("player01.png");
    //this.target = {};
    //this.direction = { x: 0, y: 1, dir: "up" };
    this.health = 100;
    this.damage = 10;
    this.resources = { gold: 0 };

    //document.addEventListener("keydown", (key) => this.onKeyDown(key));
  }

  setTexture(texture: string) {
    this.sprite.texture = textureFromSpritesheet(texture);
  }

  setRotation(angle: number) {
    this.sprite.rotation = (angle * Math.PI) / 180;
  }

  //   pickNewPosition() {
  //     this.x = Math.floor(Math.random() * game.width);
  //     this.sprite.x = this.x * PIXEL_SIZE + PIXEL_SIZE / 2;

  //     this.y = Math.floor(Math.random() * game.height);
  //     this.sprite.y = this.y * PIXEL_SIZE + PIXEL_SIZE / 2;
  //   }

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

  //   whatsInFront() {
  //     this.target = game.gameMap.mapArr.find(
  //       (elem) =>
  //         elem.x === this.x + this.direction.x &&
  //         elem.y === this.y + this.direction.y
  //     );
  //   }

  //   hadleControls(newDir) {
  //     // Find what's in front of a player
  //     this.whatsInFront();
  //     // If it's undefined, that means it's an empty space (most likely)
  //     if (!this.target) {
  //       this.target = {
  //         x: this.x + this.direction.x,
  //         y: this.y + this.direction.y,
  //         passable: true,
  //       };
  //     }
  //     // If the player can walk through it, and the same directional
  //     // button is pressed, then move the player
  //     if (this.target.passable && this.direction.dir === newDir) {
  //       this.sprite.x += this.direction.x * PIXEL_SIZE;
  //       this.x += this.direction.x;

  //       this.sprite.y += this.direction.y * PIXEL_SIZE;
  //       this.y += this.direction.y;

  //       this.direction.dir = newDir;

  //       this.whatsInFront();

  //       game.update();
  //       game.draw();
  //     } else {
  //       // If not, rotate the player
  //       this.direction.dir = newDir;
  //       this.whatsInFront();
  //       game.draw();
  //     }
  //   }

  //   hadleAction() {
  //     if (this.target) {
  //       this.target.health -= 10;
  //       if (this.target.health <= 0) {
  //         if (this.target.resources) {
  //           merge(this.target.resources, this.resources);
  //         }
  //         this.target.destroy();
  //         this.target = undefined;
  //       }
  //       game.update();
  //       game.draw();
  //     }
  //   }

  //   onKeyDown(key) {
  //     switch (key.keyCode) {
  //       case 83: // S
  //         this.direction.x = 0;
  //         this.direction.y = 1;
  //         this.setRotation(180);
  //         this.hadleControls("down");
  //         break;

  //       case 87: // W
  //         this.direction.x = 0;
  //         this.direction.y = -1;
  //         this.setRotation(0);
  //         this.hadleControls("up");
  //         break;

  //       case 68: // D
  //         this.direction.x = 1;
  //         this.direction.y = 0;
  //         this.setRotation(90);
  //         this.hadleControls("right");
  //         break;

  //       case 65: // A
  //         this.direction.x = -1;
  //         this.direction.y = 0;
  //         this.setRotation(270);
  //         this.hadleControls("left");
  //         break;

  //       case 32: // Space
  //         this.hadleAction();
  //         break;
  //       default:
  //         //console.log(key.keyCode);
  //         break;
  //     }
  //   }
}

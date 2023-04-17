import Drawable from "./Drawable";
import Entity from "./Entity";
import { GameObject } from "./GameObject";
import { TileTextures } from "./interfaces";

type playerDirections = "up" | "down" | "left" | "right";

const movementDirection: { current: playerDirections, previous : playerDirections } = {
  current: "up",
  previous: "up"
};

function handleKeyPress(key: KeyboardEvent) {
  switch (key.code) {
    case "KeyW":
      movementDirection.current = "up";
      break;
    case "KeyS":
      movementDirection.current = "down";
      break;
    case "KeyA":
      movementDirection.current = "left";
      break;
    case "KeyD":
      movementDirection.current = "right";
      break;
  }
  if(movementDirection.current !== movementDirection.previous){
    GameObject.update();
  }
}

document.addEventListener("keydown", handleKeyPress);

export default class Player extends Drawable {
  target?: Entity;
  health: number;
  damage: number;
  speed: number;
  // resources: any;
  static currentPlayer: Player | undefined = undefined;
  static addPlayer(x: number, y: number): Player {
    return new Player(x, y, "player01.png");
  }

  constructor(x: number, y: number, texture: TileTextures) {
    super(x, y, texture);
    //this.direction = { x: 0, y: 1, dir: "up" };
    this.health = 100;
    this.damage = 10;
    this.speed = 1;
    // this.resources = { gold: 0 };
    Player.currentPlayer = this;
  }

  update(): void {
    if (movementDirection.current === "up")
      this.setPos(this.x, (this.y -= this.speed));
    if (movementDirection.current === "down")
      this.setPos(this.x, (this.y += this.speed));
    if (movementDirection.current === "right")
      this.setPos((this.x += this.speed), this.y);
    if (movementDirection.current === "left")
      this.setPos((this.x -= this.speed), this.y);
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
}

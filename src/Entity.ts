import { Game, game } from "./Game";
import { GameObject } from "./GameObject";

export default class Entity extends GameObject {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  pickNewPosition() {
    let randX = Math.floor(Math.random() * Game.width);
    let randY = Math.floor(Math.random() * Game.height);
    this.setPos(randX, randY);
  }
}

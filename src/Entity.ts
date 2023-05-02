import { GAME_WIDTH } from "./Constants";
import { GameObject } from "./GameObject";

export default class Entity extends GameObject {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  setPos(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  pickNewPosition(): void {
    let randX = Math.floor(Math.random() * GAME_WIDTH);
    let randY = Math.floor(Math.random() * GAME_WIDTH);
    this.setPos(randX, randY);
  }
}

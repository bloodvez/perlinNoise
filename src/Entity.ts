import { Bodies, Body, Composite } from "matter-js";
import { GAME_HEIGHT, GAME_WIDTH } from "./Constants";
import { GameObject } from "./GameObject";
import { game } from "./Game";

export default class Entity extends GameObject {
  hitbox: Body;

  constructor(x: number, y: number) {
    super();
    const hitbox = Bodies.rectangle(x, y, GAME_WIDTH, GAME_HEIGHT);
    this.hitbox = hitbox;
    Composite.add(game.world, hitbox);
  }

  setPos(x: number, y: number): void {
    this.hitbox.position.x = x;
    this.hitbox.position.y = y;
  }

  pickNewPosition(): void {
    let randX = Math.floor(Math.random() * GAME_WIDTH);
    let randY = Math.floor(Math.random() * GAME_WIDTH);
    this.setPos(randX, randY);
  }
  destroy(): void {
    super.destroy();
    Composite.remove(game.world, this.hitbox);
  }
}

import { Bodies, Body, Composite } from "matter-js";
import { GAME_WIDTH, PIXEL_SIZE } from "./Constants";
import { GameObject } from "./GameObject";
import { game } from "./Game";

export type bodyTypes = "rectangle" | "circle";

export default class Entity extends GameObject {
  hitbox: Body;

  constructor(x: number, y: number, bodyType: bodyTypes) {
    super();
    switch (bodyType) {
      case "rectangle":
        this.hitbox = Bodies.rectangle(x, y, PIXEL_SIZE, PIXEL_SIZE);
        break;
      case "circle":
        this.hitbox = Bodies.circle(x, y, PIXEL_SIZE / 2);
        break;
    }
    this.hitbox.frictionAir = 1;
    Composite.add(game.world, this.hitbox);
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

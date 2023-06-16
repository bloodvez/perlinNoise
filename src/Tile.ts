import { Body } from "matter-js";
import Drawable from "./Drawable";
import { TileTextures } from "./interfaces";

export default class Tile extends Drawable {
  passable: boolean = false;
  constructor(x: number, y: number, texture: TileTextures, passable: boolean) {
    super(x, y, "rectangle", texture);
    Body.setStatic(this.hitbox, true);
    this.passable = passable;
  }

  update(delta: number): void {}
}

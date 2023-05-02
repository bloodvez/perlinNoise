import Drawable from "./Drawable";
import { TileTextures } from "./interfaces";

export default class Tile extends Drawable {
  passable: boolean = false;
  constructor(x: number, y: number, texture: TileTextures, passable: boolean) {
    super(x, y, texture);
    this.passable = passable;
  }
}

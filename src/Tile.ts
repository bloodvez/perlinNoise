import Drawable from "./Drawable";
import { TileTextures } from "./interfaces";

export default class Tile extends Drawable {
    passable : boolean;
    constructor(x: number, y:number, texture:TileTextures) {
      super(x, y, texture);
      this.passable = true;
    }
  }
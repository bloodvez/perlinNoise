import { TileTextures } from "./interfaces";
import Tile from "./Tile";

export default class WallTile extends Tile {
    constructor(x: number, y:number, texture:TileTextures) {
      super(x, y, texture);
      this.passable = false;
    }
  }
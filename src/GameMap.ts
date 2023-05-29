import { GAME_HEIGHT, GAME_WIDTH } from "./Constants";
import Tile from "./Tile";
import { perlin } from "./perlin";

export default class GameMap {
  static collisionMap: Array<Array<null | Tile>> = Array(GAME_WIDTH)
    .fill(null)
    .map(() => Array(GAME_HEIGHT).fill(null));
  // Generate map using perlin noise
  static generateMap(scale = 7.77, multiplier = 70, threshold = 13): void {
    if (scale <= 1) {
      console.log("Scale cannot be lower than 1");
      scale = 1.1;
    }
    console.log(
      `Generating map with scale:${scale}, multiplier:${multiplier}, threshold:${threshold}`
    );

    for (let x = 0; x < GAME_WIDTH; x++) {
      for (let y = 0; y < GAME_HEIGHT; y++) {
        let v = Math.abs(perlin.get(x / scale, y / scale));
        if (v * multiplier >= threshold) {
          const newTile = new Tile(x, y, "wall01.png", false);
          this.collisionMap[x][y] = newTile;
        }
      }
    }
  }
}

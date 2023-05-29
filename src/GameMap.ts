import { GAME_HEIGHT, GAME_WIDTH, PIXEL_SIZE } from "./Constants";
import Tile from "./Tile";
import { perlin } from "./perlin";

export default class GameMap {
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
          new Tile(x * PIXEL_SIZE, y * PIXEL_SIZE, "wall01.png", false);
        }
      }
    }
  }
}

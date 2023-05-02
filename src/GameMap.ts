import { GAME_HEIGHT, GAME_WIDTH } from "./Constants";
import Tile from "./Tile";
import { perlin } from "./perlin";

export default class GameMap {
  static collisionMap: Array<Array<null | Tile>> = Array(GAME_WIDTH)
    .fill(null)
    .map(() => Array(GAME_HEIGHT).fill(null));
  // static collisionMap: boolean[][] = Array(GAME_WIDTH)
  //   .fill(false)
  //   .map(() => Array(GAME_HEIGHT).fill(false));
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
    //this.test(this.mapArr[19])

    // for (let i = 0; i < 10; i++) {
    //   this.addOreBlock();
    // }
  }

  // regenerateMap(scale: number, multiplier: number, threshold: number) {
  //   if (this.mapArr.length !== 0) {
  //     this.mapArr = [];
  //     app.stage.removeChildren();
  //     perlin.seed();
  //     game.addBackground();
  //     this.generateMap(scale, multiplier, threshold);
  //     game.draw();
  //   }
  // }

  // addOreBlock() {
  //   if (this.mapArr.length === 0) return;

  //   let target = this.mapArr[Math.floor(Math.random() * this.mapArr.length)];
  //   target.setTexture("red.png");
  //   target.resources = { gold: Math.floor(Math.random() * 100) };
  // }

  // test(elem) {
  //   let ngbrs = [];
  //   for (let x = -1; x < 2; x++) {
  //     for (let y = -1; y < 2; y++) {
  //       ngbrs.push(
  //         this.mapArr.find(
  //           (search) => search.x === elem.x + x && search.y === elem.y + y
  //         )
  //       );
  //     }
  //   }
  //   console.log(ngbrs);
  // }

  // update(delta: number): void {
  //   this.mapArr.forEach((elem) => {
  //     elem.update(delta);
  //   });
  // }
}

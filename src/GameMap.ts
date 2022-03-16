// import { perlin } from "./perlin";
// import WallTile from "./WallTile";

// export default class GameMap {
//   mapArr: Array<any>;

//   constructor() {
//     this.mapArr = [];
//   }

//   // Generate map using perlin noise
//   async generateMap(scale = 7.77, multiplier = 70, threshold = 13) {
//     if (scale <= 1) {
//       console.log("Scale cannot be lower than 1");
//       scale = 1.1;
//     }
//     console.log(
//       `Generating map with scale:${scale}, multiplier:${multiplier}, threshold:${threshold}`
//     );
//     this.mapArr = [];
//     for (let x = 0; x < game.width; x++) {
//       for (let y = 0; y < game.height; y++) {
//         let v = Math.abs(perlin.get(x / scale, y / scale));
//         if (v * multiplier >= threshold) {
//           //let newTile = game.createGameObject(x, y)
//           this.mapArr.push(new WallTile(x, y));
//         }
//       }
//     }
//     //this.test(this.mapArr[19])

//     // for (let i = 0; i < 10; i++) {
//     //   this.addOreBlock();
//     // }
//   }

//   // regenerateMap(scale: number, multiplier: number, threshold: number) {
//   //   if (this.mapArr.length !== 0) {
//   //     this.mapArr = [];
//   //     app.stage.removeChildren();
//   //     perlin.seed();
//   //     game.addBackground();
//   //     this.generateMap(scale, multiplier, threshold);
//   //     game.draw();
//   //   }
//   // }

//   // addOreBlock() {
//   //   if (this.mapArr.length === 0) return;

//   //   let target = this.mapArr[Math.floor(Math.random() * this.mapArr.length)];
//   //   target.setTexture("red.png");
//   //   target.resources = { gold: Math.floor(Math.random() * 100) };
//   // }

//   // test(elem) {
//   //   let ngbrs = [];
//   //   for (let x = -1; x < 2; x++) {
//   //     for (let y = -1; y < 2; y++) {
//   //       ngbrs.push(
//   //         this.mapArr.find(
//   //           (search) => search.x === elem.x + x && search.y === elem.y + y
//   //         )
//   //       );
//   //     }
//   //   }
//   //   console.log(ngbrs);
//   // }
// }

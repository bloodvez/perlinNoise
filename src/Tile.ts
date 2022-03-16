import Entity from "./Entity";

export default class Tile extends Entity {
    passable : boolean;
    constructor(x: number, y:number, texture:string) {
      super(x, y, texture);
      this.passable = true;
    }
  
    // destroy() {
    //   const idx = game.gameMap.mapArr.indexOf(this);
    //   game.gameMap.mapArr.splice(idx, 1);
    //   app.stage.removeChild(this.sprite);
    //   this.sprite.destroy();
    // }
  }
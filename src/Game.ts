const GAME_WIDTH: number = 32;
const GAME_HEIGHT: number = 24;
const PIXEL_SIZE: number = 24;

import { Application, TilingSprite, Loader } from "pixi.js";
import { ControlsManager } from "./Controls";
import Cursor from "./Cursor";
import { GameObject } from "./GameObject";
import Gui from "./Gui";
// import GameMap from "./GameMap";
import Tile from "./Tile";
import { textureFromSpritesheet } from "./utils";
// import Player from "./Player";
// import { perlin } from "./perlin";

export class Game {
  width: number;
  height: number;
  pixelSize: number;
  // gameMap: GameMap;
  loaded: boolean;
  // player: Player;
  app: Application;
  controlsManager: ControlsManager;
  gui : Gui | undefined

  constructor(width: number, height: number, pixelSize: number) {
    this.width = width;
    this.height = height;
    this.pixelSize = pixelSize;
    const canvas = document.createElement("canvas");
    this.app = new Application({
      view: canvas,
      width: GAME_WIDTH * PIXEL_SIZE,
      height: GAME_HEIGHT * PIXEL_SIZE,
      antialias: false,
    });
    const gameWindow: any = document.getElementById("gameWindow");
    gameWindow.appendChild(this.app.view);

    // this.gameMap = new GameMap();
    this.loaded = false;
    this.controlsManager = new ControlsManager(this.app.renderer);
    this.app.stage.interactive = true;
    this.app.stage.sortableChildren = true;
    this.app.ticker.maxFPS = 16
    this.app.ticker.add(GameObject.update)
    //new Gui(this.app)
  }

  load() {
    this.app.loader.add({
      name: "spritesheet",
      url: "assets/spritesheet.json",
    });
    this.app.loader.load();
    this.app.loader.onComplete.once(() => {
      console.log("Assets loaded");
      // @ts-ignore
      resources = this.app.loader.resources;
      game.init();
    });
  }

  async init() {
    this.addBackground();
    new Tile(0, 0, "red.png");
    new Cursor(this.controlsManager)
    // await this.gameMap.generateMap(7.77, 70, 13);
    // this.player = new Player(0, 0);
    // await this.player.init();
    // this.draw();
    // this.app.ticker.add((delta) => {
    //   this.update(delta);
    // });
  }

  // async addPlayer() {
  //   this.player = new Player(0, 0);
  //   await this.player.init();
  // }

  addBackground() {
    const tilingSprite = new TilingSprite(
      textureFromSpritesheet("floor01.png"),
      this.app.screen.width * this.pixelSize,
      this.app.screen.height * this.pixelSize
    );
    this.app.stage.addChild(tilingSprite);
    tilingSprite.zIndex = -10;
  }

  //   createGameObject(x: number, y: number, app: PIXI.Application) {
  //     return new GameObject(x, y);
  //   }

  //   restart() {
  //     perlin.seed();
  //     this.init();
  //   }

  // update(delta: any) {
  //   this.gameObjects.forEach((elem) => elem.update(delta));
  // }

  // draw() {
  //   Gui.draw()
  // }
}

export const game = new Game(GAME_WIDTH, GAME_HEIGHT, PIXEL_SIZE);

export let resources: Loader["resources"];

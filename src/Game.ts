const GAME_WIDTH: number = 32;
const GAME_HEIGHT: number = 24;
const PIXEL_SIZE: number = 24;

import { Application as PIXIApp, TilingSprite, Loader } from "pixi.js";
import { ControlsManager } from "./Controls";
// import Cursor from "./Cursor";
import GameMap from "./GameMap";
import { GameObject } from "./GameObject";
import Gui from "./Gui";
import { IGame } from "./interfaces";
import Player from "./Player";
// import GameMap from "./GameMap";
import { textureFromSpritesheet } from "./utils";
// import Player from "./Player";
// import { perlin } from "./perlin";

export class Game implements IGame {
  constructor() {
    const gameWindow = document.getElementById("gameWindow");
    if (!gameWindow) throw new Error("no gameWindow div");
    const canvas = document.createElement("canvas");
    this.app = new PIXIApp({
      view: canvas,
      width: GAME_WIDTH * PIXEL_SIZE,
      height: GAME_HEIGHT * PIXEL_SIZE,
      antialias: false,
    });
    gameWindow.appendChild(this.app.view);

    this.gameMap = new GameMap();
    this.loaded = false;
    this.controlsManager = new ControlsManager(this.app.renderer);
    this.app.stage.interactive = true;
    this.app.stage.sortableChildren = true;
    this.app.ticker.maxFPS = 30;
    // this.app.ticker.add(GameObject.update);
    //new Gui(this.app)
  }
  static width: number = GAME_WIDTH;
  static height: number = GAME_HEIGHT;
  static pixelSize: number = PIXEL_SIZE;
  gameMap: GameMap;
  loaded: boolean;
  player?: Player | undefined;
  app: PIXIApp;
  controlsManager: ControlsManager;
  gui?: Gui;

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
    //new Cursor(this.controlsManager)
    // await this.gameMap.generateMap(7.77, 70, 13);
    this.player = Player.addPlayer(1, 10);
    // await this.player.init();
    // this.draw();

    // this.app.ticker.add((delta) => {
    //   GameObject.update(delta);
    // });
  }

  // addPlayer() {
  //   this.player = new Player(10, 5, "player01.png");
  //   // await this.player.init();
  // }

  addBackground() {
    const tilingSprite = new TilingSprite(
      textureFromSpritesheet("floor01.png"),
      this.app.screen.width * Game.pixelSize,
      this.app.screen.height * Game.pixelSize
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

export const game = new Game();

export let resources: Loader["resources"];

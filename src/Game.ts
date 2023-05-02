import { Application as PIXIApp, Loader, Container } from "pixi.js";
import { ControlsManager } from "./Controls";
// import Cursor from "./Cursor";
import Gui from "./Gui";
import { IGame } from "./interfaces";
import Player from "./Player";
import { GAME_HEIGHT, GAME_WIDTH, PIXEL_SIZE } from "./Constants";
import { containerNames, mainContainer } from "./Containers";
import GameMap from "./GameMap";

export class Game implements IGame {
  gameContainers: Map<containerNames, Container> = new Map();
  loaded: boolean = false;
  player?: Player | undefined;
  app: PIXIApp;
  controlsManager: ControlsManager;
  gui?: Gui;

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
    this.controlsManager = new ControlsManager(this.app.renderer);
    this.app.stage.interactive = true;
    this.app.stage.sortableChildren = true;
    this.app.ticker.maxFPS = 30;
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
      this.loaded = true;
      game.init();
    });
  }

  init() {
    const mainGameContainer = mainContainer();
    this.app.stage.addChild(mainGameContainer);
    this.gameContainers.set("mainContainer", mainGameContainer);
    //new Cursor(this.controlsManager)
    GameMap.generateMap();
    this.player = Player.addPlayer(1, 10);

    // this.app.ticker.add((delta) => {
    //   GameObject.update(delta);
    // });
  }

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

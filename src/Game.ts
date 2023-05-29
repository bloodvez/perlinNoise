import { Application as PIXIApp, Loader, Container } from "pixi.js";
import { ControlsManager } from "./Controls";
// import Cursor from "./Cursor";
import Gui from "./Gui";
import { IGame } from "./interfaces";
import Player from "./Player";
import { GAME_HEIGHT, GAME_WIDTH, PIXEL_SIZE } from "./Constants";
import { containerNames, MainContainer, GuiContainer } from "./Containers";
import GameMap from "./GameMap";
import { Engine, World } from "matter-js";
import { GameObject } from "./GameObject";

export class Game implements IGame {
  gameContainers: Map<containerNames, Container> = new Map();
  loaded: boolean = false;
  player?: Player | undefined;
  app: PIXIApp;
  controlsManager: ControlsManager;
  gui?: Gui;
  world: World;

  constructor() {
    // matter
    const engine = Engine.create()
    this.world = engine.world
    engine.gravity.scale = 0;

    //PIXI
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
    this.app.ticker.maxFPS = 60;
    // Use PIXI's ticker to update matter
    this.app.ticker.add((delta) => {
      Engine.update(engine, delta);
      GameObject.update();
    })
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
    const mainGameContainer = MainContainer();
    const guiContainer = GuiContainer()
    this.app.stage.addChild(mainGameContainer, guiContainer);
    this.gameContainers.set("mainContainer", mainGameContainer);
    this.gameContainers.set("giuContainer", guiContainer);
    //new Cursor(this.controlsManager)
    // GameMap.generateMap();
    this.player = Player.addPlayer(100, 100);
  }
}

export const game = new Game();

export let resources: Loader["resources"];

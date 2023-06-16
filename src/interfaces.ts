import GameMap from "./GameMap";
import { Application } from "pixi.js";
import { ControlsManager } from "./Controls";
import Gui from "./Gui";
import Player from "./Player";

export interface IGame {
  gameMap?: GameMap;
  loaded: boolean;
  player?: Player;
  app: Application;
  controlsManager: ControlsManager;
  gui?: Gui;
  load(): void;
  init(): void;
}

export type bodyTypes = "rectangle" | "circle";

export type TileTextures =
  | "blue.png"
  | "floor01.png"
  | "player01.png"
  | "red.png"
  | "wall01.png"
  | "wall02.png"
  | "wall03.png"
  | "wall04.png"
  | "wall05.png"
  | "wall06.png"
  | "wall07.png"
  | "wall08.png";

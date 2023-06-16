import { Body } from "matter-js";
import Drawable from "./Drawable";
import { TileTextures } from "./interfaces";
import { Graphics } from "pixi.js";
import { game } from "./Game";

const playerDirection = {
  up: false,
  down: false,
  left: false,
  right: false,
};

const playerVector: { x: number; y: number } = {
  x: 0,
  y: 0,
};

function handleKeyDown(key: KeyboardEvent) {
  if (key.repeat) return;
  switch (key.code) {
    case "KeyW":
      // playerVector.y -= player.speed * delta;
      playerDirection.up = true;
      break;
    case "KeyS":
      // playerVector.y += player.speed * delta;
      playerDirection.down = true;
      break;
    case "KeyA":
      // playerVector.x -= player.speed * delta;
      playerDirection.left = true;
      break;
    case "KeyD":
      // playerVector.x += player.speed * delta;
      playerDirection.right = true;
      break;
  }
}

function handleKeyUp(key: KeyboardEvent) {
  if (key.repeat) return;
  switch (key.code) {
    case "KeyW":
      playerDirection.up = false;
      break;
    case "KeyS":
      playerDirection.down = false;
      break;
    case "KeyA":
      playerDirection.left = false;
      break;
    case "KeyD":
      playerDirection.right = false;
      break;
  }
}

const pixiGraph = new Graphics();

function handlePhysics(player: Player, delta: number) {
  const vector = { x: 0, y: 0 };
  if (playerDirection.up) vector.y -= player.speed * delta;
  if (playerDirection.down) vector.y += player.speed * delta;
  if (playerDirection.left) vector.x -= player.speed * delta;
  if (playerDirection.right) vector.x += player.speed * delta;

  Body.applyForce(player.hitbox, player.hitbox.position, vector);
}

export default class Player extends Drawable {
  health: number;
  speed: number = 0.2;
  static currentPlayer: Player | undefined = undefined;
  static addPlayer(x: number, y: number): Player {
    return new Player(x, y, "player01.png");
  }

  constructor(x: number, y: number, texture: TileTextures) {
    super(x, y, "circle", texture);
    this.health = 100;
    Player.currentPlayer = this;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    game.gameContainers.get("mainContainer")?.addChild(pixiGraph);
    // this.sprite.addChild(pixiGraph);
  }

  update(delta: number) {
    const playerCenter = {
      x: this.sprite.position.x + this.sprite.width / 2,
      y: this.sprite.position.y + this.sprite.height / 2,
    };
    handlePhysics(this, delta);
    pixiGraph.clear();
    pixiGraph.lineStyle(4, 0xffd900, 1);
    pixiGraph.moveTo(playerCenter.x, playerCenter.y);
    pixiGraph.lineTo(
      game.controlsManager.manager.mouse.global.x,
      game.controlsManager.manager.mouse.global.y
    );
    super.update(delta);
  }

  destroy(): void {
    super.destroy();
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keydown", handleKeyUp);
  }
}

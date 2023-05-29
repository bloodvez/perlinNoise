import { Body } from "matter-js";
import Drawable from "./Drawable";
import { TileTextures } from "./interfaces";

const playerDirection = {
  up: false,
  down: false,
  left: false,
  right: false,
};

function handleKeyDown(key: KeyboardEvent) {
  if (key.repeat) return;
  switch (key.code) {
    case "KeyW":
      playerDirection.up = true;
      break;
    case "KeyS":
      playerDirection.down = true;
      break;
    case "KeyA":
      playerDirection.left = true;
      break;
    case "KeyD":
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
  }

  update(delta: number) {
    handlePhysics(this, delta);
    super.update(delta);
  }

  destroy(): void {
    super.destroy();
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keydown", handleKeyUp);
  }
}

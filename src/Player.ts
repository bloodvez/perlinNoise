import { GAME_HEIGHT, GAME_WIDTH } from "./Constants";
import Drawable from "./Drawable";
import GameMap from "./GameMap";
import { GameObject } from "./GameObject";
import Tile from "./Tile";
import { TileTextures } from "./interfaces";

type playerDirections = "up" | "down" | "left" | "right";

const movementDirection: {
  current?: playerDirections;
  previous: playerDirections;
} = {
  current: undefined,
  previous: "up",
};

function handleKeyPress(key: KeyboardEvent) {
  switch (key.code) {
    case "KeyW":
      movementDirection.current = "up";
      Player.currentPlayer?.setRotation(0);
      break;
    case "KeyS":
      movementDirection.current = "down";
      Player.currentPlayer?.setRotation(180);
      break;
    case "KeyA":
      movementDirection.current = "left";
      Player.currentPlayer?.setRotation(270);
      break;
    case "KeyD":
      movementDirection.current = "right";
      Player.currentPlayer?.setRotation(90);
      break;
    case "Space":
      Player.currentPlayer?.updateTargetCoords();
      const target = Player.currentPlayer?.whatsInFront();
      console.log(target);
      break;
  }
  if (!movementDirection.current) return;

  if (movementDirection.current === movementDirection.previous) {
    GameObject.update();
    movementDirection.previous = movementDirection.current!;
    movementDirection.current = undefined;
    return;
  }
  movementDirection.previous = movementDirection.current!;
  movementDirection.current = undefined;
}

export default class Player extends Drawable {
  health: number;
  targetCoord: { x: number; y: number };
  static currentPlayer: Player | undefined = undefined;
  static addPlayer(x: number, y: number): Player {
    return new Player(x, y, "player01.png");
  }

  constructor(x: number, y: number, texture: TileTextures) {
    super(x, y, texture);
    this.health = 100;
    this.targetCoord = { x: this.x, y: this.y + 1 };
    Player.currentPlayer = this;
    document.addEventListener("keydown", handleKeyPress);
  }

  update(): void {
    this.updateTargetCoords();
    const target = this.whatsInFront();
    if (target === null || target?.passable) {
      this.setPos(this.targetCoord.x, this.targetCoord.y);
      return;
    }
    if (target?.passable === false) {
      this.setPos(this.x, this.y);
    }
  }

  destroy(): void {
    super.destroy();
    document.removeEventListener("keydown", handleKeyPress);
  }

  updateTargetCoords(): void {
    this.targetCoord.x =
      movementDirection.previous === "right"
        ? this.x + 1
        : movementDirection.previous === "left"
        ? this.x - 1
        : this.x;

    this.targetCoord.y =
      movementDirection.previous === "down"
        ? this.y + 1
        : movementDirection.previous === "up"
        ? this.y - 1
        : this.y;
  }

  whatsInFront(): Tile | null {
    if (
      this.targetCoord.x < 0 ||
      this.targetCoord.x >= GAME_WIDTH ||
      this.targetCoord.y < 0 ||
      this.targetCoord.y >= GAME_HEIGHT
    )
      return null;
    return GameMap.collisionMap[this.targetCoord.x][this.targetCoord.y];
  }
}

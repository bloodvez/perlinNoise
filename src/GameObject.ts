let id = 1;

export class GameObject {
  private static gameObjects: Map<number, GameObject> = new Map();
  private id: number;

  constructor() {
    GameObject.gameObjects.set(id, this);
    this.id = id;
    id++;
  }

  static update(delta: number): void {
    GameObject.gameObjects.forEach((elem: GameObject) => elem.update(delta));
  }

  update(delta: number): void {}

  destroy(): void {
    GameObject.gameObjects.delete(this.id);
  }
}

// @ts-ignore
window.gameObjects = GameObject.gameObjects;

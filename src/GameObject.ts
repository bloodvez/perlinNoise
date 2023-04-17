export class GameObject {
  private static gameObjects: GameObject[] = [];

  constructor() {
    GameObject.gameObjects.push(this);
  }

  static update(): void {
    GameObject.gameObjects.forEach((elem: GameObject) => elem.update());
  }

  update() {}
}

// @ts-ignore
window.gameObjects = GameObject.gameObjects;

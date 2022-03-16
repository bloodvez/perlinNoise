export class GameObject {
  static gameObjects: GameObject[] = [];

  constructor() {
    GameObject.gameObjects.push(this);
  }

  static update(delta:number | undefined): void {
		GameObject.gameObjects.forEach((elem:GameObject) => elem.update(delta));
	}
  update(delta:number | undefined){

  }
}

// @ts-ignore
window.gameObjects = GameObject.gameObjects;

import { Text, Application } from "pixi.js";
import { GameObject } from "./GameObject";

export default class Gui extends GameObject {
  fpsCounter: Text;

  constructor(app: Application) {
      super()
    this.fpsCounter = new Text("FPS", {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0xff1010,
      align: "center",
    });
    this.fpsCounter.x = 0;
    this.fpsCounter.y = app.view.height - 26;
    this.fpsCounter.zIndex = 100;
    app.stage.addChild(this.fpsCounter);
  }
  update() {
    // this.fpsCounter.text = delta.toString();
  }
}

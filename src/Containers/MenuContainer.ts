import { Container, Text } from "pixi.js";

export function menuContainer(): Container {
  const container = new Container();
  const text = new Text("This is a PixiJS text", {
    fontFamily: "Arial",
    fontSize: 24,
    fill: 0xff1010,
    align: "center",
  });
  container.addChild(text);
  text.zIndex = 10;
  return container;
}

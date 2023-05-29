import { Container, Rectangle, Sprite, Text, Texture } from "pixi.js";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Constants";
import { TextStyle } from "pixi.js";
import Player from "../Player";
import { game } from "../Game";

const textStyle = new TextStyle({
  fontFamily: "Arial",
  fontSize: 24,
  fill: 0xff1010,
  align: "center",
});

export function GuiContainer(): Container {
  const container = new Container();

  // Health amount
  const healthText = new Text("", textStyle);
  healthText.x = 10;
  healthText.y = WINDOW_HEIGHT - 1 * 26;
  healthText.zIndex = 100;

  // Player position
  const positionText = new Text("", textStyle);
  positionText.x = 10;
  positionText.y = WINDOW_HEIGHT - 3 * 26;
  positionText.zIndex = 100;

  // delta
  const deltaText = new Text("", textStyle);
  deltaText.x = 10;
  deltaText.y = WINDOW_HEIGHT - 4 * 26;
  deltaText.zIndex = 100;

  // pause button
  const pauseButton = new Sprite(Texture.WHITE);
  pauseButton.position.set(WINDOW_WIDTH - 150, 0);
  pauseButton.width = 150;
  pauseButton.height = 30;
  pauseButton.zIndex = 100;
  pauseButton.interactive = true;
  pauseButton.on("pointerdown", () => {
    game.app.ticker.started === true
      ? game.app.ticker.stop()
      : game.app.ticker.start();
  });

  game.app.ticker.add((delta) => {
    healthText.text = `Health: ${Player.currentPlayer?.health}`;
    positionText.text = `X: ${Player.currentPlayer?.hitbox.position.x}
Y: ${Player.currentPlayer?.hitbox.position.y}`;
    deltaText.text = `delta: ${delta}`;
  });

  container.addChild(healthText, positionText, deltaText, pauseButton);
  return container;
}

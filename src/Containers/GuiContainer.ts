import { Container, Text } from "pixi.js";
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
  const healthText = new Text("Health:", textStyle);
  healthText.x = 0;
  healthText.y = WINDOW_HEIGHT - 26;
  healthText.zIndex = 100;

  const healthTextAmount = new Text(
    `${Player.currentPlayer?.health}`,
    textStyle
  );
  healthTextAmount.x = healthText.width + 10;
  healthTextAmount.y = WINDOW_HEIGHT - 26;
  healthTextAmount.zIndex = 100;

  game.app.ticker.add(() => {
    healthTextAmount.text = `${Player.currentPlayer?.health}`;
  });

  container.addChild(healthText, healthTextAmount);
  return container;
}

import { Container, TilingSprite } from "pixi.js";
import { textureFromSpritesheet } from "../utils";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../Constants";

export function MainContainer(): Container {
  const container = new Container();
  const tilingSprite = new TilingSprite(
    textureFromSpritesheet("floor01.png"),
    WINDOW_WIDTH,
    WINDOW_HEIGHT
  );
  tilingSprite.anchor.set(0, 0);
  container.addChild(tilingSprite);
  tilingSprite.zIndex = -10;
  return container;
}

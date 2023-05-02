import { resources } from "./Game";
import { Sprite, Texture } from "pixi.js";
import { TileTextures } from "./interfaces";

export function spriteFromSpritesheet(texture: TileTextures): Sprite {
  const t = textureFromSpritesheet(texture);
  return new Sprite(t);
}

export function textureFromSpritesheet(texture: TileTextures): Texture {
  const t = resources["spritesheet"]["textures"]![texture];
  if (!t) {
    console.log("no such texture:", texture);
    return resources["spritesheet"]["textures"]!["red.png"];
  } else return t;
}

export function mergeObjects(mergeFrom: any, mergeTo: any) {
  for (const [key, value] of Object.entries(mergeFrom)) {
    if (mergeTo[key]) {
      mergeTo[key] += value;
    } else {
      mergeTo[key] = value;
    }
  }
}

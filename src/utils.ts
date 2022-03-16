import { resources } from "./Game";
import { Sprite, Texture } from "pixi.js";

export function spriteFromSpritesheet(texture: string): Sprite {
  return new Sprite(textureFromSpritesheet(texture))
}

export function textureFromSpritesheet(texture: string): Texture {
	let t = resources["spritesheet"]["textures"]![texture];
	if (!t) {
	  console.log("no such texture");
	  return resources["spritesheet"]["textures"]!["red.png"];
	} else return t;
  }

// @ts-ignore
export function mergeObjects(mergeFrom, mergeTo) {
  for (const [key, value] of Object.entries(mergeFrom)) {
    if (mergeTo[key]) {
      mergeTo[key] += value;
    } else {
      mergeTo[key] = value;
    }
  }
}

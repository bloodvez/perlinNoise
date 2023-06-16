import Entity from "./Entity";

export default class Character extends Entity {
  constructor(x: number, y: number) {
    super(x, y, "circle");
  }
}

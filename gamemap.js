class GameMap {
  constructor() {
    this.scale = 4.23
    this.multiplier = 70
    this.threshold = 15
    this.mapArr = []
  }

  async generateMap() {
    this.mapArr = []
    for (let x = 0; x < game.width; x++) {
      for (let y = 0; y < game.height; y++) {
        let v = Math.abs(perlin.get(x / this.scale, y / this.scale))
        let tile = new Tile(x, y)
        if (v * this.multiplier >= this.threshold) {
          tile.setWall()
        }
        this.mapArr.push(tile)
      }
    }
  }

  draw(ctx) {
    this.mapArr.forEach(elem => {
      ctx.drawImage(
        ...elem.texture,
        elem.x * game.pixelSize, // dx
        elem.y * game.pixelSize, // dy
        game.pixelSize, // dWidth
        game.pixelSize //dHeight
      )
    })
  }

  update() {
    //this.mapArr.forEach(elem => elem.update())
  }
}
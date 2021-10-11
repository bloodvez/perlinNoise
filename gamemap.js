let cnvs = document.getElementById('cnvs');
cnvs.width = cnvs.height = 512;
let ctx = cnvs.getContext('2d');

class GameMap {
    constructor(mapSize) {
      this.scale = 4
      this.multiplier = 70
      this.threshold = 16
      this.pixelSize = 16
      this.mapArr = matrix(mapSize,mapSize)
    }

    init(){
      for (let y = 0; y < gameMap.mapArr.length; y++ ){
        for (let x = 0; x < gameMap.mapArr.length; x++ ){
          let v = Math.abs(perlin.get(x / this.scale, y / this.scale))
          if(v * this.multiplier >= this.threshold){
            gameMap.mapArr[x][y] = 1
          } else {
            gameMap.mapArr[x][y] = 0
          }
        }
      }
    }

  draw() {
  ctx.clearRect(0, 0, cnvs.width, cnvs.height);
  for (let y = 0; y < this.mapArr.length; y++ ){
    for (let x = 0; x < this.mapArr.length; x++ ){
      if(this.mapArr[x][y] === 1){ // Wall
        ctx.fillStyle = `rgb(0,0,0)`;
        ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
      } else if (this.mapArr[x][y] === "P") { // Player
        ctx.fillStyle = `rgb(120,170,150)`;
        ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
      } else { // Floor
        ctx.fillStyle = `rgb(255,255,255)`;
        ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
      }
    }
}
}
}
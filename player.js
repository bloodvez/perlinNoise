class Player {
    constructor() {
      this.x = Math.floor(Math.random() * gameMap.mapArr.length);
      this.y = Math.floor(Math.random() * gameMap.mapArr.length);
      document.addEventListener('keydown', key => this.onKeyDown(key));
    }

    pickNewPosition(){
        this.x = Math.floor(Math.random() * gameMap.mapArr.length);
        this.y = Math.floor(Math.random() * gameMap.mapArr.length);
    }

    init(){
        while (gameMap.mapArr[this.x][this.y] === 1){
            this.pickNewPosition()
        }
            gameMap.mapArr[this.x][this.y] = "P"
    }

    onKeyDown(key) {
        let prevX = this.x
        let prevY = this.y
        if (key.keyCode == '83') { // S
            if(gameMap.mapArr[this.x][this.y + 1] != 1) this.y += 1
        }
        if (key.keyCode == '87') { // W
            if(gameMap.mapArr[this.x][this.y - 1] != 1) this.y -= 1
        }
        if (key.keyCode =='68') { // D
            if(gameMap.mapArr[this.x + 1][this.y] != 1) this.x += 1
        }
        if (key.keyCode == '65') { // A
            if(gameMap.mapArr[this.x - 1][this.y] != 1) this.x -= 1
        }
        gameMap.mapArr[prevX][prevY] = 0
        gameMap.mapArr[this.x][this.y] = "P"
        gameMap.draw()
    }
}
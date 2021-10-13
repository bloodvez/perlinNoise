class Player {
    constructor() {
        this.x = 1
        this.y = 1

        document.addEventListener('keydown', key => this.onKeyDown(key));
    }

    pickNewPosition() {
        this.x = Math.floor(Math.random() * game.width);
        this.y = Math.floor(Math.random() * game.height);
    }

    async init() {
        this.pickNewPosition()
        while (game.gameMap.mapArr.filter(elem => (elem.x === this.x && elem.y === this.y)).length > 0) {
            this.pickNewPosition()
        }
    }

    draw() {
        ctx.fillStyle = `rgb(120,150,170)`;
        ctx.fillRect(this.x * game.pixelSize, this.y * game.pixelSize, game.pixelSize, game.pixelSize);
    }

    onKeyDown(key) {
        let dir = { x: 0, y: 0 }
        if (key.keyCode == '83') { // S
            //this.y += 1;
            dir.y = 1
        }
        if (key.keyCode == '87') { // W
            //this.y -= 1;
            dir.y = -1
        }
        if (key.keyCode == '68') { // D
            //this.x += 1;
            dir.x = 1
        }
        if (key.keyCode == '65') { // A
            //this.x -= 1;
            dir.x = -1
        }

        let target = game.gameMap.mapArr.find(elem => (elem.x === (this.x + dir.x) && elem.y === (this.y + dir.y)));
        if (!target || target.passable) {
            this.x += dir.x
            this.y += dir.y
        }
        game.update()
        game.draw()
    }
}
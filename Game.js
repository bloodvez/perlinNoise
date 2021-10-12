class Game {
    constructor(width, height, pixelSize) {
        this.pixelSize = pixelSize
        this.width = width
        this.height = height
        this.gameMap = new GameMap()
        this.player = new Player()
        this.gameObjects = [];
        this.loaded = false

        this.canvas = document.getElementById('cnvs');
        this.canvas.width = width * this.pixelSize;
        this.canvas.height = height * this.pixelSize;
        this.ctx = this.canvas.getContext('2d');
    }

    async init() {
        await this.gameMap.generateMap()
        await this.player.init()
        this.draw()
    }

    restart() {
        perlin.seed()
        this.init()
    }

    update() {
        //this.gameMap.update()
        this.gameMap.update()
        this.gameObjects.forEach(elem => elem.update());
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, cnvs.width, cnvs.height);

        //Draw the map
        this.gameMap.draw(this.ctx)

        // Draw the player
        this.player.draw(this.ctx)
    }
}
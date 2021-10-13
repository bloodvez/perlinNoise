class Game {
    constructor(width, height, pixelSize) {
        this.pixelSize = pixelSize
        this.width = width
        this.height = height
        this.gameMap = new GameMap()
        this.player = new Player()
        this.gameObjects = [];
        this.loaded = false
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
        this.gameMap.update()
        this.gameObjects.forEach(elem => elem.update());
    }

    draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Draw the map
        this.gameMap.draw()

        // Draw the player
        this.player.draw()
    }
}